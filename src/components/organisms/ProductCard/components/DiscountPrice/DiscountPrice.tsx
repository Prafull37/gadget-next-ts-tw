import { twMerge } from 'tailwind-merge';

type DiscountPriceProps = {
  children?: React.ReactNode;
  className?: string;
};

const DiscountPrice = (props: DiscountPriceProps) => {
  const { children, className = '' } = props;
  return (
    <span className={twMerge('font-bold text-sm ml-2', className)}>
      ₹{children}
    </span>
  );
};

export default DiscountPrice;
