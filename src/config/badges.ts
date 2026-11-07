import { SITE_BADGE } from '@/config/site';

type WebBadge = {
  name: string;
  src: string;
  url: string;
};

export const webBadges: WebBadge[] = [
  {
    name: 'NixOS',
    src: '/buttons/nixos.gif',
    url: 'https://nixos.org',
  },
  {
    name: 'Certified kawaii',
    src: '/buttons/kawaii.gif',
    url: 'https://luckystar.fandom.com/wiki/Konata_Izumi',
  },
  {
    name: 'My website, you are here (˶>⩊<˶)',
    src: SITE_BADGE.src,
    url: SITE_BADGE.url,
  },
  {
    name: 'I like computer :3',
    src: '/buttons/i-like-computer.png',
    url: 'https://copy.sh/v86/',
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
    url: 'https://ublockorigin.com/',
  },
  {
    name: 'quanten​zitrone',
    src: 'https://quantenzitrone.eu/res/88x31.gif',
    url: 'https://quantenzitrone.eu',
  },
  {
    name: 'c7.pm',
    src: '/buttons/c7-badge.png',
    url: 'https://c7.pm/',
  },
  {
    name: 'Keep the web free, say no to Web3',
    src: '/buttons/noweb32.gif',
    url: 'https://yesterweb.org/no-to-web3/',
  },
  {
    name: 'datakrash',
    src: '/buttons/datakrashbutton2.png',
    url: 'https://datakra.sh/',
  },
  {
    name: '88x31px Button Generator by datakra.sh',
    src: '/buttons/datakrash_88x31buttongenerator.gif',
    url: 'https://88x31.datakra.sh/',
  },
  {
    name: 'notnite',
    src: '/buttons/notnite.png',
    url: 'https://notnite.com/',
  },
];
