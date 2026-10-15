import { NIX_WEBRING } from '@/config/site';

type Webring = {
  label: string;
  href: string;
  highlight?: boolean;
};

const { name, url } = NIX_WEBRING;

export const webringLinks: Webring[] = [
  { label: '← prev', href: `${url}/prev/${name}` },
  { label: 'nix webring :3', href: url, highlight: true },
  { label: 'next →', href: `${url}/next/${name}` },
];
