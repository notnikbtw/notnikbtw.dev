import Link from 'next/link';
import { socialLinks } from '@/config/navigation';
import { ArrowRight } from 'lucide-react';
import { HERO_TAGLINE } from '@/config/about';

export function Hero() {
  return (
    <section aria-label="Introduction" className="flex flex-col gap-6">
      <div className="flex items-center gap-4 sm:gap-5">
        <div
          className="border-border bg-card text-foreground flex h-16 w-16 shrink-0 items-center justify-center border font-mono text-xl font-bold select-none sm:h-20 sm:w-20"
          aria-hidden="true"
        >
          !N
        </div>

        <h1 className="text-foreground font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          Hi, I am !Nik
        </h1>
      </div>

      <p className="text-muted-foreground max-w-lg text-sm leading-relaxed sm:text-base">
        {HERO_TAGLINE}
      </p>

      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        {socialLinks.map(link => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-border bg-card/40 text-foreground hover:border-foreground/60 hover:bg-card focus-visible:ring-ring inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs transition-colors focus-visible:ring-1 focus-visible:outline-none"
            >
              {Icon && (
                <Icon
                  className="text-muted-foreground group-hover:text-foreground size-3.5 transition-colors"
                  aria-hidden="true"
                />
              )}
              <span>{link.label.toLowerCase()}</span>
              <ArrowRight
                className="text-muted-foreground h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
