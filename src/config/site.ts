export const MOE_COUNTER_URL =
  'https://count.getloli.com/@notnikbtw?name=notnikbtw&theme=original-old&padding=5&offset=0&align=top&scale=0.8&pixelated=1&darkmode=auto';

export const PROJECTS_PER_PAGE = 6;

export const SITE_URL = 'https://www.notnikbtw.dev';

export const LINKS = {
  email: {
    value: 'notnikbtw@proton.me',
    href: 'mailto:notnikbtw@proton.me',
  },
  github: {
    handle: 'notnikbtw',
    href: 'https://github.com/notnikbtw',
  },
  x: {
    handle: 'notnikbtw',
    href: 'https://x.com/notnikbtw',
  },
  bluesky: {
    handle: 'notnikbtw.bsky.social',
    href: 'https://bsky.app/profile/notnikbtw.bsky.social',
  },
  dotfiles: {
    repo: 'notnikbtw/nixos-config',
    href: 'https://github.com/notnikbtw/nixos-config',
  },
  portfolio: {
    repo: 'notnikbtw/notnikbtw.dev',
    repositoryUrl: 'https://github.com/notnikbtw/notnikbtw.dev',
    liveUrl: SITE_URL,
  },
} as const;

export const NIX_WEBRING = {
  name: 'notnikbtw',
  url: 'https://nixwebr.ing',
} as const;

export const SITE_BADGE = {
  title: '88x31 Button',
  alt: '!Nik - 88x31 Button',
  src: '/buttons/notnik.png',
  url: SITE_URL,
  description:
    "Have a personal website or a badge collection? Feel free to add my 88x31 button to your shelf, I'd really appreciate it :3",
  embedHtml: `<a href="${SITE_URL}" target="_blank" rel="noopener noreferrer"><img src="${SITE_URL}/buttons/notnik.png" alt="!Nik - 88x31 Button" width="88" height="31" /></a>`,
};
