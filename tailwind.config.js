/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['IBM Plex Sans Condensed', 'Arial Narrow', 'system-ui', 'sans-serif'],
        body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.14em',
        meta: '0.12em',
        index: '0.08em',
      },
      fontSize: {
        hero: 'clamp(4.5rem, 22vw, 17rem)',
        display: 'clamp(3.5rem, 11vw, 9rem)',
        'display-sm': 'clamp(2.5rem, 8vw, 6rem)',
        stat: 'clamp(3.5rem, 10vw, 6.5rem)',
      },
      borderRadius: {
        cut: '20px 4px 20px 4px',
        'cut-sm': '16px 4px 16px 4px',
        'cut-lg': '24px 4px 24px 4px',
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        '16/10': '16 / 10',
        '21/9': '21 / 9',
      },
      maxWidth: {
        read: '68ch',
      },
      maxHeight: {
        dialog: '92vh',
        'dialog-md': '85vh',
        lightbox: '80vh',
      },
      objectPosition: {
        portrait: 'center 20%',
      },
      scale: {
        103: '1.03',
      },
      saturate: {
        35: '.35',
        90: '.9',
      },
      zIndex: {
        70: '70',
      },
      transitionProperty: {
        media: 'filter, transform',
        chrome: 'background-color, border-color, box-shadow',
      },
      /* Motion tokens, shared with src/hooks/useMotion.ts. Three durations
         and two curves — the same ones the JS layer animates on, so a hover
         handled in CSS and a reveal handled in Motion agree. */
      transitionDuration: {
        /* Bare `transition-colors` and friends resolve to this, so a
           utility written without an explicit duration still lands on a
           system value instead of Tailwind's stock 150ms. */
        DEFAULT: '180ms',
        quick: '180ms',
        base: '420ms',
        signature: '620ms',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      /* Only the steps something references. `paper`/`ink`/`steel`/`coral`
         are the semantic names to reach for; the numbered `primary`/`accent`
         ramps remain for the pages that predate them. */
      colors: {
        rule: {
          DEFAULT: 'var(--rule)',
          strong: 'var(--rule-strong)',
          live: 'var(--rule-live)',
        },
        paper: {
          DEFAULT: 'rgb(var(--color-paper) / <alpha-value>)',
          raised: 'rgb(var(--color-paper-raised) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
        },
        steel: {
          DEFAULT: 'rgb(var(--color-steel) / <alpha-value>)',
          soft: 'rgb(var(--color-steel-soft) / <alpha-value>)',
        },
        coral: {
          DEFAULT: 'rgb(var(--color-coral) / <alpha-value>)',
          dark: 'rgb(var(--color-coral-dark) / <alpha-value>)',
        },
        primary: {
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        },
        accent: {
          300: 'rgb(var(--color-accent-300) / <alpha-value>)',
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
