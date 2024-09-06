'use client';
import React, { MouseEventHandler, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type SidepanelProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
  hideCloseButton?: boolean;
};

const POSITION_VS_DRAWER = {
  left: {
    open: 'left-0',
    close: 'left-[-70%]',
  },
  right: {
    open: 'right-0',
    close: 'right-[-70%]',
  },
  top: {
    open: 'top-0',
    close: 'top-[-30%]',
  },
  bottom: {
    open: 'bottom-0',
    close: 'bottom-[-30%]',
  },
};

const SidePanel = (props: SidepanelProps) => {
  const {
    isOpen,
    onClose,
    children,
    position = 'right',
    className,
    hideCloseButton = false,
  } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  const drawerTopPosition = position === 'bottom' ? 'bottom-0' : 'top-0';
  const drawerLeftRightPosition = position === 'right' ? 'right-0' : 'left-0';
  const drawerHeightAndWidth = ['left', 'right'].includes(position)
    ? 'h-full w-[70%]'
    : 'h-[30%] w-full';

  const openClosePosition = POSITION_VS_DRAWER[position];

  return (
    <div
      className={twMerge(
        'overlay fixed top-0 left-0 w-full h-full z-10 bg-[#9d9d9d4d]',
        isOpen ? 'block' : 'hidden'
      )}
    >
      <div
        className={twMerge(
          `fixed right-0 bg-white z-20 p-2 overflow-x-hidden flex flex-col`,
          drawerTopPosition,
          drawerLeftRightPosition,
          drawerHeightAndWidth,
          isOpen ? openClosePosition.open : openClosePosition.close,
          className
        )}
      >
        {!hideCloseButton && (
          <button className="absolute top-2 right-4 text-lg" onClick={onClose}>
            &times;
          </button>
        )}
        <div className="sidepanel-content overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default SidePanel;
