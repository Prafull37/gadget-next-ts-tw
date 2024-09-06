'use client';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type PillProps = {
  rounded?: boolean;
  isActive?: boolean;
  isActiveStateControlDisabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Pills(props: PillProps) {
  const {
    rounded = true,
    isActive: isActiveFromProps = false,
    isActiveStateControlDisabled = false,
    onClick: onClickFromProps,
    children,
  } = props;
  const [isActive, setIsActive] = useState(isActiveFromProps);

  useEffect(() => {
    setIsActive(isActiveFromProps);
  }, [isActiveFromProps]);

  const onClick = () => {
    if (isActiveStateControlDisabled) {
      setIsActive(true);
    }
    onClickFromProps && onClickFromProps();
  };

  return (
    <button
      className={twMerge(
        'py-2 px-4  border border-solid border-[#101827] color-white text-sm',
        rounded ? 'rounded-3xl' : 'rounded-md',
        isActive ? 'bg-violet-100' : ''
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
