import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL, LINKS } from '@/config/site';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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

const jsonLd = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="focus:bg-background focus:text-foreground focus:border-border focus:ring-ring sr-only font-mono text-xs focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border focus:px-3 focus:py-1.5 focus:ring-1 focus:outline-none"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main
            id="main-content"
            className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 sm:px-6"
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
