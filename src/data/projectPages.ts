/* Structure for project detail pages.
   Only layout lives here — every string is an i18n key, so page copy stays
   in translation.json and nothing has to be migrated or re-translated. */

export type Media =
  | { type: 'image'; src: string; altKey?: string }
  | { type: 'video'; src: string; poster?: string; ariaKey?: string };

/** A paragraph. A bare key is one string. `runs` assembles a single
    sentence from several keys — some copy was written as fragments around
    an embedded figure — with `live` runs set in coral so a value sitting
    inside prose still reads as a value. */
export type Para = string | { runs: { key: string; live?: boolean }[] };

/** One column of a `columns` block. Items come as literals (tool names and
    other proper nouns), as individual keys, or as one key resolving to a
    string[] in i18n. */
export interface Column {
  titleKey: string;
  items?: string[];
  itemKeys?: string[];
  itemsKey?: string;
}

type BlockKind =
  /** Prose beside a plate. `flip` puts the media first. */
  | {
      kind: 'split';
      titleKey?: string;
      subtitleKey?: string;
      bodyKeys: Para[];
      media?: Media;
      flip?: boolean;
      id?: string;
    }
  /** Running prose in a measured column. */
  | { kind: 'prose'; titleKey?: string; bodyKeys: Para[]; id?: string }
  /** A ruled panel — a callout keyed to the left margin. */
  | {
      kind: 'panel';
      titleKey?: string;
      subtitleKey?: string;
      bodyKeys: Para[];
      media?: Media;
      id?: string;
    }
  /** Parallel lists, e.g. shipped / next. */
  | {
      kind: 'columns';
      titleKey?: string;
      /** A footnote under the grid — a caveat that applies to the set. */
      bodyKeys?: Para[];
      columns: Column[];
      /** Columns at the widest breakpoint. Defaults to the column count. */
      cols?: 2 | 3;
      id?: string;
    }
  /** Full-width media plate. */
  | {
      kind: 'plate';
      media: Media;
      captionKey?: string;
      /** Leave the measure and run edge to edge. */ bleed?: boolean;
      /** A diagram or plot: contained whole, never cropped to fill. */ figure?: boolean;
      id?: string;
    }
  /** Flat set of short labels — stack, tools, credits, profiles sought.
      `items` are literal, `itemKeys` are one key each, `itemsKey` resolves
      to a string[]. */
  | {
      kind: 'tags';
      titleKey?: string;
      bodyKeys?: Para[];
      items?: string[];
      itemKeys?: string[];
      itemsKey?: string;
      id?: string;
    }
  /** Checklist or findings. `itemsKey` resolves to a string[] in i18n. */
  | { kind: 'list'; titleKey?: string; bodyKeys?: Para[]; itemsKey: string; id?: string }
  /** Ordered sequence. `itemsKey` resolves to
      {title|phase, description|desc, period|weeks}[]. Where an item carries
      its own period, that label replaces the running number — a real
      interval says more than a synthetic index. */
  | {
      kind: 'steps';
      titleKey?: string;
      subtitleKey?: string;
      itemsKey: string;
      /** Prefix for a bare interval, e.g. `canlock.timeline.week`. */
      metaPrefixKey?: string;
      id?: string;
    }
  /** Unordered set of titled blurbs. Items come either from one key
      resolving to an array (same item shape as `steps`) or as explicit
      key pairs, for copy written as named siblings rather than a list. */
  | {
      kind: 'cards';
      titleKey?: string;
      itemsKey?: string;
      items?: { titleKey: string; descriptionKey?: string }[];
      id?: string;
    }
  /** Positions a project is staffing: what the seat does and what it
      needs. A staffing table, not a grid of role cards. */
  | {
      kind: 'roles';
      titleKey?: string;
      subtitleKey?: string;
      roles: {
        titleKey: string;
        /** Headcount or seniority, set in mono beside the title. */
        metaKey?: string;
        descriptionKey?: string;
        /** Resolves to a string[] of required skills. */
        skillsKey?: string;
      }[];
      id?: string;
    }
  /** The page's one figure, set at display scale. Reserved for a number
      the project is actually arguing about. */
  | {
      kind: 'stat';
      titleKey?: string;
      bodyKeys?: Para[];
      valueKey: string;
      labelKey: string;
      noteKey?: string;
      id?: string;
    }
  /** Somewhere else to read. Rendered as ruled rows, not as buttons —
      these are references, and the page has only one primary action. */
  | {
      kind: 'links';
      titleKey?: string;
      links: { labelKey: string; href: string }[];
      id?: string;
    }
  /** People on the project. Names are literal; roles are i18n keys. */
  | {
      kind: 'team';
      titleKey?: string;
      members: { title: string; descriptionKey?: string }[];
      id?: string;
    };

/** Controls every block honours, whatever its kind. */
interface BlockCommon {
  id?: string;
  /** Put this section on the inverted steel spread. One per page — the
      value change is emphasis, and emphasis spent twice is wallpaper. */
  tone?: 'invert';
  /** Override the kind's default vertical pace where a specific page
      needs a section to breathe or to compress. */
  pace?: 'tight' | 'normal' | 'open';
  /** Section heading, shown in the chapter spine. Set on blocks whose
      titleKey should not appear in the rail. */
  unlisted?: boolean;
}

export type Block = BlockCommon & BlockKind;

/** How a page opens and how its body is paced. The edition is chosen
    from what the project actually has — a strong photograph, a film, a
    body of data, or nothing but its name — so pages differ because their
    material differs, not because a theme was rotated. */
export type Edition = 'dossier' | 'plate' | 'readout' | 'field';

export interface ProjectPageSpec {
  /** Matches a key in `projects` — supplies code, status, domain and repo. */
  key: string;
  /** Cover composition and body rhythm. */
  edition: Edition;
  /** Falls back to the project's defaultTitle when absent. */
  titleKey?: string;
  hero: {
    media?: Media;
    bodyKeys: Para[];
  };
  blocks: Block[];
  /** Closing Discord invitation; omit for a page that should not ask. */
  cta?: { bodyKeys: string[]; emphasisKey?: string };
  seo: {
    titleKey?: string;
    title?: string;
    descriptionKey?: string;
    description?: string;
    image?: string;
    path: string;
    /** Bespoke JSON-LD kept verbatim where a page already had rich markup. */
    jsonLd?: string;
  };
}
