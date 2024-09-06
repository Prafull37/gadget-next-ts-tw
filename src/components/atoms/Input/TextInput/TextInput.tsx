import BaseInput from '../Base/BaseInput';
import { TextInputProps } from '../index.types';

export default function TextInput(props: TextInputProps) {
  return (
    <div className="">
      <BaseInput {...props} />
    </div>
  );
}
