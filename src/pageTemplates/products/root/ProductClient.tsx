'use client';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';

import FullProductCard from './ProductCard/ProductCard';
import { Product as ProductType } from '@/types/Product';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useProductReducer from './product.reducer';
import { getProducts } from './api/getProducts';

type ProductPageProps = {
  initialProducts: ProductType[];
};

export default function ProductClient(props: ProductPageProps) {
  const searchParams = useSearchParams();
  const isCallInProgress = useRef<boolean>(false);

  const [page, setPage] = useState(0);
  const { products, loading, hasMore, totalLength, dispatch } =
    useProductReducer(props.initialProducts);

  const fetchData = useCallback(
    async (pageParam: number) => {
      dispatch({ type: 'SET_LOADING', payload: true });
      isCallInProgress.current = true;

      //@ts-expect-error
      const { data: newProducts, totalLength } = await getProducts({
        ...searchParams,
        page: `${pageParam}`,
      });

      isCallInProgress.current = false;
      dispatch({ type: 'SET_TOTAL_LENGTH', payload: totalLength });
      dispatch({ type: 'APPEND_PRODUCTS', payload: newProducts });

      dispatch({ type: 'SET_LOADING', payload: false });
    },
    [searchParams, page]
  );

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 150 >=
      document.documentElement.scrollHeight
    ) {
      if (!loading && hasMore && !isCallInProgress.current) {
        const nextPage = page + 1;
        setPage(nextPage);
        console.log('nextPage', nextPage);
        dispatch({ type: 'SET_LOADING', payload: true });
        fetchData(nextPage);
      }
    }
  }, [loading, hasMore, page]);

  // useEffect(() => {
  //   if (!_isEqual(prevSearchParams.current, searchParams)) {
  //     fetchData();
  //     prevSearchParams.current = searchParams; // Fetch data on mount or when searchParams/page changes
  //   }
  // }, [searchParams]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-row flex-wrap items-center content-start">
      {_map(products, (product: ProductType) => (
        <FullProductCard key={product.id} {...product} />
      ))}
      {loading && <p>Loading more products...</p>}
      {!hasMore && products.length === totalLength && (
        <p>No more products to load.</p>
      )}
    </div>
  );
}
