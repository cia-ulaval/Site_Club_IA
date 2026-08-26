import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import { useMotion } from '../../hooks/useMotion';

type MotionButtonProps = React.ComponentPropsWithoutRef<typeof motion.button>;

interface ShiftCardProps extends Omit<MotionButtonProps, 'children'> {
  media: React.ReactNode;
  label: React.ReactNode;
  detail?: React.ReactNode;
  badge?: React.ReactNode;
}

const ShiftCard = React.forwardRef<HTMLButtonElement, ShiftCardProps>(
  (
    {
      media,
      label,
      detail,
      badge,
      className,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const m = useMotion();
    const [active, setActive] = React.useState(false);

    return (
      <motion.button
        ref={ref}
        className={cn(
          'group relative block w-full overflow-hidden text-left cia-card cia-focus-ring',
          className
        )}
        onMouseEnter={(event) => {
          setActive(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setActive(false);
          onMouseLeave?.(event);
        }}
        onFocus={(event) => {
          setActive(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setActive(false);
          onBlur?.(event);
        }}
        {...props}
        type="button"
      >
        {media}
        {badge && <span className="absolute left-3 top-3 z-10">{badge}</span>}
        <div className="absolute inset-x-0 bottom-0 border-t-2 border-coral bg-paper-raised/95 px-4 py-3 backdrop-blur-sm">
          {label}
          {detail && (
            <motion.div {...m.expand(active)} className="overflow-hidden" aria-hidden={!active}>
              {detail}
            </motion.div>
          )}
        </div>
      </motion.button>
    );
  }
);
ShiftCard.displayName = 'ShiftCard';

export { ShiftCard };
