type Args = any[];
type Base = (...args: Args) => void;

/**
 * Only call a function once every 'delay' seconds.
 *
 * @param callback - the callback to debounce
 * @param delay - how long to wait until to run the callback
 *
 */
export const debounce = (callback: Base, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
