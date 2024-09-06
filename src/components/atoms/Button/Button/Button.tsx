import { twMerge } from 'tailwind-merge';
import ButtonProps from '../index.types';
import { LINK_CLASS } from '@/constants/styles.constants';

const primaryColor =
  'bg-[#101827] hover:bg-[#202d46] active:bg-[#213251] disabled:bg-gray-200 text-white';

const linkColor = LINK_CLASS;

export default function Button(props: ButtonProps) {
  const {
    disabled = false,
    children,
    variant = 'solid',
    className,
    ...restProps
  } = props;

  const classNameToApply =
    variant === 'solid'
      ? twMerge(
          'px-4 py-2 font-medium rounded-md w-full cursor-pointer justify-center items-center',
          primaryColor,
          className
        )
      : twMerge(
          'flex justify-center items-center cursor-pointer',
          linkColor,
          className
        );
  // primary
  return (
    <button className={classNameToApply} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
}
