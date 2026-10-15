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
      'A personal website with a terminal-inspired interface, built with Next.js and the Kanagawa color palette.',
    details: [
      'A personal website designed in a Unix and terminal style: monospaced typography, shell-style prompts, and the Kanagawa theme with light and dark modes.',
      'It features a homepage with my favorite projects, a catalog of my projects, and information about me.',
      'I tried to write high-quality, optimized code. This project uses ESLint, Prettier, Husky, and lint-staged. GitHub Actions also runs checks and provides continuous integration (CI).',
    ],
    images: [
      {
        src: '/projects/portfolio-website/home.webp',
        alt: 'Home page with the introduction and featured projects',
      },
      {
        src: '/projects/portfolio-website/projects.webp',
        alt: 'Projects page with the status filter',
      },
      {
        src: '/projects/portfolio-website/about.webp',
        alt: 'About page',
      },
      {
        src: '/projects/portfolio-website/footer.webp',
        alt: 'Footer with 88x31 buttons',
      },
    ],
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
      'My Nix configuration for my desktop and laptop, both running the Hyprland window manager. Also included are my configurations for Quickshell, Rofi, Zsh, and other programs.',
    details: [
      'My NixOS configurations for my desktop computer and laptop (Lenovo IdeaPad 5 Pro). Both devices run Hyprland and use the same modules, while host-specific settings, such as UI scaling and battery profiles, live in one place.',
      'The desktop environment consists of Quickshell (status bar, notifications, and OSD), Rofi as a launch panel, Hyprlock and Hypridle, Kitty, Zsh with Starship, and Tmux.',
      'At the system level, there is a Btrfs file system based on LUKS with zstd compression, hourly snapshots of /home using Snapper, monthly data checks, and zram swap space.',
    ],
    images: [
      {
        src: '/projects/nixos-config/fastfetch.webp',
        alt: 'Fastfetch Output',
      },
    ],
    tech: [
      'Nix',
      'Hyprland',
      'tuigreet',
      'Quickshell',
      'Rofi',
      'Hyprlock + Hypridle',
      'Zsh + Starship',
      'Tmux',
    ],
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
    details: [
      'A booking system for venues and tables, split into a NestJS API and a React client. Users can find places on a map, search for venues near them using Google Maps, and read details about each one. They can also reserve a table and leave ratings and reviews.',
      'Owners manage their own venues: name, description, photo galleries, and opening hours. They can also add moderators to help with reviews. An admin page covers venues and users, and access is split into four roles (user, moderator, owner, and super administrator) enforced with role guards.',
      'The backend runs on PostgreSQL with TypeORM, uses JWT authentication with refresh tokens, and has Swagger API docs. It is containerized with Docker and deployed through GitHub Actions and Watchtower. The frontend is built with React 19, TypeScript, Vite, and Redux Toolkit.',
    ],
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
