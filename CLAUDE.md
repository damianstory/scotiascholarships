# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Turborepo monorepo using Bun as the package manager. Core commands:

- `bun dev` - Start the main app in development mode (runs on port 3000)
- `bun build` - Build all packages and apps 
- `turbo build` - Alternative build command using Turbo directly
- `bun lint` - Run Biome linter across all workspaces
- `bun format` - Format code using Biome
- `bun typecheck` - Run TypeScript type checking across all workspaces
- `bun clean` - Remove node_modules and build artifacts
- `bun clean:workspaces` - Clean all workspace build outputs

Individual app commands:
- App-specific commands can be run with `turbo dev --filter=@v1/app` or by navigating to the specific workspace

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
- Landing page with circular testimonials component
- Student testimonial data with quotes, images, and scholarship themes
- Responsive design optimized for mobile-first
- Clean, professional styling with Scotiabank branding colors

### Component Architecture
- UI components are shared through `@v1/ui` package
- Components export both the component and TypeScript types
- Uses class-variance-authority for component variants
- Circular testimonials component supports theming and autoplay

## Code Style and Conventions

Follow the established patterns from `.cursorrules`:
- Use TypeScript interfaces over types
- Prefer functional components with descriptive variable names
- Use Server Components by default, minimize 'use client'
- Structure: exported component, subcomponents, helpers, static content, types
- Use early returns and guard clauses for error handling
- Mobile-first responsive design with Tailwind CSS

## Package Management
- Uses Bun 1.1.26 as package manager
- Workspaces configured for `packages/*`, `apps/*`, `tooling/*`
- Dependencies are managed at workspace level where appropriate

## Build and Lint Requirements
Always run `bun lint` and `bun typecheck` after making changes to ensure code quality and type safety.