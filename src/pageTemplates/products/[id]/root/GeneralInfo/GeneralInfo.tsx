import _get from 'lodash/get';
import Image from 'next/image';
import Card from '../../components/Card/Card';
import Rating from '@/components/atoms/Rating';
import {
  ActualPrice,
  calculatePercentage,
  DiscountPercentage,
  DiscountPrice,
  PricingSection,
} from '@/components/organisms/ProductCard';
import { Product } from '@/types/Product';

export default function GeneralInfo(props: Product) {
  const { image, name, ratings, price } = props;

  const { actual_price, discount_price } = price;

  const { isDiscounted, discountPercentage } = calculatePercentage(
    actual_price,
    discount_price
  );
  return (
    <Card>
      <div className="flex flex-col">
        <div className="relative h-[350px]">
          <Image src={image} alt={name} fill objectFit="contain" />
        </div>
      </div>
      <div>{name}</div>
      <div className="flex items-end">
        <Rating rating={_get(ratings, 'value', 0)} />
        <span className="text-xs text-green-600">
          {_get(ratings, 'no_of_ratings', 0)} ratings
        </span>
      </div>
      <PricingSection>
        <DiscountPercentage
          isDiscounted={isDiscounted}
          className="text-lg mr-3"
        >
          {discountPercentage}
        </DiscountPercentage>
        <ActualPrice className="text-lg mr-3">{actual_price}</ActualPrice>
        <DiscountPrice className="text-lg mr-3">{discount_price}</DiscountPrice>
      </PricingSection>
    </Card>
  );
}
