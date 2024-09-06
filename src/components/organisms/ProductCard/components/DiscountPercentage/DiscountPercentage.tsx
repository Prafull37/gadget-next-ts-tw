import { twMerge } from 'tailwind-merge';

type DiscountPercentageProps = {
  children?: React.ReactNode;
  isDiscounted?: boolean;
  className?: string;
};

const DiscountPercentage = (props: DiscountPercentageProps) => {
  const { children, isDiscounted = true, className = '' } = props;
  return (
    <span
      className={twMerge(
        'text-sm font-semibold mr-2 px-2.5 py-0.5 rounded',
        isDiscounted
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800',
        className
      )}
    >
      {children} %
    </span>
  );
};

export function calculatePercentage(
  actualPrice: number,
  discountPrice: number
) {
  if (actualPrice <= 0 || discountPrice <= 0) {
    return {
      discount: 0,
      discountPercentage: 0,
      isIncreased: null,
    };
  }

  const discountAmount = actualPrice - discountPrice;
  const discountPercentage = (discountAmount / actualPrice) * 100;
  const isDiscounted = discountAmount > 0;

  return {
    discount: Math.abs(discountAmount), // Absolute value of the discount
    discountPercentage: Math.abs(Number(discountPercentage.toFixed(2))), // Rounded to 2 decimal places
    isDiscounted, // True if discount is positive, False if negative
  };
}

export default DiscountPercentage;
