import { useReducedMotion } from 'framer-motion';

/* ============================================================
   Motion system.

   Direction: a readout, not a brochure. Values snap into place and
   settle; nothing drifts upward for 700ms.

   The vocabulary is deliberately short. Motion here earns its place by
   doing one of five jobs — establishing hierarchy, carrying continuity
   across a state change, confirming an input, orienting the reader, or
   spending the brand's one signature moment. Arriving in the viewport
   is not one of those jobs, so there is no "fade up when scrolled to"
   in this file. An earlier version had one, applied to every section
   and every list row on every project page; what it produced was a page
   that flickered continuously while you read it.

   Hierarchy:
     HIGH    write, reveal        one hero line, cover matter, figures
     MEDIUM  overlay/panel,
             expand, shared       modals, disclosure, gallery continuity
     LOW     (CSS only)           hover and press feedback: colour, card
                                  lift, image scale, arrow nudge — on the
                                  same tokens, via Tailwind utilities
     NONE    body copy, lists, grids, section wrappers — most of the page

   Everything below is derived from the token block. If a component
   needs a value that isn't there, the answer is to use the nearest
   token, not to add a fourth duration.
   ============================================================ */

/* --- Tokens ------------------------------------------------- */

/* Two curves. `out` is for things that arrive and stay — it lands hard
   and settles, which is what makes the motion read as mechanical rather
   than floaty. `inOut` is for anything that must also run backwards
   (open/close, expand/collapse) where an asymmetric curve looks wrong
   in reverse. */
export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.4, 0, 0.2, 1],
} as const;

/* Three durations. `quick` is below the threshold where a change reads
   as a transition rather than a redraw — correct for feedback. `base`
   covers everything that reveals. `signature` is longer than either and
   is spent once per page, on the hero. */
export const DUR = {
  quick: 0.18,
  base: 0.42,
  signature: 0.62,
} as const;

/* One spring, for the case where a fixed duration is wrong: a shared
   layout move covers a distance the code cannot know in advance, so it
   has to be described by how it settles rather than how long it takes.
   Everything else on this site is a known distance over a known time. */
export const SPRING = {
  shared: { type: 'spring', stiffness: 280, damping: 34, mass: 0.8 },
} as const;

/* Two distances. `near` is feedback-scale — perceptible, not a journey.
   `far` is entrance-scale. Anything larger becomes parallax. */
export const DIST = {
  near: 8,
  far: 20,
} as const;

/* --- Reduced-motion neutrals -------------------------------- */

/* Motion animates inline styles through rAF, so the CSS
   `prefers-reduced-motion` block in theme.css does not reach it. Every
   variant below has to opt out on its own, which is what these are for.
   `initial: false` tells Motion to mount at the animated state rather
   than transitioning to it. */
const STILL = { initial: false, animate: {}, transition: { duration: 0 } };
const STILL_VIEW = {
  initial: false,
  whileInView: {},
  viewport: { once: true },
  transition: { duration: 0 },
};

/* Reveals fire a little before their top edge lands, so the move is
   finishing as the element arrives rather than starting then. */
const VIEWPORT = { once: true, margin: '-12% 0px -12% 0px' } as const;

/* The same question `useMotion` answers, for imperative callers that ask
   outside of render — a click handler cannot call a hook, and browsers honour
   `behavior: 'smooth'` regardless of the reduced-motion setting. */
export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
}

export function useMotion() {
  const reduce = useReducedMotion() ?? false;

  return {
    reduce,

    /* Raw tokens, for the handful of components that compose their own
       transition (disclosure height, modal exit) and must not invent
       new values to do it. */
    ease: EASE,
    dur: DUR,
    spring: SPRING,
    dist: DIST,

    /* HIGH — the signature. A masked left-to-right wipe, as if the line
       were being written to a display. One per page, on the main
       statement, and nowhere else. This is the only place `signature`
       duration is spent. */
    write: reduce
      ? STILL
      : {
          initial: { clipPath: 'inset(0 100% 0 0)' },
          animate: { clipPath: 'inset(0 0% 0 0)' },
          transition: { duration: DUR.signature, ease: EASE.out },
        },

    /* HIGH — cover matter under the title. Rises on a delay so the cover
       resolves in one reading order instead of all at once. Delays are
       the caller's, but they belong to the cover only: this is a
       composition device for a single header, not a list stagger. */
    rise: (delay = 0) =>
      reduce
        ? STILL
        : {
            initial: { opacity: 0, y: DIST.far },
            animate: { opacity: 1, y: 0 },
            transition: { duration: DUR.base, delay, ease: EASE.out },
          },

    /* HIGH/MEDIUM — media uncovers rather than fades: the plate is
       wiped clear, which reads as a print being developed instead of a
       div changing opacity. Clipping, not translation, is what keeps
       this from becoming another fade-up. */
    reveal: reduce
      ? STILL_VIEW
      : {
          initial: { clipPath: 'inset(0 0 100% 0)' },
          whileInView: { clipPath: 'inset(0 0 0% 0)' },
          viewport: VIEWPORT,
          transition: { duration: DUR.base, ease: EASE.out },
        },

    /* MEDIUM — the scrim behind a modal. */
    overlay: reduce
      ? { initial: false, animate: {}, exit: {}, transition: { duration: 0 } }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: DUR.quick, ease: EASE.inOut },
        },

    /* MEDIUM — the modal itself. Moves `near`, not `far`: a dialog is
       already at its destination, it just needs to confirm it arrived.
       No scale — scaling a panel that contains type resamples the text
       for the length of the transition. */
    panel: reduce
      ? { initial: false, animate: {}, exit: {}, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: DIST.near },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: DIST.near },
          transition: { duration: DUR.quick, ease: EASE.inOut },
        },

    /* MEDIUM — disclosure. Height is the honest property here; the
       curve has to be symmetric because it plays in both directions. */
    expand: (open: boolean) => ({
      initial: false as const,
      animate: { height: open ? 'auto' : 0, opacity: open ? 1 : 0 },
      transition: reduce ? { duration: 0 } : { duration: DUR.quick, ease: EASE.inOut },
    }),

    /* MEDIUM — shared layout. Used where the same object exists in two
       places and the reader would otherwise lose it: a gallery thumb
       becoming the lightbox plate. Continuity, which is the one thing a
       cross-fade cannot do.

       Callers must also withhold the `layoutId` itself under reduced
       motion — a zero-duration layout transition still runs projection. */
    shared: SPRING.shared,
  };
}
