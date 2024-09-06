import { Product as ProductType } from '@/types/Product';

type APIResponse = {
  data: ProductType[];
  totalLength: number;
};

type getProductParams = {
  categories?: string;
  page: string | undefined;
  limit: string | undefined;
  sort: string | undefined;
};

export async function getProducts(
  params: getProductParams
): Promise<APIResponse> {
  const { categories, page = undefined, sort = undefined } = params;
  console.log('filter for ', { categories, page, sort });
  try {
    const url = `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/products`;
    const searchParams = new URLSearchParams();
    if (categories) {
      searchParams.set('categories', categories);
    }
    if (sort) {
      searchParams.set('sort', sort);
    }
    if (page !== undefined) {
      searchParams.set('page', page);
    }
    const response = await fetch(
      `${url}${searchParams.size ? `?${searchParams.toString()}` : ''}`
    );
    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
    return { data: [], totalLength: 0 }; // Default fallback
  }
}
