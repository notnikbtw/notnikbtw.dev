import { Link } from '@/components/ui/link';
import { isLive, type Project } from '@/config/projects';
import { TechList } from '@/components/tech-badge';
import { Card } from '@/components/ui/card';
import { ProjectLinks } from '@/components/projects/project-links';
import { ProjectStatus } from '@/components/projects/project-status';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex flex-col justify-between p-4 sm:flex-row sm:items-start sm:gap-6">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-mono text-sm font-semibold sm:text-base">
            <Link
              href={`/projects/${project.id}`}
              variant="green"
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.title}
            </Link>
          </h3>

          {isLive(project) && (
            <span className="text-chart-4 inline-flex items-center gap-1 font-mono text-xs">
              <span className="bg-chart-4 h-1.5 w-1.5" aria-hidden="true" />
              <span>live</span>
            </span>
          )}

          <ProjectStatus status={project.status} />
        </div>

        <p className="text-muted-foreground line-clamp-2 max-w-xl text-sm leading-relaxed">
          {project.description}
        </p>

        <TechList items={project.tech} className="mt-1" />
      </div>

      <div className="mt-3 flex flex-col items-start gap-2.5 sm:mt-0 sm:shrink-0 sm:items-end">
        {project.period && (
          <span className="text-muted-foreground/60 font-mono text-xs">
            {project.period}
          </span>
        )}

        <ProjectLinks project={project} className="relative z-10" />
      </div>
    </Card>
  );
}
