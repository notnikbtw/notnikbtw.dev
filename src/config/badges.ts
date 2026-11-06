import { SITE_BADGE } from '@/config/site';

type WebBadge = {
  name: string;
  src: string;
  url?: string;
};

export const webBadges: WebBadge[] = [
  {
    name: 'NixOS',
    src: '/buttons/nixos.gif',
    url: 'https://nixos.org',
  },
  {
    name: 'Anime 1',
    src: '/buttons/kawaii.gif',
  },
  {
    name: 'Anime 2',
    src: '/buttons/anime.gif',
  },
  {
    name: 'Portfolio',
    src: SITE_BADGE.src,
    url: SITE_BADGE.url,
  },
  {
    name: 'I like computer',
    src: '/buttons/i-like-computer.png',
  },
  {
    name: 'uBlock Origin',
    src: '/buttons/ublock-origin.png',
    url: 'https://ublockorigin.com/',
  },
  {
    name: 'Linux',
    src: '/buttons/linux.gif',
    url: 'https://www.linux.org/',
  },
  {
    name: 'Your Ad Here',
    src: '/buttons/your-ad.gif',
  },
  {
    name: 'quantenzitrone.eu',
    src: 'https://quantenzitrone.eu/res/88x31.gif',
    url: 'https://quantenzitrone.eu',
  },
  {
    name: 'c7.pm',
    src: '/buttons/c7-badge.png',
    url: 'https://c7.pm/',
  },
  {
    name: 'yesterweb.org/no-to-web3',
    src: '/buttons/noweb32.gif',
    url: 'https://yesterweb.org/no-to-web3/',
  },
  {
    name: 'datakra.sh',
    src: '/buttons/datakrashbutton2.png',
    url: 'https://datakra.sh/',
  },
  {
    name: '88x31px Button Generator by datakra.sh',
    src: '/buttons/datakrash_88x31buttongenerator.gif',
    url: 'https://88x31.datakra.sh/',
  },
  {
    name: 'notnite.com',
    src: '/buttons/notnite.png',
    url: 'https://notnite.com/',
  },
];
