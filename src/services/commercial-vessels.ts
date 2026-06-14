import { getRpcBaseUrl } from '@/services/rpc-client';

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
}

export interface CommercialVesselWatch {
  timestamp: string;
  query: string[];
  status: {
    connected: boolean;
    vessels: number;
    messages: number;
  };
  vessels: CommercialVesselReport[];
}

export async function fetchCommercialVesselWatch(
  query = 'maersk,hapag,lloyd',
  options?: { signal?: AbortSignal; limit?: number },
): Promise<CommercialVesselWatch> {
  const params = new URLSearchParams({
    query,
    limit: String(options?.limit ?? 80),
  });
  const response = await fetch(`${getRpcBaseUrl()}/api/maritime/v1/list-commercial-vessels?${params.toString()}`, {
    signal: options?.signal,
  });
  if (!response.ok) {
    throw new Error(`Commercial vessel watch failed: HTTP ${response.status}`);
  }
  return await response.json() as CommercialVesselWatch;
}
