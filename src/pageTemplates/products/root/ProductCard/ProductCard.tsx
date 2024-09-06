import { Product } from '@/types/Product';

import MinimalProductCard, {
  PricingSection,
  DiscountPercentage,
  ActualPrice,
  DiscountPrice,
  calculatePercentage,
  AddToCartButton,
} from '@/components/organisms/ProductCard';

const FullProductCard = (props: Product) => {
  const { discountPercentage, isDiscounted } = calculatePercentage(
    props.price.actual_price,
    props.price.discount_price
  );

  return (
    <MinimalProductCard id={props.id} image={props.image} name={props.name}>
      <PricingSection>
        {isDiscounted && (
          <DiscountPercentage isDiscounted={isDiscounted}>
            {discountPercentage}
          </DiscountPercentage>
        )}
        <ActualPrice>{props.price.actual_price}</ActualPrice>
        <DiscountPrice>{props.price.discount_price}</DiscountPrice>
      </PricingSection>
      <AddToCartButton />
    </MinimalProductCard>
  );
};

export default FullProductCard;
