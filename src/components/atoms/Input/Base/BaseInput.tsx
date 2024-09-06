'use client';
import { twMerge } from 'tailwind-merge';
import BaseInputProps, {
  SIZE_ENUM,
  SIZE_VS_PADDING,
  SIZE_VS_TEXT,
} from '../index.types';
import { forwardRef, useRef } from 'react';
import { mergeRefs } from '@/utils/react.utils';

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
  const {
    placeholder = '',
    inputSize = SIZE_ENUM.MD,
    leftIcon,
    rightIcon,
    className,
    type = 'text',
    onFocus: onFocusFromProps,
    onBlur,
    onChange,
    id,
    name,
    classNames,
    value,
    componentProps = {},
    ...restProps
  } = props;

  const innerRef = useRef<HTMLInputElement>(null);
  const borderColor = 'border-gray-600';

  //@ts-expect-error Check for appropriate type
  const onFocus = (e) => {
    innerRef?.current?.focus();
    onFocusFromProps && onFocusFromProps(e);
  };

  const containerStyle = [`border ${borderColor} rounded-md p-1 `];
  if (leftIcon) {
    containerStyle.push('pl-2');
  }
  if (rightIcon) {
    containerStyle.push('pr-2');
  }

  containerStyle.push(
    SIZE_VS_PADDING[inputSize] || SIZE_VS_PADDING[SIZE_ENUM.XS]
  );

  return (
    <div
      className={twMerge(
        'flex',
        'item-center',
        'outline-none',
        containerStyle ?? '',
        className ?? ''
      )}
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {leftIcon && (
        <div
          className={twMerge(
            'mx-2 my-1',
            'text-sm',
            'self-center',
            classNames?.leftIconClass || ''
          )}
        >
          {leftIcon}
        </div>
      )}
      <input
        {...restProps}
        {...(componentProps['input'] || {})}
        type={type}
        id={id}
        name={name}
        className={twMerge(
          'w-full outline-none bg-transparent h-[22px] self-center',
          SIZE_VS_TEXT[inputSize] || SIZE_VS_TEXT[SIZE_ENUM.XS],
          classNames?.inputClass || ''
        )}
        placeholder={placeholder}
        tabIndex={-1}
        onChange={onChange}
        value={value}
        ref={mergeRefs(innerRef, ref)}
      />
      {rightIcon && (
        <div
          className={twMerge(
            'mx-2 my-1',
            'text-sm',
            'self-center',
            classNames?.rightIconClass || ''
          )}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
});

BaseInput.displayName = 'BaseInput';
export default BaseInput;
