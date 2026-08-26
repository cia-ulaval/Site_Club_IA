import { useEffect, useRef } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Modal plumbing, for a component that is mounted only while its dialog is
 * open: locks the page behind it, moves focus in, keeps Tab inside, closes
 * on Escape, and hands focus back to whatever opened it.
 *
 * The lightbox and the member card each grew their own copy of this, and
 * the two had already drifted — one trapped `input`/`textarea`, the other
 * didn't, so a dialog with a field could tab out of itself.
 *
 * Returns refs to spread onto the dialog container and the element that
 * should hold focus first (normally the close button).
 */
export function useDialog<
  Container extends HTMLElement = HTMLDivElement,
  Initial extends HTMLElement = HTMLButtonElement,
>(onClose: () => void) {
  const containerRef = useRef<Container>(null);
  const initialFocusRef = useRef<Initial>(null);

  /* Held in a ref so the effect below can run exactly once. Callers pass an
     inline `() => setOpen(null)`, which is a new function on every parent
     render — as a dependency it would tear the trap down and rebuild it
     mid-dialog, snapping focus back to the close button and losing the
     record of what to restore focus to on the way out. */
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    initialFocusRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeRef.current();
        return;
      }
      if (event.key !== 'Tab' || !containerRef.current) return;

      const focusable = Array.from(containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return { containerRef, initialFocusRef };
}
