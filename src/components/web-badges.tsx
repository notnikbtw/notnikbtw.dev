'use client';

import Image from 'next/image';
import { Popover } from 'radix-ui';
import { Link } from '@/components/ui/link';
import { webBadges } from '@/config/badges';

export function WebBadges({ inspectMode }: { inspectMode: boolean }) {
  if (webBadges.length === 0) return null;

  return (
    <div
      role="group"
      aria-label="Web badges"
      className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-2.5"
    >
      {webBadges.map(badge => {
        const image = (
          <Image
            src={badge.src}
            alt={badge.name}
            width={88}
            height={31}
            unoptimized
            className="image-rendering-pixelated"
          />
        );

        if (!inspectMode) {
          return (
            <Link key={badge.name} href={badge.url} className="inline-block">
              {image}
            </Link>
          );
        }

        return (
          <Popover.Root key={badge.name}>
            <Popover.Trigger asChild>
              <button
                type="button"
                aria-label={`Preview ${badge.name}`}
                className="focus-visible:ring-ring inline-block focus-visible:ring-1 focus-visible:outline-none"
              >
                {image}
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                aria-label={`${badge.name} preview`}
                side="top"
                sideOffset={10}
                collisionPadding={12}
                className="border-border bg-popover text-popover-foreground z-50 w-72.5 max-w-[calc(100vw-24px)] border p-3 shadow-[4px_4px_0_var(--border)]"
              >
                <div className="flex flex-col gap-2.5">
                  <Image
                    src={badge.src}
                    alt=""
                    width={264}
                    height={93}
                    unoptimized
                    className="image-rendering-pixelated h-auto w-full"
                  />
                  <div className="flex flex-col gap-1 font-mono text-xs break-words">
                    <span className="font-semibold">{badge.name}</span>
                    <Link href={badge.src} target="_blank" variant="green">
                      open image
                    </Link>
                    <Link href={badge.url} variant="green">
                      {badge.url}
                    </Link>
                  </div>
                </div>
                <Popover.Arrow className="fill-border" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        );
      })}
    </div>
  );
}
