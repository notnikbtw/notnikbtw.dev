import { LinkCard } from '@/components/link-card';
import type { Project } from '@/config/projects';

type ProjectLinkCardsProps = {
  project: Project;
};

export function ProjectLinkCards({ project }: ProjectLinkCardsProps) {
  return (
    <div className="flex flex-col gap-3">
      {project.links?.map(link => (
        <LinkCard
          key={link.href}
          label={link.label}
          href={link.href}
          value={link.href.replace(/^https?:\/\//, '')}
          canCopy
        />
      ))}
    </div>
  );
}
