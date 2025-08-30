# EaseAnimateUX

**EaseAnimateUX** is a Next.js-based front-end template/boilerplate and design system for building seamless, animated user experiences. It provides a modern, responsive foundation with built-in theme (light/dark), animated logo support, micro-interactions, and utility components to help you launch animated, user-friendly websites quickly.

> **Demo / Live Site**: https://xeleratedtech.vercel.app 
> **Logo**: The “EamoUX” monogram with flowing motion icon, adaptive to light/dark mode.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Development](#development)  
- [Project Structure](#project-structure)  
- [Theme & Logo Handling](#theme--logo-handling)  
- [Animations & UX Patterns](#animations--ux-patterns)  
- [Deployment](#deployment)  
- [Environment Variables](#environment-variables)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## Features

- **Next.js App Router**: File-based routing, server-side rendering (SSR), static site generation (SSG), API routes.
- **Dark/Light Mode Support**: Using `next-themes`, with automatic detection and toggle component.
- **Adaptive Logo**: Inline SVG logo (`EamoUX` monogram) that swaps or adapts color in light/dark mode.
- **Micro-Interactions & Animations**: Example components using Framer Motion for scroll-triggered reveals, hover effects, “Back to Top” button, etc.
- **Responsive Design**: Mobile-first with Tailwind CSS utility classes, fluid layouts, container-based structure.
- **Theming & Styling**: Tailwind CSS configured for design tokens, customizable colors, gradients for “motion” accents.
- **Reusable Components**: Header, Footer, ThemeToggle, Button, Card, Section wrappers, Animation wrappers.
- **Accessibility Considerations**: Semantic HTML, ARIA attributes for interactive elements, focus rings, color contrast in both themes.
- **SEO-Ready**: Metadata configuration via Next.js `Metadata` API (in App Router).
- **Performance Optimizations**: Image optimization with Next/Image, code splitting, caching headers for static assets.
- **Easy Setup**: Starter scripts for local development, linting, formatting.

---

## Tech Stack

- **Framework**: Next.js (v14+)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Font**: Locally hosted Inter (or Google Fonts via next/font)
- **Theme**: next-themes for light/dark toggle
- **Icons**: lucide-react (or similar)
- **Build & Deployment**: Vercel (or any Node-capable hosting)
- **TypeScript**: Optional; recommended for type safety
- **Version Control**: Git / GitHub
- **Linting & Formatting**: ESLint, Prettier

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm, yarn, or pnpm
- Git

