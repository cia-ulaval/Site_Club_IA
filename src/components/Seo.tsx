import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { DEFAULT_OG_IMAGE, OG_SITE_NAME, ORG_NAME, SITE } from '../lib/site';

interface SeoProps {
  /** Full `<title>`, including any suffix. */
  title: string;
  description: string;
  keywords?: string;
  /** Site-relative route, e.g. `/projects`. Drives canonical and `og:url`. */
  path: string;
  /** Site-relative image path; falls back to the club logo. */
  image?: string;
  /** Social headline where the page title is too long for a card. */
  socialTitle?: string;
  /** Social blurb where the meta description is too long for a card. */
  socialDescription?: string;
  /** Structured data. Objects are serialized; strings are emitted verbatim. */
  jsonLd?: string | object;
}

/* Every page shipped the same twenty-odd Helmet lines with three values
   swapped, so the boilerplate drifted: some pages set `og:type`, some
   didn't, and the Twitter card copy diverged from the Open Graph copy for
   no reason anyone recorded. One component, one shape.

   Open Graph and Twitter deliberately carry identical copy — the earlier
   split maintained two nearly-identical strings per page and no consumer
   ever distinguished them. */
export default function Seo({
  title,
  description,
  keywords,
  path,
  image = DEFAULT_OG_IMAGE,
  socialTitle,
  socialDescription,
  jsonLd,
}: SeoProps) {
  const { i18n } = useTranslation();
  const url = `${SITE}${path}`;
  const imageUrl = `${SITE}${image}`;
  const cardTitle = socialTitle ?? title;
  const cardDescription = socialDescription ?? description;

  return (
    <Helmet>
      <html lang={i18n.resolvedLanguage?.startsWith('en') ? 'en-CA' : 'fr-CA'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={ORG_NAME} />

      <meta property="og:title" content={cardTitle} />
      <meta property="og:description" content={cardDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={OG_SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={cardTitle} />
      <meta name="twitter:description" content={cardDescription} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="canonical" href={url} />

      {jsonLd && (
        <script type="application/ld+json">
          {typeof jsonLd === 'string' ? jsonLd : JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
