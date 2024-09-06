import { twMerge } from 'tailwind-merge';
import { WithLabelHOCProps } from './index.types';

export default function WithLabel<ComponentProps>(
  Component: React.ComponentType<ComponentProps>,
  defaultProps?: {
    labelPosition?: WithLabelHOCProps['labelPosition'];
    labelClass?: WithLabelHOCProps['labelClass'];
    defaultClassName?: string;
  }
) {
  return function InputWithLabel(
    props: WithLabelHOCProps & Omit<ComponentProps, keyof WithLabelHOCProps>
  ) {
    const {
      label,
      labelPosition = undefined,
      labelClass = '',
      id,
      hideLabel = false,
      ...restProps
    } = props;
    const componentProps = restProps as ComponentProps;

    const labelPositionToUse =
      labelPosition || defaultProps?.labelPosition || 'top';

    const labelClassToUse = labelClass || defaultProps?.labelClass || '';

    const flexDirection =
      labelPositionToUse === 'top' ? 'flex-col' : 'flex-row items-center';
    const labelOrder = labelPositionToUse === 'right' ? 'order-1' : 'order-0';
    return (
      <div
        className={twMerge(
          'flex justify-start w-full gap-2',
          flexDirection,
          labelClassToUse,
          defaultProps?.defaultClassName || ''
        )}
      >
        {label && !hideLabel && (
          <label htmlFor={id} className={twMerge(labelOrder)}>
            {label}
          </label>
        )}
        <Component {...componentProps} id={id} />
      </div>
    );
  };
}
