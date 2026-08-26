import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

const MinimalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    interactive?: boolean;
    marker?: boolean;
  }
>(({ className, interactive = false, marker = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'cia-card',
      interactive && 'cia-card-hover',
      marker && 'cia-card-marker',
      className
    )}
    {...props}
  />
));
MinimalCard.displayName = 'MinimalCard';

const MinimalCardMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('cia-card-media', className)} {...props} />
  )
);
MinimalCardMedia.displayName = 'MinimalCardMedia';

interface MinimalCardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  frameClassName?: string;
  layoutId?: string;
}

const MinimalCardImage = React.forwardRef<HTMLImageElement, MinimalCardImageProps>(
  ({ className, frameClassName, alt, loading = 'lazy', layoutId, ...props }, ref) => {
    const image = (
      <img
        ref={ref}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-transform duration-base ease-out',
          className
        )}
        {...props}
      />
    );

    if (!layoutId) {
      return (
        <MinimalCardMedia className={cn('aspect-4/3', frameClassName)}>{image}</MinimalCardMedia>
      );
    }

    return (
      <motion.div layoutId={layoutId} className={cn('cia-card-media aspect-4/3', frameClassName)}>
        {image}
      </motion.div>
    );
  }
);
MinimalCardImage.displayName = 'MinimalCardImage';

const MinimalCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5 md:p-6', className)} {...props} />
  )
);
MinimalCardContent.displayName = 'MinimalCardContent';

const MinimalCardEyebrow = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('cia-meta-accent mb-3', className)} {...props} />
));
MinimalCardEyebrow.displayName = 'MinimalCardEyebrow';

const MinimalCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-heading text-xl font-semibold leading-tight text-ink', className)}
    {...props}
  />
));
MinimalCardTitle.displayName = 'MinimalCardTitle';

const MinimalCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('mt-2 font-body text-sm leading-relaxed text-ink-muted', className)}
    {...props}
  />
));
MinimalCardDescription.displayName = 'MinimalCardDescription';

export {
  MinimalCard,
  MinimalCardContent,
  MinimalCardDescription,
  MinimalCardEyebrow,
  MinimalCardImage,
  MinimalCardTitle,
};
