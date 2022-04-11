import { UrlObject } from 'url';

type Url = string | UrlObject;

export type LinkProps = {
  label: string;
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
};
