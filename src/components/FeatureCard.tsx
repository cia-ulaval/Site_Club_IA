import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      className="p-4 md:p-6 rounded-xl theme-surface-secondary border theme-border-accent-important theme-hover-border-accent transition-colors"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      {icon && <div className="theme-text-accent mb-3">{icon}</div>}
      <h5 className="text-base md:text-lg font-semibold mb-2 text-accent-300">{title}</h5>
      <p className="text-sm md:text-base theme-text-muted">{description}</p>
    </motion.div>
  );
}
