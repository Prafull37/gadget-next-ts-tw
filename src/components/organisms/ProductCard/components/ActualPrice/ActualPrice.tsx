import { twMerge } from 'tailwind-merge';

type ActualPriceProps = {
  children?: React.ReactNode;
  lineThrough?: boolean;
  className?: string;
};

const ActualPrice = (props: ActualPriceProps) => {
  const { children, lineThrough = true, className = '' } = props;
  return (
    <span
      className={twMerge(
        'text-gray-500 text-sm',
        lineThrough ? 'line-through' : '',
        className
      )}
    >
      ₹{children}
    </span>
  );
};

export default ActualPrice;
