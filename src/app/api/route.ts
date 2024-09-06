import { NextRequest, NextResponse, userAgent } from 'next/server';
import sections from '@/json/landingpage/sections.json';

function filterBanners(data, deviceTypes) {
  // Filter banners with at least one image for the specified device types
  const filteredBanners = Object.entries(data)
    .filter(([key, banner]) => {
      const { srcSet } = banner;
      return deviceTypes.some((type) => srcSet[type]);
    })
    .map(([key, banner]) => ({
      id: key,
      srcSet: deviceTypes.reduce(
        (acc, type) => ({ ...acc, [type]: banner.srcSet[type] }),
        {}
      ),
      url: banner.url,
    }));

  // Randomly select 5 banners if there are more than 5
  if (filteredBanners.length > 5) {
    return filteredBanners.sort(() => Math.random() - 0.5).slice(0, 5);
  }

  return filteredBanners;
}

export function GET(req: NextRequest) {
  const { device } = userAgent(req);
  const applicableDeviceType =
    device.type === 'mobile' || device.type === 'tablet'
      ? ['mobile', 'tablet']
      : ['desktop'];
  const { banners } = sections.sections;
  const filteredBanner = filterBanners(banners, applicableDeviceType);
  return NextResponse.json({ ...sections.sections, banners: filteredBanner });
}
