import type { Metadata } from 'next';
import { ProjectsHeader } from '@/components/projects/projects-header';
import { ProjectsList } from '@/components/projects/projects-list';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'All projects, experiments, and open-source tooling.',
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}
