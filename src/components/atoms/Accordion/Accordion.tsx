'use client';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

type AccordionProps = {
  children: React.ReactNode;
  header: string;
  isAccordionOpenFromProps?: boolean;
  onToogleAccordionState?: (nextState: boolean) => void;
  classes?: {
    accordionContainer?: string;
    header?: string;
    accordionHeaderContainer?: string;
    accordionContentContainer?: string;
  };
};

export default function Accordion(props: AccordionProps) {
  const {
    isAccordionOpenFromProps = false,
    onToogleAccordionState,
    classes = {},
    children,
    header,
  } = props;
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    isAccordionOpenFromProps
  );

  const isControlled = isAccordionOpenFromProps && onToogleAccordionState;

  const toogleAccordion = () => {
    if (!isControlled) {
      setIsAccordionOpen((prev: boolean) => !prev);
    } else {
      onToogleAccordionState(!isAccordionOpen);
    }
  };

  useEffect(() => {
    if (isControlled) {
      setIsAccordionOpen(isAccordionOpenFromProps);
    }
  }, [isAccordionOpenFromProps, isControlled]);

  return (
    <div className={twMerge('flex flex-col', classes.accordionContainer || '')}>
      <div
        className={twMerge(
          'flex items-center justify-between',
          classes.accordionHeaderContainer || ''
        )}
        onClick={toogleAccordion}
      >
        <h5 className={twMerge('font-semibold text-md', classes.header || '')}>
          {header}
        </h5>
        <div
        //   className={
        //     // isAccordionOpen ? 'transition rotate-180 ease-in-out delay-150' : ''
        //   }
        >
          <FaChevronDown fontSize={'0.8rem'} />
        </div>
      </div>
      <div
        className={twMerge(
          isAccordionOpen ? 'opacity-100 block' : 'opacity-0 hidden',
          'p-2 ', //transition-display ease-in-out delay-150 duration-300
          classes.accordionContentContainer || ''
        )}
      >
        {children}
      </div>
    </div>
  );
}
