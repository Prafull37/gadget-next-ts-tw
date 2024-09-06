import BaseInput from '../Base/BaseInput';
import { TextInputProps } from '../index.types';
import { FaSearch } from 'react-icons/fa';

export default function SearchInput(props: TextInputProps) {
  return (
    <div className="">
      <BaseInput {...props} rightIcon={<FaSearch />} />
    </div>
  );
}
