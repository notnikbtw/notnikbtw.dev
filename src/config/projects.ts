import { LINKS } from '@/config/site';

export type ProjectStatus = 'active' | 'completed' | 'archived';

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  details?: string[];
  images?: ProjectImage[];
  tech: string[];
  period: string;
  status: ProjectStatus;
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'A minimalist personal portfolio with a terminal-inspired interface, built using Next.js and the Kanagawa color palette.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    period: '2026 - present',
    status: 'active',
    links: [
      { label: 'code', href: LINKS.portfolio.repositoryUrl },
      { label: 'demo', href: LINKS.portfolio.liveUrl },
    ],
    featured: true,
  },
  {
    id: 'nixos-config',
    title: 'Dotfiles & NixOS Config',
    description:
      'My personal Nix configurations for my PC and laptop, which use the Hyprland WM. Also included are my configurations for Quickshell, Rofi, Zsh, and other programs.',
    tech: ['Nix', 'Hyprland', 'Quickshell', 'Rofi', 'Zsh', 'Tmux'],
    period: '2026 - present',
    status: 'active',
    links: [{ label: 'code', href: LINKS.dotfiles.href }],
    featured: true,
  },
  {
    id: 'booking-platform',
    title: 'Booking Platform',
    description:
      'Full-stack platform for booking tables and seats at restaurants. It includes an interactive search, a booking feature, reviews, and integration with Google Maps.',
    tech: [
      'React',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'Docker',
      'Google Maps API',
    ],
    period: '2025 - 2026',
    status: 'completed',
    links: [
      {
        label: 'backend',
        href: 'https://github.com/notnikbtw/venue-booking-backend',
      },
      {
        label: 'frontend',
        href: 'https://github.com/notnikbtw/venue-booking-frontend',
      },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export function isLive(project: Project): boolean {
  return project.links?.some(link => link.label === 'demo') ?? false;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
