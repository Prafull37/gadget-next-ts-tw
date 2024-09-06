import { WithLabelHOCProps } from '../WithLabelHoc';

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {}

export type RadioxWithLabelProps = WithLabelHOCProps &
  Omit<RadioProps, keyof WithLabelHOCProps> & {};
