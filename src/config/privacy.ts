import { LINKS } from '@/config/site';

export type PrivacyLink = {
  label: string;
  href: string;
  canCopy?: boolean;
  isFile?: boolean;
};

export type PrivacyPoint = {
  label: string;
  text: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  description: string;
  points?: readonly PrivacyPoint[];
  links?: readonly PrivacyLink[];
};

export type PrivacyConfig = {
  lastUpdated: string;
  repositoryUrl: string;
  sections: readonly PrivacySection[];
};

export const PRIVACY_CONFIG: PrivacyConfig = {
  lastUpdated: '2026-11-19',
  repositoryUrl: LINKS.portfolio.repositoryUrl,
  sections: [
    {
      id: 'privacy-analytics',
      title: 'Privacy & Analytics',
      description:
        'This is a personal website. It uses traffic analytics and saves appearance settings in your browser. There are no accounts, forms asking for personal details, or ads',
      points: [
        {
          label: 'Hosting',
          text: 'Your browser connects to the hosting provider to load the site. The provider receives your IP address and request headers and may keep server logs under its own policies',
        },
        {
          label: 'Analytics',
          text: 'This website uses Vercel Web Analytics to analyze which pages users visit, where visitors come from, and to obtain approximate information about their location and devices. Vercel does not use cookies to identify visitors or track their activity across different websites. Visitor session identifiers are deleted after 24 hours, but aggregated statistical data is stored separately',
        },
        {
          label: 'Visitor Counter',
          text: 'The small counter in the footer is loaded from the website count.getloli.com. Your browser connects directly to this service, which receives your IP address and request headers. This service manages server logs and data retention periods. Other button images and fonts are loaded from this website',
        },
      ],
      links: [
        {
          label: 'Vercel Analytics privacy',
          href: 'https://vercel.com/docs/analytics/privacy-policy',
        },
        {
          label: 'Moe Counter project',
          href: 'https://github.com/journey-ad/Moe-Counter',
        },
      ],
    },
    {
      id: 'cookies-storage',
      title: 'Browser Settings',
      description:
        'The site remembers your appearance settings using localStorage. They stay in your browser between visits',
      points: [
        {
          label: 'Saved Preferences',
          text: 'There are three keys: "theme" for light, dark, or system mode; "palette" for colors; and "font" for Departure Mono or IBM Plex Mono. You can change them using the appearance controls or remove them by clearing this site’s browser data',
        },
        {
          label: 'Cookies',
          text: 'The website itself does not set cookies for tracking, marketing, or login purposes. The external counter processes its own responses and may use different approaches to cookies or data storage',
        },
      ],
    },
    {
      id: 'open-source',
      title: 'Code & Licenses',
      description:
        'The code is on GitHub under the MIT License. Feel free to explore it and use it in your own projects',
      points: [
        {
          label: 'Third-Party Work',
          text: 'The Departure Mono and IBM Plex Mono fonts are distributed under the SIL Open Font License 1.1, which is included with the font files. Libraries, buttons, and other materials from third-party developers are subject to their own licenses. This site’s MIT License does not supersede those licenses',
        },
        {
          label: 'Site Content',
          text: 'The MIT license covers the code, not automatically the branding, writing, or original artwork. Feel free to add the site’s 88×31 button to your website and link back to this site :3',
        },
        {
          label: 'Before You Run It',
          text: 'Code and configurations are shared as-is. Please review them before use and keep backups',
        },
      ],
      links: [
        {
          label: LINKS.portfolio.repo,
          href: LINKS.portfolio.repositoryUrl,
        },
        {
          label: 'Third-party notices & licenses',
          href: '/THIRD_PARTY_NOTICES.txt',
          isFile: true,
        },
      ],
    },
    {
      id: 'contact',
      title: 'Questions?',
      description:
        'This site is maintained by !Nik. Do you have questions about privacy, the code, or the use of materials from the site? Contact me by email or check out other ways to get in touch on the About page',
      links: [
        {
          label: LINKS.email.value,
          href: LINKS.email.href,
          canCopy: true,
        },
        {
          label: 'Other contact options',
          href: '/about',
          canCopy: false,
        },
      ],
    },
  ],
};
