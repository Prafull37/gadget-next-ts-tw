import { RadioProps } from './index.type';

export default function Radio(props: RadioProps) {
  const { checked, onChange, ...rest } = props;
  return (
    <span className="relative flex h-6 w-6 border-gray-500 border border-solid box-border rounded-full p-1 justify-center items-center flex-col cursor-pointer">
      <input
        type="checkbox"
        className="absolute w-full h-full top-0 left-0 z-[1] opacity-0 cursor-pointer"
        onChange={onChange}
        checked={checked}
        {...rest}
      />
      {checked && (
        <div className="w-full h-full bg-blue-950 rounded-full"></div>
      )}
    </span>
  );
}
