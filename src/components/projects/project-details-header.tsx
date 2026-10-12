import { Breadcrumb } from '@/components/breadcrumb';
import { TerminalTitle } from '@/components/terminal-title';
import { ProjectStatus } from '@/components/projects/project-status';
import { isLive, type Project } from '@/config/projects';

type ProjectDetailsHeaderProps = {
  project: Project;
};

export function ProjectDetailsHeader({ project }: ProjectDetailsHeaderProps) {
  return (
    <header className="page-header">
      <Breadcrumb
        href="/projects"
        label="cd .."
        ariaLabel="Back to all projects"
      />

      <div className="flex flex-col gap-2.5">
        <TerminalTitle path={`~/projects/${project.id}`} />
        <div className="text-muted-foreground/80 flex flex-wrap items-center gap-2 font-mono text-xs">
          {isLive(project) && (
            <span className="text-chart-4 inline-flex items-center gap-1 font-mono text-xs">
              <span className="bg-chart-4 h-1.5 w-1.5" aria-hidden="true" />
              <span>live</span>
            </span>
          )}
          <ProjectStatus status={project.status} />
          <span className="text-muted-foreground/60 font-mono text-xs">
            {project.period}
          </span>
        </div>
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
          {project.description}
        </p>
      </div>
    </header>
  );
}
