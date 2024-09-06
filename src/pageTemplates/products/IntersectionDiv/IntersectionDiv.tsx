import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useRef } from 'react';

//@ts-expect-error
export default function IntersectionDiv(props) {
  const { onVisible, parentElement, ...rest } = props;
  const { ref } = useIntersectionObserver({
    root: document.body,
    onChange: onVisible,
  });

  console.log('je;');
  return <a {...rest} ref={ref} />;
}
