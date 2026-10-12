import { ArrowRight } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';
import type { Project } from '@/config/projects';

type ProjectLinksProps = {
  project: Project;
  className?: string;
};

export function ProjectLinks({ project, className }: ProjectLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      {project.links?.map(link => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={`${project.title} ${link.label}`}
          className="inline-flex items-center gap-1 font-mono text-xs"
        >
          <span>{link.label}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
