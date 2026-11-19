import { ThemeProvider } from '@/components/providers/theme-provider';
import { PALETTE_INIT_SCRIPT } from '@/config/palettes';
import { FONT_INIT_SCRIPT, DEFAULT_FONT } from '@/config/fonts';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/next';
import { jsonLd } from '@/config/seo';
export { metadata } from '@/config/seo';
import { ibmPlexMono, departureMono } from '@/lib/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-font={DEFAULT_FONT}
      className={`${ibmPlexMono.variable} ${departureMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: PALETTE_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: FONT_INIT_SCRIPT }} />
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
