'use client';

import _map from 'lodash/map';

import Pills from '@/components/atoms/Pills';
import SidePanel from '@/components/molecules/Sidepanel/Sidepanel';
import { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { SORTING_ITEMS } from './Sorting.constant';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

// type SortingPillProps = {
//   selectedValue: 'string';
// };

export default function SortingPill() {
  const [isBottomDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const onOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onClick = (value: string) => {
    const search = new URLSearchParams(searchParams);
    search.set('sort', value);
    setIsDrawerOpen(false);
    router.replace(`${pathname}?${search.toString()}`);
  };

  return (
    <div>
      <Pills
        onClick={onOpenDrawer}
        isActive={Boolean(searchParams.get('sort'))}
        isActiveStateControlDisabled={true}
      >
        <div className="flex justify-evenly items-center">
          <div className="mr-2">Sorting</div>
          <FaChevronCircleDown />
        </div>
      </Pills>
      <SidePanel
        className="rounded-lg"
        isOpen={isBottomDrawerOpen}
        onClose={onClose}
        position="bottom"
      >
        <div className="font-light p-2 border-b border-solid text-gray-500 border-gray-300">
          Sort By
        </div>
        <div className="flex flex-col justify-start items-start py-2">
          {_map(SORTING_ITEMS, (title: string, key: string) => (
            <button
              key={key}
              className="w-full px-2"
              onClick={() => onClick(key)}
            >
              <div className="flex justify-between items-center">
                <div className="text-sm font-semibold my-2">{title}</div>
                {searchParams.get('sort') === key && (
                  <div>
                    <FaCheck
                      fontSize={'1rem'}
                      fontWeight={300}
                      className="text-green-800 font-light"
                    />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </SidePanel>
    </div>
  );
}
