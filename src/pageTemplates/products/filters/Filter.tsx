'use client';
import _map from 'lodash/map';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import CategoryCheckbox from './CategoriesCheckbox/CategoriesCheckbox';
import { useState } from 'react';
import Button from '@/components/atoms/Button';
import { RxCross2 } from 'react-icons/rx';
import { usePathname, useRouter } from 'next/navigation';

const FILTERS_VS_COMPONENTS = {
  categories: {
    checkbox: CategoryCheckbox,
  },
};

type FilterType = {
  title: string;
  key: string;
  allowedValues: any;
  widgets: string;
};

type FilterProps = {
  searchParams: {
    [key in string]: string;
  };
  filters: string;
};

export default function Filter(props: FilterProps) {
  const { filters, searchParams } = props;
  const pathname = usePathname();
  const router = useRouter();

  const [applicableSearchParams, setApplicableSearchParams] =
    useState(searchParams);

  const onClear = () => {
    console.log('onClear');
    setApplicableSearchParams({});
  };

  const onApplyFilter = () => {
    const urlSearchParams = new URLSearchParams(applicableSearchParams);
    router.replace(
      `${pathname.replace('/filters', '')}?${urlSearchParams.toString()}`
    );
  };

  return (
    <div className="bg-white px-2 py-4">
      <div className="flex items-center justify-between">
        <h5 className="text-md font-semibold">Filters</h5>
        <Button
          variant="link"
          className="text-xs no-underline"
          onClick={onClear}
        >
          <RxCross2 fontSize={'1rem'} className="text-inherit" /> Clear All
        </Button>
      </div>
      {_map(filters, (filter: FilterType, key: string) => {
        const widget = _get(filter, 'widget', '');
        const title = _get(filter, 'title', '');

        const keyToUse = _get(filter, 'key', '');
        const Component = _get(FILTERS_VS_COMPONENTS, [key, widget], '');

        const selectedValues = _get(applicableSearchParams, key, '');
        if (!Component) return null;

        return (
          <div className="p-1 mb-8" key={keyToUse}>
            {title && (
              <div className="text-gray-500 text-sm font-semibold border-b my-4">
                {title}
              </div>
            )}
            <Component
              {..._omit(filter, 'key')}
              selectedValues={selectedValues}
              onChange={(value: any) => {
                setApplicableSearchParams((prev) => ({
                  ...prev,
                  [keyToUse]: value,
                }));
              }}
            />
          </div>
        );
      })}
      <div>
        <Button onClick={onApplyFilter}>Apply Filters</Button>
      </div>
    </div>
  );
}
