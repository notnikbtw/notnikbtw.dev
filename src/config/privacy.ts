import { LINKS } from '@/config/site';

export type PrivacyLink = {
  label: string;
  href: string;
  canCopy?: boolean;
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
  lastUpdated: 'November 2026',
  repositoryUrl: LINKS.portfolio.repositoryUrl,
  sections: [
    {
      id: 'agreement',
      title: 'Terms & Agreement',
      description:
        'By accessing and browsing this website, you acknowledge that you have read these terms and conditions and agree to them. This site is a non-commercial personal portfolio and a demonstration of technical capabilities, maintained by !Nik.',
      points: [
        {
          label: 'Scope',
          text: 'This website is intended solely to showcase projects in the field of software development, technical experiments, workstation specifications, and my personal experience in the field of engineering.',
        },
        {
          label: 'Acceptance',
          text: 'By continuing to use this site, you acknowledge that you understand and agree to these terms. If you do not agree, you may stop browsing the site.',
        },
      ],
    },
    {
      id: 'privacy-analytics',
      title: 'Privacy & Analytics',
      description:
        'Your privacy is respected by default. This website does not collect any personal data and does not contain intrusive trackers or third-party ad networks.',
      points: [
        {
          label: 'No Personal Data',
          text: 'Names, IP addresses, email addresses, and personal browsing profiles are never collected, stored, or sold.',
        },
        {
          label: 'Vercel Analytics',
          text: 'General traffic metrics (number of page views, referral sources, device types, country) are processed using Vercel Web Analytics without storing IP addresses or tracking activity across third-party websites.',
        },
        {
          label: 'Visitor Counter',
          text: 'The footer displays a retro-pixel-style view counter (Moe Counter), which increments a simple, publicly accessible integer representing the number of views without identifying your device or browser.',
        },
      ],
    },
    {
      id: 'cookies-storage',
      title: 'Cookies & Local Storage',
      description:
        'This website operates completely without the use of cookies. No tracking cookies, no marketing cookies, and no third-party session IDs are stored on your system.',
      points: [
        {
          label: 'Zero Cookies',
          text: 'No cookie consent banner is needed or displayed because no tracking cookies are set.',
        },
        {
          label: 'Local Storage',
          text: 'The only data stored in your browser is two localStorage keys: one used by next-themes to remember dark or light mode, and one that remembers which color theme you picked.',
        },
      ],
    },
    {
      id: 'open-source',
      title: 'Open Source & Code',
      description:
        'All of the source code for this portfolio has been published on GitHub.',
      points: [
        {
          label: 'MIT License',
          text: 'The codebase is distributed under the MIT License. You are welcome to inspect, study, fork, and borrow architectural patterns for your own work.',
        },
        {
          label: 'Brand & Content',
          text: 'Personal branding, nickname (!Nik), custom 88x31 badges, and original biographical writings remain copyrighted and reserved.',
        },
      ],
      links: [
        {
          label: LINKS.portfolio.repo,
          href: LINKS.portfolio.repositoryUrl,
        },
      ],
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer & "As Is"',
      description:
        'All projects, code samples, configuration files, scripts, and documentation posted on this website are provided strictly “AS IS,” without any warranties.',
      points: [
        {
          label: 'No Liability',
          text: 'The author is not responsible for any damages, configuration errors, or data loss caused by executing or modifying any code or settings presented here.',
        },
        {
          label: 'Personal Views',
          text: 'All views, architectural opinions, and technical assessments expressed here are strictly personal and do not represent the position of my past, present, or future employers or clients.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact & Inquiries',
      description:
        'If you have any questions, clarifications, or feedback regarding these terms or privacy practices, feel free to reach out directly via email or GitHub.',
      points: [],
      links: [
        {
          label: LINKS.email.value,
          href: LINKS.email.href,
          canCopy: true,
        },
      ],
    },
  ],
};
