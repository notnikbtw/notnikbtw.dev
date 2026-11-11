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
    id: 'personal-website',
    title: 'Personal Website',
    description:
      'My personal website, designed in the terminal style and built using Next.js, features a variety of cool themes and pages',
    details: [
      'This is my personal website where I do whatever I want ᗜ⩊ᗜ I wanted to design it in a terminal-style and drew inspiration from various window managers.',
      "It has a home page featuring my favorite projects, a page listing all my projects, and a page about me. There are also some cool 88x31 buttons in the footer, and I love them, they're really cool",
      "In the future, I'd really like to start my own blog, and someday I'll set up a separate page for it. But right now, unfortunately, I don't have enough time for that",
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
      'My Nix configuration for my desktop and laptop, both running the Hyprland window manager. Also included are my configurations for Waybar, Rofi and other programs.',
    details: [
      'My NixOS configurations for my desktop computer and laptop (Lenovo IdeaPad 5 Pro). Both devices run Hyprland and use the same modules.',
      'The desktop environment consists of Waybar, Rofi as a launch panel, Hyprlock, and Zsh with Starship.',
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
      'Waybar',
      'Dunst',
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
