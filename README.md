# Fahad's Travel Agency

A responsive travel agency website for exploring destinations and searching sample travel services. The homepage brings visa assistance, flight tickets, hotel stays and car rentals together with destination highlights, testimonials and contact information.

The search experience provides service-specific tabs and filters over local sample data. This is a front-end demonstration: searches do not connect to booking providers, and the project has no backend or external API.

## Links

- [Live website](https://travel-website-rosy-iota.vercel.app/)
- [GitHub repository](https://github.com/Fahad77-create/Travel-website/)

## Features

- Responsive homepage with navigation, hero, services, destinations, statistics, testimonials and contact sections
- Tabbed search for visas, flights, hotels and car rentals, with results filtered from local sample data
- Contact form with client-side validation
- Scroll reveals, counters, hero and hover animations, with reduced-motion support
- Shared UI components for consistent page sections and search results

## Technology stack

- **Next.js 14** — App Router and application structure
- **React 18** — page and component rendering
- **Tailwind CSS 3** — utility-based styling, alongside global CSS
- **GSAP 3** — interface animations and ScrollTrigger effects
- **lucide-react** — icons
- **Next Font** — Bricolage Grotesque and DM Sans

## Project structure

```text
app/                  App Router page, root layout and global styles
components/
  layout/             Navbar and footer
  sections/           Homepage sections and destination cards
  search/             Search tabs, form and result components
  ui/                 Shared layout, form and animation components
data/                 Site content and local search data
hooks/                GSAP lifecycle and reduced-motion handling
lib/                  GSAP and ScrollTrigger registration
```

Site copy and destination content are defined in `data/site.js`. Search fields and sample visa, flight, hotel and car results are defined in `data/search.js`.
