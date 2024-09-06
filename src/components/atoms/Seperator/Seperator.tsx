import { twMerge } from 'tailwind-merge';

type SeperatorProps = {
  direction?: 'horizontal' | 'vertical';
};
export default function Seperator(props: SeperatorProps) {
  const { direction = 'horizontal' } = props;

  const classToAdd = direction === 'vertical' ? 'rotate-180 my-2' : 'mx-2';

  return <div className={twMerge('border border-gray-200', classToAdd)}></div>;
}
