import { useEffect, useRef } from 'react';

// used from https://joelmturner.com/blog/react-hooks-useslider/
export default function useInterval(
  callback: (params?: any) => any | void,
  delay: number
) {
  const savedCallbackRef = useRef<(params?: any) => any | void>(null);

  useEffect(() => {
    //@ts-expect-error check why
    savedCallbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      //@ts-expect-error check why
      savedCallbackRef.current();
    }
    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}
