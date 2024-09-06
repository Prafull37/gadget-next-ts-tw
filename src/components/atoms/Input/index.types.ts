import { Country } from '@/constants/localization.constants';
import { WithLabelHOCProps } from '../WithLabelHoc';

export enum SIZE_ENUM {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
}

export type classNames = {
  leftIconClass?: string;
  rightIconClass?: string;
  inputClass?: string;
};

export type ComponentProps = {
  input?: Record<string, any>;
};

// later point of time extend using HTMLInputProps
export default interface BaseInputProps
  extends React.HTMLProps<HTMLInputElement> {
  classNames?: classNames;
  inputSize?: SIZE_ENUM;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  componentProps?: ComponentProps;
}

export const SIZE_VS_PADDING = {
  [SIZE_ENUM.XS]: 'py-1',
  [SIZE_ENUM.SM]: 'py-2',
  [SIZE_ENUM.MD]: 'py-4',
};

export const SIZE_VS_TEXT = {
  [SIZE_ENUM.XS]: 'text-xs',
  [SIZE_ENUM.SM]: 'text-sm',
  [SIZE_ENUM.MD]: 'text-sm',
};

export const SIZE_VS_HEIGHT = {
  [SIZE_ENUM.XS]: 'h-[24px]',
  [SIZE_ENUM.SM]: 'h-[24px]',
  [SIZE_ENUM.MD]: 'h-[32px]',
};

export interface TextInputProps
  extends Omit<BaseInputProps, 'type' | 'componentProps'> {}

export type MobileNumberInputProps = WithLabelHOCProps &
  Omit<
    Omit<
      BaseInputProps,
      'leftIcon' | 'rightIcon' | 'componentProps' | 'classNames' | 'inputSize'
    >,
    keyof WithLabelHOCProps
  > & {
    country?: keyof typeof Country;
    value: string;
    onChange: (e: { value: string; isValid: boolean }) => void;
  };

export type OTPInputprops = {
  otpLength?: number;
  seperator?: string;
  value: string;
  onChange: (value: string) => void;
};
