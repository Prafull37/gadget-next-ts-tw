import { isFunction } from './lodash.utils';

export const mergeRefs = (...refs: any[]) => {
  return (node: any) => {
    refs.forEach((ref) => {
      if (ref) {
        if (isFunction(ref)) {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    });
  };
};
