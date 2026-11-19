import { PRIVACY_CONFIG } from '@/config/privacy';
import { SectionSubheader } from '@/components/section-subheader';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight } from 'lucide-react';

export function PrivacySections() {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {PRIVACY_CONFIG.sections.map(section => (
        <section
          key={section.id}
          aria-labelledby={section.id}
          className="flex flex-col gap-2.5"
        >
          <SectionSubheader
            id={section.id}
            as="h2"
            prefix="// "
            title={section.title}
          />

          <Card className="flex flex-col gap-4 p-4 sm:p-5">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {section.description}
            </p>

            {section.points && section.points.length > 0 && (
              <div className="border-border/60 flex flex-col gap-3 border-t pt-3">
                {section.points.map(point => (
                  <div key={point.label} className="flex flex-col gap-1">
                    <span className="text-foreground font-mono text-lg font-semibold">
                      [{point.label}]:
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {point.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {section.links && section.links.length > 0 && (
              <div className="border-border/60 mt-1 flex flex-col gap-4 border-t pt-3">
                {section.links.map(link => (
                  <div
                    key={link.href}
                    className="flex items-center justify-between gap-3"
                  >
                    <Link
                      href={link.href}
                      className="inline-flex max-w-full items-center gap-1.5 font-mono text-xs font-semibold"
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                    </Link>
                    {link.canCopy && (
                      <CopyButton
                        value={link.label}
                        ariaLabel={`Copy ${link.label}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </section>
      ))}

      <footer className="border-border/60 text-muted-foreground flex items-center justify-between border-t pt-4 font-mono text-xs">
        <span>{'// EOF'}</span>
        <span>Last updated: {PRIVACY_CONFIG.lastUpdated}</span>
      </footer>
    </div>
  );
}
