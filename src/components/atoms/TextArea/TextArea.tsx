import TextAreaProps from './index.types';

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="border border-gray-600 rounded-md outline-none p-1 text-sm"
      rows={5}
    ></textarea>
  );
}
