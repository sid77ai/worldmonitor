import type { ServerContext } from '../../../../src/generated/server/worldmonitor/maritime/v1/service_server';
import { getRelayBaseUrl, getRelayHeaders } from '../../../_shared/relay';

export interface CommercialVesselReport {
  mmsi: string;
  name: string;
  operator: string;
  lat: number;
  lon: number;
  shipType: number;
  heading: number;
  speed: number;
  course: number;
  timestamp: number;
  destination: string;
  eta: number;
}

export interface ListCommercialVesselsRequest {
  query: string;
  limit: number;
}

export interface ListCommercialVesselsResponse {
  timestamp: string;
  query: string[];
  status: {
    connected: boolean;
    vessels: number;
    messages: number;
  };
  vessels: CommercialVesselReport[];
}

function sanitizeQuery(raw: string): string {
  return String(raw || 'maersk,hapag,lloyd')
    .split(',')
    .map((term) => term.trim())
    .filter((term) => /^[a-z0-9 ._-]{3,40}$/i.test(term))
    .slice(0, 12)
    .join(',');
}

function sanitizeLimit(raw: number): number {
  const n = Number(raw);
  if (!Number.isFinite(n)) return 80;
  return Math.max(1, Math.min(Math.floor(n), 200));
}

function toVessel(raw: any): CommercialVesselReport | null {
  if (!raw || typeof raw !== 'object') return null;
  const mmsi = String(raw.mmsi ?? '');
  const lat = Number(raw.lat);
  const lon = Number(raw.lon);
  if (!mmsi || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return {
    mmsi,
    name: String(raw.name ?? ''),
    operator: String(raw.operator ?? ''),
    lat,
    lon,
    shipType: Number.isFinite(Number(raw.shipType)) ? Number(raw.shipType) : 0,
    heading: Number.isFinite(Number(raw.heading)) ? Number(raw.heading) : 0,
    speed: Number.isFinite(Number(raw.speed)) ? Number(raw.speed) : 0,
    course: Number.isFinite(Number(raw.course)) ? Number(raw.course) : 0,
    timestamp: Number.isFinite(Number(raw.timestamp)) ? Number(raw.timestamp) : Date.now(),
    destination: String(raw.destination ?? ''),
    eta: Number.isFinite(Number(raw.eta)) ? Number(raw.eta) : 0,
  };
}

export async function listCommercialVessels(
  _ctx: ServerContext,
  req: ListCommercialVesselsRequest,
): Promise<ListCommercialVesselsResponse> {
  const fallback: ListCommercialVesselsResponse = {
    timestamp: new Date().toISOString(),
    query: sanitizeQuery(req.query).split(',').filter(Boolean),
    status: { connected: false, vessels: 0, messages: 0 },
    vessels: [],
  };

  try {
    const relayBaseUrl = getRelayBaseUrl();
    if (!relayBaseUrl) return fallback;
    const params = new URLSearchParams({
      q: sanitizeQuery(req.query),
      limit: String(sanitizeLimit(req.limit)),
    });
    const response = await fetch(`${relayBaseUrl}/ais/vessels?${params.toString()}`, {
      headers: getRelayHeaders(),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return fallback;
    const data = await response.json();
    const rawStatus = (data.status && typeof data.status === 'object') ? data.status : {};
    return {
      timestamp: String(data.timestamp || fallback.timestamp),
      query: Array.isArray(data.query) ? data.query.map(String) : fallback.query,
      status: {
        connected: Boolean(rawStatus.connected),
        vessels: Number.isFinite(Number(rawStatus.vessels)) ? Number(rawStatus.vessels) : 0,
        messages: Number.isFinite(Number(rawStatus.messages)) ? Number(rawStatus.messages) : 0,
      },
      vessels: Array.isArray(data.vessels)
        ? data.vessels.map(toVessel).filter((v: CommercialVesselReport | null): v is CommercialVesselReport => v !== null)
        : [],
    };
  } catch {
    return fallback;
  }
}
