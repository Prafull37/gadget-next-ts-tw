'use client';
import _map from 'lodash/map';
import useSlider from '@/hooks/useSlider';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

type Banner = {
  id: string;
  srcSet: { mobile?: string; desktop?: string; tablet?: string };
  url: string;
};

type BannerProps = {
  banners: Array<Banner>;
};

export default function Banners(props: BannerProps) {
  const { banners } = props;
  const { offset, addItem } = useSlider({
    total: banners.length,
    enabled: true,
    speed: 2500,
  });

  return (
    <div className="h-[150px] md:h-[350px] w-full p-4 bg-white relative rounded-md overflow-hidden">
      {_map(banners, (banner: Banner, index: number) => {
        const { mobile, tablet, desktop } = banner.srcSet;

        return (
          <Link href={banner.url} key={banner.id}>
            <div
              className={twMerge(
                'relative w-full h-full bg-[#32323242] transition-all ease-in-linear',
                index !== offset ? `hidden` : ''
              )}
            >
              <picture>
                <source srcSet={desktop} />
                <source srcSet={tablet} />
                <Image
                  src={mobile as string}
                  alt="banner"
                  priority={true}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </picture>
            </div>
          </Link>
        );
      })}
      <div className="w-[30%] bg-[#dedede99] absolute rounded-full h-2 bottom-1 translate-x-[-50%] left-[50%] flex justify-between items-center p-1">
        {_map(banners, (b: Banner, index: number) => (
          <div
            key={b.id}
            className={twMerge(
              'h-[2px] w-[2px] rounded-full border-2 border-solid border-black',
              index === offset ? 'border-white' : ''
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
