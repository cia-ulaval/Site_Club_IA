import { useReducedMotion } from 'framer-motion';

const INSTANT = { duration: 0 };

export function useMotion() {
  const reduce = useReducedMotion() ?? false;

  return {
    reduce,
    fadeIn: reduce
      ? { initial: {}, animate: {}, transition: INSTANT }
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.7 } },
    slideUp: reduce
      ? { initial: {}, animate: {}, transition: INSTANT }
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
        },
    stagger: (i: number) => (reduce ? {} : { transition: { delay: 0.07 * i, duration: 0.5 } }),
  };
}
