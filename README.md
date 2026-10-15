# Personal Portfolio

A personal website with a terminal-inspired interface, built with Next.js 16, Tailwind CSS v4, and the Kanagawa color palette.

[![CI](https://github.com/notnikbtw/notnikbtw.dev/actions/workflows/ci.yml/badge.svg)](https://github.com/notnikbtw/notnikbtw.dev/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

[Live Demo](https://www.notnikbtw.dev) | [GitHub Repository](https://github.com/notnikbtw/notnikbtw.dev) | [Issues](https://github.com/notnikbtw/notnikbtw.dev/issues)

---

## Overview

A portfolio website inspired by Unix aesthetics and terminal interfaces. The interface features thoughtful typography, is accessible thanks to semantic markup, and does not use cookies for tracking; it also provides fast navigation between pages.

### Features

- A home page featuring favorite projects and a catalog page listing all projects
- A details page for each project (`/projects/:id`) with a description, tech stack, links, and an optional image slider
- An about page with a bio, my workstation, and contact links
- Light and dark themes
- [Nix webring](https://nixwebr.ing) links in the footer

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI), Embla Carousel
- **Theme**: next-themes (local storage persistence)
- **Icons & Fonts**: Lucide React, Geist, Geist Mono
- **Code Quality**: TypeScript 5, ESLint 9, Prettier, Husky, lint-staged
- **Analytics & Hosting**: Vercel, Vercel Web Analytics
- **CI / Automation**: GitHub Actions CI, Dependabot

---

## Getting Started

### Prerequisites

- Node.js 24.x
- npm

### Installation

```bash
git clone https://github.com/notnikbtw/notnikbtw.dev.git
cd notnikbtw.dev
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Quality Scripts

- `npm run dev`: Start development server with Turbopack
- `npm run build`: Create an optimized production build (a static export in `out/`)
- `npx serve@latest out`: Preview the production build (`npm run start` does not work with `output: 'export'`)
- `npm run lint`: Run ESLint checks
- `npm run typecheck`: Run TypeScript compiler checks
- `npm run format:check`: Verify code formatting with Prettier

Husky runs `lint-staged` (Prettier and ESLint on staged files) before every commit. CI runs the format check, lint, typecheck, and build on every pull request.

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
