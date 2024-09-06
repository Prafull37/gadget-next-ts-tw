import WithLabel from '../WithLabelHoc/WithLabelHoc';
import TextAreaProps from './index.types';
import TextArea from './TextArea';

const TextInputWithLabel = WithLabel<TextAreaProps>(TextArea);

export default TextInputWithLabel;
