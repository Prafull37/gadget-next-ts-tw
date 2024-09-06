import { TextInputProps } from '../index.types';
import WithLabel from '../../WithLabelHoc/WithLabelHoc';
import TextInput from './TextInput';

const TextInputWithLabel = WithLabel<TextInputProps>(TextInput);

export default TextInputWithLabel;
