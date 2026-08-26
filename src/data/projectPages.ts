export type Media =
  | { type: 'image'; src: string; altKey?: string }
  | { type: 'video'; src: string; poster?: string; ariaKey?: string };

export type Para = string | { runs: { key: string; live?: boolean }[] };

export interface Column {
  titleKey: string;
  items?: string[];
  itemKeys?: string[];
  itemsKey?: string;
}

type BlockKind =
  | {
      kind: 'split';
      titleKey?: string;
      subtitleKey?: string;
      bodyKeys: Para[];
      media?: Media;
      flip?: boolean;
      id?: string;
    }
  | { kind: 'prose'; titleKey?: string; bodyKeys: Para[]; id?: string }
  | {
      kind: 'panel';
      titleKey?: string;
      subtitleKey?: string;
      bodyKeys: Para[];
      media?: Media;
      id?: string;
    }
  | {
      kind: 'columns';
      titleKey?: string;
      bodyKeys?: Para[];
      columns: Column[];
      cols?: 2 | 3;
      id?: string;
    }
  | {
      kind: 'plate';
      media: Media;
      captionKey?: string;
      bleed?: boolean;
      figure?: boolean;
      id?: string;
    }
  | {
      kind: 'tags';
      titleKey?: string;
      bodyKeys?: Para[];
      items?: string[];
      itemKeys?: string[];
      itemsKey?: string;
      id?: string;
    }
  | { kind: 'list'; titleKey?: string; bodyKeys?: Para[]; itemsKey: string; id?: string }
  | {
      kind: 'steps';
      titleKey?: string;
      subtitleKey?: string;
      itemsKey: string;
      metaPrefixKey?: string;
      id?: string;
    }
  | {
      kind: 'cards';
      titleKey?: string;
      itemsKey?: string;
      items?: { titleKey: string; descriptionKey?: string }[];
      id?: string;
    }
  | {
      kind: 'roles';
      titleKey?: string;
      subtitleKey?: string;
      roles: {
        titleKey: string;
        metaKey?: string;
        descriptionKey?: string;
        skillsKey?: string;
      }[];
      id?: string;
    }
  | {
      kind: 'stat';
      titleKey?: string;
      bodyKeys?: Para[];
      valueKey: string;
      labelKey: string;
      noteKey?: string;
      id?: string;
    }
  | {
      kind: 'links';
      titleKey?: string;
      links: { labelKey: string; href: string }[];
      id?: string;
    }
  | {
      kind: 'team';
      titleKey?: string;
      members: { title: string; descriptionKey?: string }[];
      id?: string;
    };

interface BlockCommon {
  id?: string;
  tone?: 'invert';
  pace?: 'tight' | 'normal' | 'open';
  unlisted?: boolean;
}

export type Block = BlockCommon & BlockKind;

export type Edition = 'dossier' | 'plate' | 'readout' | 'field';

export interface ProjectPageSpec {
  key: string;
  edition: Edition;
  titleKey?: string;
  hero: {
    media?: Media;
    bodyKeys: Para[];
  };
  blocks: Block[];
  cta?: { bodyKeys: string[]; emphasisKey?: string };
  seo: {
    titleKey?: string;
    title?: string;
    descriptionKey?: string;
    description?: string;
    image?: string;
    path: string;
    jsonLd?: string;
  };
}
