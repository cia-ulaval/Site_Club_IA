import { X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cia.analyticsConsent.v1';

export type AnalyticsConsent = 'granted' | 'denied' | null;

function readStoredConsent(): AnalyticsConsent {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
}

function storeConsent(consent: Exclude<AnalyticsConsent, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, consent);
    return true;
  } catch {
    return false;
  }
}

export function useAnalyticsConsent() {
  const [choice, setChoice] = useState<AnalyticsConsent>(readStoredConsent);
  const [isOpen, setIsOpen] = useState(choice === null);

  const choose = (nextChoice: Exclude<AnalyticsConsent, null>) => {
    const wasPersisted = storeConsent(nextChoice);

    /* The Vercel analytics packages inject their scripts with no unmount
       cleanup, so revoking consent needs a reload to actually drop them. */
    if (choice === 'granted' && nextChoice === 'denied' && wasPersisted) {
      window.location.reload();
      return;
    }

    setChoice(nextChoice);
    setIsOpen(false);
  };

  return {
    choice,
    isOpen,
    accept: () => choose('granted'),
    decline: () => choose('denied'),
    openSettings: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
}

interface PrivacyConsentProps {
  choice: AnalyticsConsent;
  isOpen: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onClose: () => void;
}

export default function PrivacyConsent({
  choice,
  isOpen,
  onAccept,
  onDecline,
  onClose,
}: PrivacyConsentProps) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-70 sm:bottom-5 sm:left-auto sm:right-5 sm:w-full sm:max-w-sm">
      <section
        className="cia-modal relative rounded-cut-sm p-4 shadow-2xl sm:p-5"
        role="dialog"
        aria-labelledby="privacy-consent-title"
        aria-describedby="privacy-consent-description"
      >
        {choice !== null && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex min-h-11 min-w-11 items-center justify-center text-steel transition-colors hover:text-coral-dark cia-focus-ring"
            aria-label={t('privacyConsent.close')}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}

        <div className={choice !== null ? 'pr-8' : undefined}>
          <div>
            <p className="cia-meta-accent mb-2">{t('privacyConsent.eyebrow')}</p>
            <h2 id="privacy-consent-title" className="font-heading text-xl font-bold text-ink">
              {t('privacyConsent.title')}
            </h2>
            <p
              id="privacy-consent-description"
              className="mt-2 text-xs leading-relaxed text-ink-muted"
            >
              {t('privacyConsent.description')}
            </p>
            <Link
              to="/privacy"
              onClick={onClose}
              className="mt-2 inline-flex text-xs font-semibold text-accent-300 underline decoration-accent-500/50 underline-offset-4 hover:decoration-accent-500 cia-focus-ring"
            >
              {t('privacyConsent.learnMore')}
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onAccept}
            className="cia-btn-accent cia-btn-sm px-3 text-xs"
          >
            {t('privacyConsent.accept')}
          </button>
          <button
            type="button"
            onClick={onDecline}
            className="cia-btn-ghost cia-btn-sm px-3 text-xs"
          >
            {t('privacyConsent.decline')}
          </button>
        </div>
      </section>
    </div>
  );
}
