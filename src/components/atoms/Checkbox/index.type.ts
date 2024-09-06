import { WithLabelHOCProps } from '../WithLabelHoc';

export enum SIZE_ENUM {
  XS = 'xs',
  SM = 'sm',
}

export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  checkboxSize?: typeof SIZE_ENUM;
}

export type CheckboxWithLabelProps = WithLabelHOCProps &
  Omit<CheckboxProps, keyof WithLabelHOCProps> & {};
