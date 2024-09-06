export const identity = <T>(props: T): T => props;
export const alwaysTrue = <T>(props?: T): true => true;
export const isFunction = (props: any): boolean =>
  typeof props === 'function' && !/^class\s/.test(props.toString());
