# Xelerated Tech - Digital Solutions Partner

**Xelerated Tech** is a modern, professional website built with Next.js showcasing comprehensive digital solutions and technology consulting services. The platform features responsive design, smooth animations, and an intuitive user experience that reflects our commitment to digital excellence.

> **Live Site**: https://xeleratedtech.vercel.app  
> **Logo**: The "XT" monogram with gradient accents, adaptive to light/dark mode themes.

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

- **Next.js App Router**: File-based routing, server-side rendering (SSR), static site generation (SSG), API routes for optimal performance.
- **Dark/Light Mode Support**: Using `next-themes`, with automatic detection and smooth toggle transitions.
- **Adaptive Branding**: Professional logo system with light/dark variants that automatically switch based on theme.
- **Portfolio Showcase**: Dynamic portfolio section featuring real client projects with interactive filtering and detailed case studies.
- **Client Testimonials**: Rotating testimonial carousel with authentic client feedback and ratings.
- **Service Offerings**: Comprehensive services section highlighting web development, mobile apps, digital strategy, and consulting.
- **Contact Integration**: Professional contact forms with validation and direct communication channels.
- **Micro-Interactions & Animations**: Smooth Framer Motion animations including scroll-triggered reveals, hover effects, and interactive elements.
- **Responsive Design**: Mobile-first approach with Tailwind CSS utility classes, ensuring perfect display across all devices.
- **SEO Optimized**: Complete metadata configuration, Open Graph tags, and structured data for search engine visibility.
- **Performance Optimized**: Image optimization with Next/Image, code splitting, lazy loading, and optimized asset delivery.
- **Accessibility Focused**: WCAG compliant with semantic HTML, ARIA attributes, keyboard navigation, and proper color contrast.

---

## Tech Stack

- **Framework**: Next.js (v14+) with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth interactions
- **Typography**: Inter font family locally hosted
- **Theme Management**: next-themes for seamless light/dark mode
- **Icons**: Lucide React for consistent iconography
- **Image Optimization**: Next.js Image component with WebP support
- **Form Handling**: React Hook Form with validation
- **Build & Deployment**: Vercel with automatic deployments
- **Language**: TypeScript for type safety and better development experience
- **Code Quality**: ESLint, Prettier, and Husky for consistent code standards
- **Version Control**: Git with GitHub integration

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xelerated-tech/website.git
   cd xelerated-tech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables (see [Environment Variables](#environment-variables) section).

### Development

1. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

3. **Available Scripts**
   ```bash
   npm run dev          # Start development server
   npm run build        # Build for production
   npm run start        # Start production server
   npm run lint         # Run ESLint
   npm run lint:fix     # Fix ESLint errors
   npm run type-check   # Run TypeScript checks
   ```

---

## Project Structure

```
xelerated-tech-website/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── Footer.tsx
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── SlideUp.tsx
│   │       └── ScrollReveal.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   ├── xelerated-logo-light.png
│   │   ├── xelerated-logo-dark.png
│   │   └── portfolio/
│   ├── favicon.ico
│   └── robots.txt
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Theme & Logo Handling

### Dark/Light Mode Implementation
The website uses `next-themes` for seamless theme switching:

- **Automatic Detection**: Respects user's system preference
- **Manual Toggle**: Theme toggle component in the header
- **Persistent State**: Theme preference saved in localStorage
- **SSR Compatible**: No hydration mismatches

### Logo System
- **Light Theme**: Dark logo version for contrast
- **Dark Theme**: Light logo version for visibility
- **Responsive Sizing**: Appropriate scaling across devices
- **Format Options**: PNG and SVG variants available

---

## Animations & UX Patterns

### Framer Motion Integration
- **Scroll Animations**: Elements animate in as they enter viewport
- **Hover Effects**: Interactive feedback on buttons and cards
- **Page Transitions**: Smooth navigation between sections
- **Loading States**: Skeleton loaders and transition states
- **Mobile Optimization**: Touch-friendly animations with reduced motion support

### Performance Considerations
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **Optimized Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Animations triggered only when elements are visible

---

## Deployment

### Vercel Deployment (Recommended)
1. **Connect GitHub Repository**
   - Link your repository to Vercel
   - Configure build settings (auto-detected for Next.js)

2. **Environment Variables**
   - Add production environment variables in Vercel dashboard
   - Include all variables from `.env.local`

3. **Custom Domain**
   - Configure custom domain (xeleratedtech.com)
   - Set up SSL certificate (automatic with Vercel)

### Alternative Deployment Options
- **Netlify**: Static export with `next export`
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

---

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://xeleratedtech.com
NEXT_PUBLIC_SITE_NAME="Xelerated Tech"

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=hello@xeleratedtech.com
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# CallMeBot WhatsApp contact-form notifications
CALLMEBOT_API_KEY=your_callmebot_api_key
CALLMEBOT_PHONE=+254115588218

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# CMS (Optional - for dynamic content)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

---

## Contributing

We welcome contributions to improve the Xelerated Tech website. Please follow these guidelines:

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   ```
5. **Commit with conventional commits**
   ```bash
   git commit -m "feat: add new portfolio item"
   ```
6. **Push and create pull request**

### Code Standards
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain accessibility standards
- Write meaningful commit messages
- Add comments for complex logic

---

## License

This project is proprietary software owned by Xelerated Tech. All rights reserved.

For licensing inquiries, please contact us at hello@xeleratedtech.com

---

## Contact

**Xelerated Tech - Your Digital Solutions Partner**

- **Website**: https://xeleratedtech.vercel.app
- **Email**: xeleratedtech@gmail.com
- **Phone**: +254 115 588 218
- **Location**: Nairobi, Kenya

### Connect With Us
- **LinkedIn**: [Xelerated Tech](https://linkedin.com/company/xelerated-tech)
- **Twitter**: [@XeleratedTech](https://twitter.com/xeleratedtech)
- **GitHub**: [Xelerated Tech](https://github.com/xelerated-tech)

---

**Built with ❤️ by Xelerated Tech Team**
