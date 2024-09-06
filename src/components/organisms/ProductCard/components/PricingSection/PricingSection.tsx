import { twMerge } from 'tailwind-merge';

type PricingSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const PricingSection = (props: PricingSectionProps) => {
  const { children, className = '' } = props;
  return (
    <div
      className={twMerge(
        'flex items-center mt-2 mb-4 flex-wrap content-start',
        className
      )}
    >
      {props.children}
    </div>
  );
};

export default PricingSection;
