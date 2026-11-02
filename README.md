# Fahad's Travel Agency Website

A modern, fully responsive travel agency website built with Next.js (App Router), Tailwind CSS and GSAP. It offers four services: visa services, flight ticket booking, hotel booking and car rental. All data is mock data and no backend or external API is required.

## Links

- Live website: add your Vercel URL here
- GitHub repository: add your repository URL here

## Tech stack

- Next.js 14 (App Router)
- Tailwind CSS 3
- GSAP 3 with ScrollTrigger
- lucide-react icons

## Features

- Responsive layout for mobile, tablet and desktop
- Tabbed search for visas, flights, hotels and cars, driven by one config file and filtered against mock data
- Service cards, popular destinations, testimonials, validated contact form and footer
- GSAP animations: hero timeline, floating cards, scroll reveals, animated counters and hover effects
- Animations respect the reduced motion preference

## Getting started

Requirements: Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Production build:

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push the project to a GitHub repository.
2. Import the repository at https://vercel.com/new.
3. Keep the default Next.js settings and deploy. No environment variables are needed.

## Project structure

```
app/                  Layout, global styles and the home page
components/
  layout/             Navbar, Footer
  sections/           Hero, SearchSection, Services, Destinations, DestinationCard,
                      Stats, Testimonials, Contact, ContactForm
  search/             Tabs, SearchForm, ResultsList, ResultCard
  ui/                 Button, Container, Field, SectionHeading, Reveal, Counter, HoverCard
data/                 Site content and mock search data
hooks/                useGsap, a GSAP context hook with cleanup and reduced motion support
lib/                  GSAP and ScrollTrigger registration
```

## Reusable building blocks

- Reveal fades and slides its content in on scroll. Use the stagger prop to animate direct children one after another.
- Counter counts up to a number when it scrolls into view.
- HoverCard lifts a card and zooms any child marked with data-zoom.
- Field renders an input, select or textarea with a label and error message.
- SearchForm, ResultsList and ResultCard are generic. Adding a new searchable service only needs a new entry in data/search.js.

## Customising

- Edit text, destinations and testimonials in data/site.js.
- Edit search fields and mock results in data/search.js.
- Edit colours and fonts in tailwind.config.js and app/layout.js.
