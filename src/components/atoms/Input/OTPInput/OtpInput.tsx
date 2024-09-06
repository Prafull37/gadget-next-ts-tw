'use client';
import { ChangeEvent, Fragment, useRef, useState } from 'react';
import BaseInput from '../Base/BaseInput';
import { twMerge } from 'tailwind-merge';
import { OTPInputprops } from '../index.types';

function InputForOTP(props: {
  otpRef: (e: HTMLInputElement) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
}) {
  const { otpRef, onKeyDown, ...restProps } = props;
  return (
    <BaseInput
      {...restProps}
      className="border-t-0 border-l-0 border-r-0 border-b-2 rounded-none text-center px-[40%] py-2"
      type="number"
      maxLength={1}
      ref={otpRef}
      inputMode="numeric"
      componentProps={{ input: { onKeyDown, size: 1 } }}
    />
  );
}

export default function OTPInput(props: OTPInputprops) {
  const {
    otpLength = 4,
    seperator = '-',
    value = '',
    onChange: onChangeFromProps,
  } = props;

  const valueToUse = value.split('');
  const ref = useRef<HTMLInputElement[]>([]);
  const isFocusedOnChange = useRef(false);

  const focusInput = (itemToFocus: number) => {
    if (ref.current[itemToFocus]) {
      ref.current[itemToFocus]?.focus();
      ref.current[itemToFocus]?.select();
    }
  };

  const handleChange = (index: number, valueToChange: string) => {
    const newOtp = [...valueToUse];
    newOtp[index] = valueToChange;
    onChangeFromProps && onChangeFromProps(newOtp.join(''));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const otpText = e.target.value;

    handleChange(index, otpText[otpText.length - 1]);
    focusInput(index + 1);
    isFocusedOnChange.current = true;
  };

  const onFocus = (index: number) => {
    if (!isFocusedOnChange.current) {
      const otpLength =
        valueToUse.length === 0 ? 0 : Math.min(index, valueToUse.length + 1);
      focusInput(otpLength);
    }
    isFocusedOnChange.current = true;
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if ([e.code, e.key].includes('Backspace')) {
      e.preventDefault();
      handleChange(index, '');
      focusInput(index - 1);
    } else if (e.code === 'Delete') {
      e.preventDefault();
      handleChange(index, '');
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      focusInput(index - 1);
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      focusInput(index + 1);
    }
    // React does not trigger onChange when the same value is entered
    // again. So we need to focus the next input manually in this case.
    else if (e.key === valueToUse[index]) {
      e.preventDefault();
      focusInput(index + 1);
    } else if (
      e.code === 'Spacebar' ||
      e.code === 'Space' ||
      e.code === 'ArrowUp' ||
      e.code === 'ArrowDown'
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center">
      {Array.from(Array(otpLength)).map((_, index) => (
        <Fragment key={index}>
          <div className={twMerge('m-2')}>
            <InputForOTP
              value={valueToUse[index] || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e, index)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                onKeyPress(e, index)
              }
              onFocus={() => onFocus(index)}
              otpRef={(e: HTMLInputElement) => {
                if (ref.current.length !== otpLength) {
                  ref.current.push(e);
                }
              }}
            />
          </div>
          {index < otpLength - 1 && (
            <div className="self-center">{seperator}</div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
