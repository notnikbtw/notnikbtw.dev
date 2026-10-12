import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import { Link } from '@/components/ui/link';
import { CopyButton } from '@/components/copy-button';
import { LinkCard } from '@/components/link-card';
import { SectionSubheader } from '@/components/section-subheader';
import { CONNECT_SECTIONS } from '@/config/connect';
import { SITE_BADGE } from '@/config/site';

export function AboutConnect() {
  return (
    <section aria-label="Connect" className="flex flex-col gap-6">
      <SectionHeader title="Connect" />

      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        Feel free to reach out to me if you have an interesting project, a
        question, or just want to say hi. I&apos;m always open to discussing new
        opportunities, engineering jobs, and collaboration.
      </p>

      <div className="flex flex-col gap-6">
        {CONNECT_SECTIONS.map(section => (
          <div key={section.id} className="flex flex-col gap-2.5">
            <SectionSubheader title={section.title} />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {section.channels.map(item => (
                <LinkCard key={item.label} {...item} copyValue={item.value} />
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2.5">
          <SectionSubheader title={SITE_BADGE.title} />

          <Card className="flex flex-col gap-4 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href={SITE_BADGE.url}
                  className="shrink-0 transition-opacity hover:opacity-85 focus:outline-none"
                  aria-label={SITE_BADGE.alt}
                >
                  <Image
                    src={SITE_BADGE.src}
                    alt={SITE_BADGE.alt}
                    width={88}
                    height={31}
                    unoptimized
                    className="image-rendering-pixelated border-border/80 shrink-0 border"
                  />
                </Link>
                <div className="flex flex-col">
                  <span className="text-foreground font-mono text-xs font-semibold">
                    {SITE_BADGE.title}
                  </span>
                  <span className="text-muted-foreground font-mono text-[11px]">
                    88&times;31 px &middot; web badge
                  </span>
                </div>
              </div>

              <CopyButton
                value={SITE_BADGE.embedHtml}
                ariaLabel="Copy HTML embed code for 88x31 badge"
                className="self-start sm:self-auto"
              />
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              {SITE_BADGE.description}
            </p>

            <div className="border-border/60 bg-muted/30 text-foreground/90 selection:bg-muted selection:text-foreground overflow-x-auto border p-2.5 font-mono text-xs">
              <code className="whitespace-pre">{SITE_BADGE.embedHtml}</code>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
