export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../server/gateway';
import { createMaritimeServiceRoutes } from '../../../src/generated/server/worldmonitor/maritime/v1/service_server';
import { maritimeHandler } from '../../../server/worldmonitor/maritime/v1/handler';
import { listCommercialVessels } from '../../../server/worldmonitor/maritime/v1/list-commercial-vessels';

export default createDomainGateway(
  [
    ...createMaritimeServiceRoutes(maritimeHandler, serverOptions),
    {
      method: 'GET',
      path: '/api/maritime/v1/list-commercial-vessels',
      handler: async (req: Request): Promise<Response> => {
        const url = new URL(req.url, 'http://localhost');
        const result = await listCommercialVessels(
          {
            request: req,
            pathParams: {},
            headers: Object.fromEntries(req.headers.entries()),
          },
          {
            query: url.searchParams.get('query') || 'maersk,hapag,lloyd',
            limit: Number(url.searchParams.get('limit') || 80),
          },
        );
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      },
    },
  ],
);
