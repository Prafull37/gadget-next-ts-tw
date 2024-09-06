import WithLabelHoc from '../WithLabelHoc';
import Checkbox from './Checkbox';

const CheckboxWithLabel = WithLabelHoc(Checkbox, {
  labelPosition: 'right',
  defaultClassName: 'gap-10',
});

export default CheckboxWithLabel;
