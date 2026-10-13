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
    details: [
      'A personal website designed in a Unix and terminal style: monospaced typography, shell-style prompts, and the Kanagawa theme with light and dark modes.',
      'It features a homepage with my favorite projects, a catalog of my projects with filtering options, and a page with my bio, information about me and my systems, and links. This site does not use cookies or collect personal data.',
      'I tried to write high-quality, optimized code. This project uses ESLint, Prettier, Husky, and lint-staged. GitHub Actions also runs checks and provides continuous integration (CI), Dependabot updates dependencies, and the site is deployed to Vercel.',
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
      'My personal Nix configurations for my PC and laptop, which use the Hyprland WM. Also included are my configurations for Quickshell, Rofi, Zsh, and other programs.',
    details: [
      'My NixOS module configurations for my desktop computer and laptop (Lenovo IdeaPad 5 Pro). Both devices run Hyprland and use the same modules, while host-specific settings, such as UI scaling and battery profiles, live in one place.',
      'The desktop environment consists of Quickshell (status bar, notifications, and OSD), Rofi as a launch panel, Hyprlock and Hypridle, Kitty, Zsh with Starship, and Tmux.',
      'At the system level, there is a Btrfs file system based on LUKS with zstd compression, hourly snapshots of /home using Snapper, monthly data checks, and zram swap space.',
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
      'A full-stack venue and table booking system split into a NestJS API and a React client. Users can view establishments on the map, find nearby places using Google Maps geolocation, view detailed information about establishments, reserve tables, and leave ratings and reviews.',
      'Owners manage their establishments through their own page, which includes the name, description, photo galleries, and opening hours; there are also moderators who help manage reviews. Also, there is an admin page where the site, establishments, and users are managed; this page features four roles (user, moderator, owner, and super administrator), access to which is controlled through role guards.',
      'The backend uses PostgreSQL with TypeORM, JWT authentication with refresh tokens, and Swagger API documentation. The project uses Docker for containerization and is deployed via GitHub Actions and Watchtower. The frontend is built using React 19, TypeScript, Vite, and Redux Toolkit.',
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
