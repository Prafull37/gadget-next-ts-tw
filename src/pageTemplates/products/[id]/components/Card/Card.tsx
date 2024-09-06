import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card(props: CardProps) {
  const { className, children } = props;
  return (
    <div className={twMerge('bg-white py-4 px-2', className)}>{children}</div>
  );
}
