'use client';

import _map from 'lodash/map';

import Pills from '@/components/atoms/Pills';

import { FaFilter } from 'react-icons/fa6';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// type SortingPillProps = {
//   selectedValue: 'string';
// };

export default function FilterPill() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterLength = searchParams.has('sort')
    ? searchParams.size - 1
    : searchParams.size;

  return (
    <Link href={`${pathname}/filters?${searchParams}`}>
      <Pills isActiveStateControlDisabled={true} isActive={filterLength > 0}>
        <div className="flex justify-evenly items-center">
          <FaFilter className="mr-1" />
          <div className="mr-1">Filters</div>
          <span className="text-xs text-white h-4 w-4  rounded-full text-center bg-[#101827]">
            {filterLength}
          </span>
        </div>
      </Pills>
    </Link>
  );
}
