import _get from 'lodash/get';

import { FaCheck } from 'react-icons/fa6';
import { CheckboxProps, SIZE_ENUM } from './index.type';
import { twMerge } from 'tailwind-merge';

const SIZE_VS_DIMENSION = {
  [SIZE_ENUM.XS]: 'h-4 w-4 rounded-sm p-[1px]',
  [SIZE_ENUM.SM]: 'h-6 w-6 rounded-md p-1',
};

export default function Checkbox(props: CheckboxProps) {
  const { checked, onChange, checkboxSize = 'sm', ...rest } = props;
  return (
    <span
      className={twMerge(
        'relative flex h-4 w-4 border-gray-500 border border-solid box-border rounded-sm  justify-center items-center flex-col cursor-pointer',
        _get(SIZE_VS_DIMENSION, checkboxSize)
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        className="absolute w-full h-full top-0 left-0 z-[1] opacity-0 cursor-pointer"
        onChange={onChange}
        {...rest}
      />
      {checked && <FaCheck className="text-blue-950" />}
    </span>
  );
}
