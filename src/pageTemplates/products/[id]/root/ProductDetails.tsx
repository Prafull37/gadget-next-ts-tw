import _get from 'lodash/get';

import { Product } from '@ngneat/falso';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import RatingSection from './RatingSection';
import SpecificationAndCompany from './SpecificationAndCompnay';
import ActionButton from '../components/ActionButton/ActionButton';

async function getProductDetails(id: string): Promise<Product | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_JS_API_ORIGIN}/api/products/${id}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

type Props = {
  id: string;
};

export default async function ProductDetails(props: Props) {
  const { id } = props;
  const product = (await getProductDetails(id)) as Product;
  return (
    <div>
      <div className="mb-[55px]">
        {/* @ts-expect-error check why it is detecting only used properties(which is better to have, then fix at pass end) */}
        <GeneralInfo {...product} />
        <SpecificationAndCompany id={id} />
        <RatingSection id={id} ratings={_get(product, 'ratings')} />
      </div>
      <ActionButton />
    </div>
  );
}
