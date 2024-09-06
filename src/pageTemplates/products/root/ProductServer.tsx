import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';

import FilterPill from './FilterPill/FilterPill';
import SortingPill from './SortingPill/SortingPill';
import { getProducts } from './api/getProducts';
import ProductClient from './ProductClient';
import Link from 'next/link';
import { LINK_CLASS } from '@/constants/styles.constants';
import { twMerge } from 'tailwind-merge';

type ProductPageProps = {
  searchParams: {
    [key: string]: string;
  };
};

export default async function Product(props: ProductPageProps) {
  const { searchParams } = props;
  const { data } = await getProducts(searchParams);

  return (
    <div>
      <div>
        <div className="flex w-full gap-2 justify-start items-center">
          <SortingPill />
          <FilterPill />
          <Link href={'/products'} className={twMerge(LINK_CLASS, 'text-xs')}>
            Clear All
          </Link>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center content-start">
        <ProductClient initialProducts={data} />
      </div>
    </div>
  );
}
