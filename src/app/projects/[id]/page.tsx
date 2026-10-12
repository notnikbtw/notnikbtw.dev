import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetails } from '@/components/projects/project-details';
import { ProjectDetailsHeader } from '@/components/projects/project-details-header';
import { getProjectById, projects } from '@/config/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(project => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[id]'>): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<'/projects/[id]'>) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  return (
    <div className="page">
      <ProjectDetailsHeader project={project} />
      <ProjectDetails project={project} />
    </div>
  );
}
