import WithLabelHoc from '../WithLabelHoc';
import Radio from './Radio';

const RadioWithLabel = WithLabelHoc(Radio, {
  labelPosition: 'left',
});

export default RadioWithLabel;
