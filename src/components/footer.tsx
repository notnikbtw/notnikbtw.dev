import Image from 'next/image';
import { Link } from '@/components/ui/link';
import { navItems, socialLinks } from '@/config/navigation';
import { webBadges } from '@/config/badges';
import { NixWebring } from '@/components/nix-webring';
import { MOE_COUNTER_URL } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background w-full border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-8 text-xs sm:px-6 sm:text-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MOE_COUNTER_URL}
          alt="Visitor Counter"
          className="image-rendering-pixelated min-h-10"
          loading="lazy"
        />
        <NixWebring />
        {webBadges.length > 0 && (
          <div
            aria-label="Web badges"
            className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-2.5"
          >
            {webBadges.map(badge => {
              const badgeImage = (
                <Image
                  src={badge.src}
                  alt={badge.name}
                  width={88}
                  height={31}
                  unoptimized
                  className="image-rendering-pixelated"
                />
              );

              return badge.url ? (
                <Link
                  key={badge.name}
                  href={badge.url}
                  className="inline-block transition-opacity hover:opacity-85"
                >
                  {badgeImage}
                </Link>
              ) : (
                <span key={badge.name} className="inline-block">
                  {badgeImage}
                </span>
              );
            })}
          </div>
        )}
        <div className="border-border/40 flex w-full flex-col items-center justify-between gap-4 border-t pt-5 sm:flex-row">
          <p className="font-mono">
            &copy; {currentYear}{' '}
            <Link
              href="/"
              aria-label="!Nik - Home page"
              className="text-foreground hover:text-foreground/80"
            >
              !Nik
            </Link>
            <span
              className="text-border/60 mx-2 select-none"
              aria-hidden="true"
            >
              &middot;
            </span>
            <Link
              href="/privacy"
              aria-label="Privacy policy and terms of service"
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              privacy &amp; terms
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <nav
              className="flex items-center gap-4"
              aria-label="Footer navigation"
            >
              {navItems.map(item => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <span
              className="text-border/60 hidden sm:inline"
              aria-hidden="true"
            >
              •
            </span>

            <nav className="flex items-center gap-4" aria-label="Social links">
              {socialLinks.map(link => (
                <Link key={link.label} href={link.href} aria-label={link.label}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
