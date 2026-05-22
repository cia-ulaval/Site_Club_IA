import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BackToProjectsProps {
  className?: string;
}

export default function BackToProjects({ className = '' }: BackToProjectsProps) {
  const { t } = useTranslation();
  return (
    <Link to="/projects" className={`cia-btn-ghost cia-btn-sm inline-flex mb-8 ${className}`}>
      <ArrowLeft className="w-4 h-4" />
      {t('common.backToProjects')}
    </Link>
  );
}
