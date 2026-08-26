import { useReducedMotion } from 'framer-motion';

export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.4, 0, 0.2, 1],
} as const;

export const DUR = {
  quick: 0.18,
  base: 0.42,
  signature: 0.62,
} as const;

export const SPRING = {
  shared: { type: 'spring', stiffness: 280, damping: 34, mass: 0.8 },
} as const;

export const DIST = {
  near: 8,
  far: 20,
} as const;

const STILL = { initial: false, animate: {}, transition: { duration: 0 } };
const STILL_VIEW = {
  initial: false,
  whileInView: {},
  viewport: { once: true },
  transition: { duration: 0 },
};

const VIEWPORT = { once: true, margin: '-12% 0px -12% 0px' } as const;

export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function useMotion() {
  const reduce = useReducedMotion() ?? false;

  return {
    reduce,

    ease: EASE,
    dur: DUR,
    spring: SPRING,
    dist: DIST,

    write: reduce
      ? STILL
      : {
          initial: { clipPath: 'inset(0 100% 0 0)' },
          animate: { clipPath: 'inset(0 0% 0 0)' },
          transition: { duration: DUR.signature, ease: EASE.out },
        },

    rise: (delay = 0) =>
      reduce
        ? STILL
        : {
            initial: { opacity: 0, y: DIST.far },
            animate: { opacity: 1, y: 0 },
            transition: { duration: DUR.base, delay, ease: EASE.out },
          },

    reveal: reduce
      ? STILL_VIEW
      : {
          initial: { clipPath: 'inset(0 0 100% 0)' },
          whileInView: { clipPath: 'inset(0 0 0% 0)' },
          viewport: VIEWPORT,
          transition: { duration: DUR.base, ease: EASE.out },
        },

    overlay: reduce
      ? { initial: false, animate: {}, exit: {}, transition: { duration: 0 } }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: DUR.quick, ease: EASE.inOut },
        },

    panel: reduce
      ? { initial: false, animate: {}, exit: {}, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: DIST.near },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: DIST.near },
          transition: { duration: DUR.quick, ease: EASE.inOut },
        },

    expand: (open: boolean) => ({
      initial: false as const,
      animate: { height: open ? 'auto' : 0, opacity: open ? 1 : 0 },
      transition: reduce ? { duration: 0 } : { duration: DUR.quick, ease: EASE.inOut },
    }),

    shared: SPRING.shared,
  };
}
