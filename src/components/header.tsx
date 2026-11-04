'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { PaletteSelect } from '@/components/palette-select';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border bg-background sticky top-0 z-50 w-full border-b">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="!Nik - Home page"
          className="text-foreground hover:text-foreground/80 focus-visible:ring-ring font-mono text-lg font-bold tracking-tight transition-colors focus-visible:ring-1 focus-visible:outline-none"
        >
          !Nik
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 sm:gap-2"
        >
          {navItems.map(item => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-visible:ring-ring rounded-(--radius) px-3 py-1.5 text-sm transition-colors focus-visible:ring-1 focus-visible:outline-none ${
                  isActive
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <PaletteSelect />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
