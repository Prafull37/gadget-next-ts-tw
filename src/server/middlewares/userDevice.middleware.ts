import { headers } from 'next/headers';
import { userAgent } from 'next/server';

//@ts-expect-error
const userDeviceMiddleware = async ({ request, response }) => {
  console.log('request', request);
  console.log('coming here...');
  const { device } = userAgent(request);
  request.set('deviceType', device?.type || 'desktop');

  return response;
};

export default userDeviceMiddleware;
