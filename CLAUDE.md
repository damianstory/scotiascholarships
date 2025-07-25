# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Turborepo monorepo for the Scotiabank Scholarship Winners Showcase. Package manager is specified as Bun but npm is functional for development:

- `npm run dev` or `bun dev` - Start the main app in development mode (targets @v1/app, runs on port 3000)
- `npm run build` or `bun build` - Build all packages and apps using Turbo
- `npm run lint` or `bun lint` - Run Biome linter across all workspaces
- `npm run format` or `bun format` - Format code using Biome
- `npm run typecheck` or `bun typecheck` - Run TypeScript type checking across all workspaces
- `npm run clean` or `bun clean` - Remove node_modules using git clean
- `npm run clean:workspaces` or `bun clean:workspaces` - Clean all workspace build outputs
- `npm start` or `bun start` - Start the production build

Development server alternatives:
- `npx next dev -p 3001` - Start Next.js dev server directly on alternate port
- If port 3000 is in use, try ports 3001, 3002, etc.

## Architecture Overview

This is a Next.js 14 application with the following structure:

### Monorepo Structure
- `apps/app/` - Main Next.js application (Scotiabank scholarship winners showcase)
- `packages/ui/` - Shared UI component library with Radix UI, Tailwind, and custom components
- `tooling/typescript/` - Shared TypeScript configurations

### Key Technologies
- **Next.js 14** with App Router
- **React Server Components** preferred over client components
- **TypeScript** throughout with strict type checking
- **Tailwind CSS** for styling with mobile-first approach
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **Radix UI** for accessible component primitives
- **Framer Motion** for animations

### Application Details
The main app (`apps/app/`) is a scholarship winners showcase featuring:
- Single-page application showcasing 16 Scotiabank scholarship recipients
- 2-column responsive layout: student photos on left, testimonial text on right
- Student data includes quotes, names, institutions ("Headed to: [institution]"), and scholarship themes
- External navigation controls positioned above footer (arrows + dots)
- Scotiabank red (#EC111A) branding for navigation and theme text
- Dark navy blue (#0f172a) fallback background with 20% black overlay for text readability

### Component Architecture

**IMPORTANT: Component Duplication**
- The production app uses `CircularTestimonials` from `@v1/ui/circular-testimonials` (packages/ui)
- There is a duplicate, unused version in `apps/app/src/components/ui/circular-testimonials.tsx`
- Always modify the UI package version for production changes

Key component features:
- `CircularTestimonials` component is controlled (accepts currentIndex prop)
- Navigation state managed at page level with autoplay functionality
- Components use `@v1/ui/[component]` import paths
- Student testimonial data embedded directly in page component
- Long testimonials (>855 chars) have "View more/View less" functionality

## Code Style and Conventions

Follow the established patterns from `.cursorrules`:
- Use TypeScript interfaces over types
- Prefer functional components with descriptive variable names
- Use Server Components by default, minimize 'use client'
- Structure: exported component, subcomponents, helpers, static content, types
- Use early returns and guard clauses for error handling
- Mobile-first responsive design with Tailwind CSS
- Use Zod for form validation
- Model expected errors as return values in Server Actions

## Package Management
- Project configured for Bun 1.1.26 but npm works for development
- Workspaces: `packages/ui` (shared components), `apps/app` (main application), `tooling/typescript` (configs)
- Import UI components using `@v1/ui/[component]` paths
- Use `cn` utility from `@v1/ui/cn` for conditional styling

## Build and Lint Requirements
Always run `npm run lint` and `npm run typecheck` after making changes. Build with `npm run build` to verify compilation.

## Key Application Features
- Responsive testimonials with 2-column desktop layout optimized for laptop viewing
- Navigation controls separate from testimonial content to prevent layout shifts
- Special handling for student "Nada" (no quotes around testimonial text)
- Autoplay functionality with pause on hover (5-second intervals)
- Keyboard navigation support (arrow keys)
- Background image with dark fallback color and overlay for consistent text readability
- Fixed heights to prevent layout jumping between testimonials