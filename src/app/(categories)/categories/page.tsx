import _map from 'lodash/map';
import _get from 'lodash/get';

import Pills from '@/components/atoms/Pills';
import Link from 'next/link';
import { Category } from '@/types/Category';

async function getCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_JS_API_ORIGIN}/api/category`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="flex flex-row flex-wrap justify-start items-center content-start">
      {_map(categories, (category: Category) => {
        const id = _get(category, 'id', '');
        const url = id ? `/products?categories=${id}` : '/products';
        return (
          <Link href={url} key={id} className="m-1">
            <Pills>{_get(category, 'title')}</Pills>
          </Link>
        );
      })}
    </div>
  );
}
