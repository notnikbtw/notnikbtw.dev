import type { Metadata } from 'next';
import { SITE_URL, LINKS } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '!Nik | Full-Stack Developer',
    template: '%s | !Nik',
  },
  description:
    'Personal portfolio, projects, and notes on web development, backend, and systems by !Nik',
  keywords: [
    'Full-Stack Developer',
    'TypeScript',
    'Go',
    'React',
    'Next.js',
    'Node.js',
    'DevOps',
  ],
  authors: [{ name: '!Nik', url: SITE_URL }],
  creator: '!Nik',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: '!Nik | Full-Stack Developer',
    description:
      'Personal portfolio, projects, and notes on web development, backend, and systems by !Nik',
    siteName: '!Nik Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '!Nik | Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '!Nik | Full-Stack Developer',
    description:
      'Personal portfolio, projects, and notes on web development, backend, and systems by !Nik',
    creator: `@${LINKS.x.handle}`,
    site: `@${LINKS.x.handle}`,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: '!Nik',
      url: SITE_URL,
      jobTitle: 'Full-Stack Developer',
      sameAs: [LINKS.github.href, LINKS.x.href, LINKS.bluesky.href],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '!Nik Portfolio',
      description:
        'Personal portfolio, projects, and notes on web development, backend, and systems by !Nik',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
  ],
};
