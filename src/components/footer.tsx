'use client';

import { Link } from '@/components/ui/link';
import { navItems, socialLinks } from '@/config/navigation';
import { WebBadges } from '@/components/web-badges';
import { NixWebring } from '@/components/nix-webring';
import { MOE_COUNTER_URL } from '@/config/site';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [inspectMode, setInspectMode] = useState(false);

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
        <div className="flex flex-col justify-center gap-1">
          <button
            type="button"
            onClick={() => setInspectMode(prev => !prev)}
            aria-pressed={inspectMode}
          >
            inspect buttons: {inspectMode ? 'on' : 'off'}
          </button>
          <WebBadges inspectMode={inspectMode} />
        </div>
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
