// Schedule-adherence model for commercial vessels.
//
// "Adherence" needs a reference schedule. Today the only free signal is the
// crew's self-reported Destination + ETA from AIS Type 5 frames. This module
// normalizes any schedule source into a single `ScheduleReference` shape and
// assesses adherence from it, so a paid liner-schedule API (Maersk/Hapag/an
// aggregator) can be slotted in later via `deriveLinerSchedule` without
// touching `assessAdherence` or the UI.

import type { CommercialVesselReport } from '@/services/commercial-vessels';
import { PORTS } from '@/config/ports';
import type { Port } from '@/types';
import { haversineKm } from '@/utils/distance';

export type ScheduleSource = 'ais' | 'liner';

export interface ScheduleReference {
  source: ScheduleSource;
  destination: string; // raw destination text from the source
  eta: number; // epoch ms, 0 if unknown
}

export type AdherenceStatus = 'ahead' | 'on-track' | 'behind' | 'overdue' | 'arrived' | 'unknown';

export interface AdherenceResult {
  status: AdherenceStatus;
  label: string; // short human summary, e.g. "2h behind ETA"
  deltaHours: number | null; // estimatedArrival − reportedETA in hours (+ = behind); null when not computable
  destinationPort: Port | null;
  reference: ScheduleReference | null;
}

// --- Schedule sources -------------------------------------------------------

export function deriveAisSchedule(vessel: CommercialVesselReport): ScheduleReference | null {
  if (!vessel.destination && !vessel.eta) return null;
  return { source: 'ais', destination: vessel.destination, eta: vessel.eta };
}

// Seam for the paid path: returns the same shape from a published liner
// schedule. Null until wired to a real API.
export function deriveLinerSchedule(_vessel: CommercialVesselReport): ScheduleReference | null {
  return null;
}

// Prefer the most authoritative source available.
export function resolveSchedule(vessel: CommercialVesselReport): ScheduleReference | null {
  return deriveLinerSchedule(vessel) ?? deriveAisSchedule(vessel);
}

// --- Destination geocoding --------------------------------------------------

function normalizePortText(value: string): string {
  return value
    .toUpperCase()
    .replace(/\bPORT OF\b|\bPORT\b|\bTERMINAL\b|\bANCHORAGE\b/g, ' ')
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim();
}

// AIS destination text is free-form and messy (city names, abbreviations, or
// UN/LOCODEs like "DEHAM"). We match on city-name containment against the
// known PORTS list; LOCODE-only destinations won't resolve, which is an
// accepted limitation of the free AIS source.
export function matchDestinationPort(destination: string): Port | null {
  const dest = normalizePortText(destination);
  if (dest.length < 3) return null;
  for (const port of PORTS) {
    const key = normalizePortText(port.name);
    if (!key) continue;
    if (dest === key || dest.includes(key) || key.includes(dest)) return port;
  }
  return null;
}

// --- Adherence assessment ---------------------------------------------------

function formatHours(hours: number): string {
  const abs = Math.abs(hours);
  if (abs < 1) return `${Math.round(abs * 60)}m`;
  if (abs < 48) return `${abs.toFixed(1)}h`;
  return `${Math.round(abs / 24)}d`;
}

export function assessAdherence(vessel: CommercialVesselReport, ref: ScheduleReference | null): AdherenceResult {
  const port = ref ? matchDestinationPort(ref.destination) : null;
  if (!ref || !ref.eta) {
    return { status: 'unknown', label: 'No ETA reported', deltaHours: null, destinationPort: port, reference: ref };
  }

  const now = Date.now();

  // Best case: we can geocode the destination and the vessel is underway, so
  // we estimate arrival from great-circle distance ÷ speed-over-ground.
  if (port && vessel.speed > 0.5) {
    const distNm = haversineKm(vessel.lat, vessel.lon, port.lat, port.lon) / 1.852;
    if (distNm < 5) {
      return { status: 'arrived', label: `At ${port.name}`, deltaHours: 0, destinationPort: port, reference: ref };
    }
    const estArrival = now + (distNm / vessel.speed) * 3_600_000;
    const deltaHours = (estArrival - ref.eta) / 3_600_000;
    const status: AdherenceStatus = deltaHours > 1 ? 'behind' : deltaHours < -1 ? 'ahead' : 'on-track';
    const suffix = status === 'on-track' ? 'on ETA' : status === 'behind' ? 'behind ETA' : 'ahead of ETA';
    return { status, label: `${formatHours(deltaHours)} ${suffix}`, deltaHours, destinationPort: port, reference: ref };
  }

  // Fallback: no geocode (or vessel stopped) — we can only compare the
  // reported ETA to now, not verify true adherence.
  const hoursToEta = (ref.eta - now) / 3_600_000;
  if (hoursToEta < -1) {
    return { status: 'overdue', label: `Overdue ${formatHours(hoursToEta)}`, deltaHours: null, destinationPort: port, reference: ref };
  }
  return { status: 'unknown', label: `ETA in ${formatHours(hoursToEta)}`, deltaHours: null, destinationPort: port, reference: ref };
}
