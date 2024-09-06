import _map from 'lodash/map';
import _concat from 'lodash/concat';

import Link from 'next/link';
import Section from '../components/Section';
import { COLOR_SET } from '../constants/colors.constants';
import { FaChevronCircleRight } from 'react-icons/fa';
import Image from 'next/image';
import type { Product as ProductType } from '@/types/Product';
import ProductCard from '@/components/organisms/ProductCard';

type PersonalizedCategorySection = {
  title: string;
  noOfcategoriesItemToDisplayRandomly: {
    [key: string]: number;
  };
  redirectionUrl: string;
};

async function fetchProductByCategoryId(
  categoriesAndProducts: PersonalizedCategorySection['noOfcategoriesItemToDisplayRandomly']
) {
  let product: Array<ProductType> = [];
  for (let category in categoriesAndProducts) {
    try {
      const response = await fetch(
        `${process.env.NEXT_JS_API_ORIGIN}/api/category/product/${category}?noOfItem=${categoriesAndProducts[category]}`
      );
      const data = await response.json();
      product = _concat(product, data);
    } catch (e) {
      //error
      console.error(e);
    }
  }

  return product;
}

export default async function PersonalizedCategorySection(
  props: PersonalizedCategorySection
) {
  const {
    title,
    noOfcategoriesItemToDisplayRandomly: itemCountByCategories,
    redirectionUrl,
  } = props;

  const color = COLOR_SET[Math.floor(Math.random() * COLOR_SET.length)];
  const products = await fetchProductByCategoryId(itemCountByCategories);

  return (
    <Section
      heading={title}
      icon={
        <Link href={redirectionUrl} className="text-sm text-white">
          <FaChevronCircleRight />
        </Link>
      }
      className="p-2"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-between items-center content-start">
        {_map(products, (product: ProductType) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
            />
          );
        })}
      </div>
    </Section>
  );
}
