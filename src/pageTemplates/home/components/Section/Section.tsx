import Link from 'next/link';
import { CSSProperties } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
  heading: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  icon: React.ReactNode;
};
export default function Section(props: SectionProps) {
  const { heading, children, icon, className, style } = props;
  return (
    <div className={twMerge('my-4 flex flex-col', className)} style={style}>
      <div className="mt-1 mb-2 flex justify-between items-center">
        <span>{heading}</span>
        {icon && icon}
      </div>
      <div>{children}</div>
    </div>
  );
}
