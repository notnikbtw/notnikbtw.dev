import { ImageSlider } from '@/components/image-slider';
import { SectionHeader } from '@/components/section-header';
import { TechList } from '@/components/tech-badge';
import { ProjectLinkCards } from '@/components/projects/project-link-cards';
import type { Project } from '@/config/projects';
import { cn } from '@/lib/utils';

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const hasImages = !!project.images && project.images.length > 0;
  const hasDetails = !!project.details && project.details.length > 0;
  const hasMain = hasImages || hasDetails;
  const hasLinks = !!project.links && project.links.length > 0;

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 sm:gap-10',
        hasMain && 'md:grid-cols-[minmax(0,1fr)_18rem]'
      )}
    >
      {hasMain && (
        <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
          {hasDetails && (
            <section
              aria-label="About the project"
              className="flex flex-col gap-4"
            >
              <SectionHeader title="About" />
              <div className="text-muted-foreground flex max-w-2xl flex-col gap-3 text-sm leading-relaxed">
                {project.details!.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          {hasImages && (
            <section
              aria-label="Project screenshots"
              className="flex flex-col gap-4"
            >
              <SectionHeader title="Screenshots" />
              <ImageSlider images={project.images!} />
            </section>
          )}
        </div>
      )}

      <aside
        aria-label="Project metadata"
        className={cn(
          'flex min-w-0 flex-col gap-8 sm:gap-10',
          !hasMain && 'w-full'
        )}
      >
        <section aria-label="Technologies used" className="flex flex-col gap-4">
          <SectionHeader title="Tech" />
          <TechList items={project.tech} />
        </section>

        {hasLinks && (
          <section aria-label="Project links" className="flex flex-col gap-4">
            <SectionHeader title="Links" />
            <ProjectLinkCards project={project} />
          </section>
        )}
      </aside>
    </div>
  );
}
