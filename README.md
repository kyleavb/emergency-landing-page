# Mitchell College — Landing Page

A scholastic-centric landing page for **Mitchell College** (New London, CT), built with modern web frameworks and ready for Vercel deployment.

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon system

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Git Integration

1. Push this repo to GitHub/GitLab/Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — click **Deploy**

## Project Structure

```
mitchell-college/
├── app/
│   ├── globals.css        # Global styles, fonts, animations
│   ├── layout.tsx         # Root layout with metadata/SEO
│   └── page.tsx           # Main page composing all sections
├── components/
│   ├── Navbar.tsx         # Fixed navigation with scroll effects
│   ├── Hero.tsx           # Full-screen hero with parallax
│   ├── Academics.tsx      # Academic divisions & programs
│   ├── Campus.tsx         # Campus features & virtual tour CTA
│   ├── StudentLife.tsx    # Athletics, arts & testimonials
│   ├── Admissions.tsx     # Application steps & CTA
│   ├── About.tsx          # History, values & timeline
│   └── Footer.tsx         # Site-wide footer with links
├── tailwind.config.ts     # Custom theme (colors, fonts, animations)
├── vercel.json            # Vercel deployment config
├── next.config.js
├── tsconfig.json
└── package.json
```

## Design Details

- **Typography**: Playfair Display (headings), Source Sans 3 (body), Cormorant Garamond (accents)
- **Color System**: Navy/gold institutional palette with Thames River blue accents
- **Animations**: Scroll-triggered reveals, parallax hero, floating elements, testimonial carousel
- **Responsive**: Fully responsive from mobile to desktop
- **SEO**: OpenGraph metadata, semantic HTML, accessible components
