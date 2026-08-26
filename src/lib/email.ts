export type ClubMailbox = 'general' | 'partnerships';

interface EmailDraft {
  subject?: string;
  body?: string;
}

/* Keep addresses out of the source markup, JSON-LD and compiled bundle as
   plain strings. They are decoded only when a visitor deliberately opens an
   email draft, which blocks basic source harvesters without adding a fragile
   CAPTCHA or mail relay. */
const MAILBOX_CODE_POINTS: Record<ClubMailbox, readonly number[]> = {
  general: [99, 105, 97, 64, 117, 108, 97, 118, 97, 108, 46, 99, 97],
  partnerships: [
    102, 105, 110, 97, 110, 99, 101, 46, 99, 105, 97, 64, 117, 108, 97, 118, 97, 108, 46, 99, 97,
  ],
};

function getEmailAddress(mailbox: ClubMailbox) {
  return String.fromCharCode(...MAILBOX_CODE_POINTS[mailbox]);
}

export function getEmailHref(mailbox: ClubMailbox, draft: EmailDraft = {}) {
  const query = Object.entries(draft)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return `mailto:${getEmailAddress(mailbox)}${query ? `?${query}` : ''}`;
}

export function openEmailDraft(mailbox: ClubMailbox, draft?: EmailDraft) {
  window.location.href = getEmailHref(mailbox, draft);
}
