import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from '@/components/ui/link';
import { CopyButton } from '@/components/copy-button';

export type LinkCardProps = {
  label: string;
  value: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  canCopy?: boolean;
  copyValue?: string;
};

export function LinkCard({
  label,
  value,
  href,
  icon: Icon,
  canCopy,
  copyValue = href,
}: LinkCardProps) {
  return (
    <Card className="group relative flex min-w-0 flex-col justify-between p-4">
      <div className="flex items-center justify-between">
        <div className="text-muted-foreground group-hover:text-foreground flex items-center gap-2 transition-colors">
          {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
          <span className="font-mono text-xs font-semibold tracking-wider uppercase">
            {label}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {canCopy && (
            <CopyButton
              value={copyValue}
              ariaLabel={`Copy ${copyValue}`}
              className="relative z-10"
            />
          )}
          <ArrowRight
            className="text-muted-foreground/60 group-hover:text-foreground h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mt-3 min-w-0">
        <Link
          href={href}
          variant="green"
          className="block font-mono text-sm font-semibold break-words after:absolute after:inset-0 after:content-[''] focus:outline-none"
        >
          {value}
        </Link>
      </div>
    </Card>
  );
}
