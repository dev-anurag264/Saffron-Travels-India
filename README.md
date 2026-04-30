# 🌿 Saffron Trails India — Premium Travel Website

A production-grade, fully responsive travel website for **Saffron Trails India**, built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Tech Stack

| Tech | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **Framer Motion 11** | Animations & transitions |
| **React Router v6** | Client-side routing |
| **Lucide React** | Icon system |

---

## 📁 Folder Structure

```
saffron-trails/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedCounter.jsx     # Scroll-triggered number counters
│   │   │   ├── DestinationCard.jsx     # Reusable destination card
│   │   │   ├── FloatingButtons.jsx     # WhatsApp + Back-to-top
│   │   │   ├── PackageCard.jsx         # Reusable package card
│   │   │   ├── PageTransition.jsx      # Route-level fade animations
│   │   │   ├── ScrollToTop.jsx         # Auto scroll on route change
│   │   │   └── SectionHeader.jsx       # Animated section headings
│   │   ├── layout/
│   │   │   ├── Footer.jsx              # Full footer with newsletter
│   │   │   ├── Navbar.jsx              # Sticky responsive navbar
│   │   │   └── OfferBanner.jsx         # Dismissible offer strip
│   │   └── sections/
│   │       ├── CTABanner.jsx           # Full-width CTA section
│   │       ├── DestinationMarquee.jsx  # Scrolling destination strip
│   │       ├── FeaturedDestinations.jsx
│   │       ├── HeroSection.jsx         # Full-screen hero with search
│   │       ├── PopularPackages.jsx
│   │       ├── StatsSection.jsx        # Animated stats counters
│   │       ├── Testimonials.jsx        # Interactive testimonial slider
│   │       ├── TravelInspiration.jsx   # Instagram-style mosaic gallery
│   │       ├── TripTypeGrid.jsx        # Trip category grid
│   │       └── WhyChooseUs.jsx
│   ├── data/
│   │   ├── destinations.js             # All destination data
│   │   ├── packages.js                 # All package data + itineraries
│   │   └── testimonials.js             # Reviews, team, stats
│   ├── hooks/
│   │   └── useScrollAnimation.js       # useInView + useScrollY hooks
│   ├── pages/
│   │   ├── AboutPage.jsx               # Company story, team, timeline
│   │   ├── ContactPage.jsx             # Form + map + contact info
│   │   ├── DestinationsPage.jsx        # Filter + search + season guide
│   │   ├── HomePage.jsx                # Assembles all homepage sections
│   │   ├── NotFoundPage.jsx            # 404 page
│   │   └── PackagesPage.jsx            # Packages + modal itinerary
│   ├── utils/
│   │   └── helpers.js                  # formatINR, truncate, debounce
│   ├── App.jsx                         # Router + global layout
│   ├── index.css                       # Tailwind + custom CSS
│   └── main.jsx                        # React DOM entry point
├── index.html                          # SEO meta tags + Google Fonts
├── tailwind.config.js                  # Custom colors, fonts, animations
├── vite.config.js
├── vercel.json                         # Vercel SPA routing + caching
└── package.json
```

---

## ⚡ Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/saffron-trails-india.git
cd saffron-trails-india

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

The site will be live at `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to `/dist`. Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# For production
vercel --prod
```

### Option B — GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite — click **Deploy**

The included `vercel.json` handles SPA routing so all routes work correctly on refresh.

### Option C — Netlify

```bash
# Build
npm run build

# Deploy dist/ folder via Netlify CLI or drag-and-drop at app.netlify.com
```

Add a `_redirects` file in `public/`:
```
/* /index.html 200
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `saffron-500` | `#f07d00` | Primary / CTAs |
| `earth-500` | `#9a6340` | Body text |
| `charcoal` | `#1a1a2e` | Dark backgrounds |
| `cream` | `#fdf8f3` | Page backgrounds |
| `jade-500` | `#10b981` | Inclusions / success |

### Typography
| Font | Weight | Usage |
|------|--------|-------|
| Cormorant Garamond | 300–700 | Display headings (`font-display`) |
| Playfair Display | 400–600 | Accent text (`font-accent`) |
| DM Sans | 300–600 | Body + UI (`font-body`) |

### Key Tailwind Utilities
```css
.btn-primary     /* Saffron CTA button */
.btn-secondary   /* Outlined button */
.btn-ghost       /* Transparent button (for dark BGs) */
.glass           /* Glassmorphism panel */
.glass-dark      /* Dark glass panel */
.glass-light     /* Light glass panel */
.card-hover      /* Lift + shadow on hover */
.section-pad     /* Consistent section padding */
.container-custom /* Max-width container */
.text-gradient-saffron /* Gradient text */
```

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Homepage | Hero, stats, destinations, trip types, packages, gallery, testimonials, CTA |
| `/destinations` | Destinations | Filter + search, season guide, 8 destinations |
| `/packages` | Packages | Filter, expandable cards, full-screen modal with itinerary |
| `/about` | About Us | Story, mission, timeline, values, team |
| `/contact` | Contact | Validated form, map embed, contact info |
| `*` | 404 | Branded not-found page |

---

## ✅ Features Checklist

- [x] Fully responsive — mobile-first design
- [x] Sticky navbar with transparent → solid scroll transition
- [x] Mobile hamburger drawer menu
- [x] Hero section with glassmorphism search widget
- [x] Animated destination marquee strip
- [x] Scroll-triggered animated counters
- [x] Destination filter + live search
- [x] Package filter + full-screen modal with day-by-day itinerary
- [x] Interactive testimonial slider with thumbnail navigation
- [x] Instagram-style mosaic gallery
- [x] Trip type category grid
- [x] Contact form with full validation
- [x] Google Maps embed
- [x] Dismissible seasonal offer banner
- [x] WhatsApp floating button
- [x] Back-to-top button
- [x] Page transitions (Framer Motion)
- [x] 404 Not Found page
- [x] SEO meta tags
- [x] Vercel deployment config

---

## 🔧 Customisation

### Update Company Info
Edit contact details in:
- `src/components/layout/Footer.jsx`
- `src/pages/ContactPage.jsx`
- `src/components/common/FloatingButtons.jsx` (WhatsApp number)

### Add/Edit Destinations
Edit `src/data/destinations.js` — each destination object supports:
```js
{
  id, name, tagline, state, image, description,
  priceFrom, priceTo, duration, rating, reviews,
  category[], highlights[], bestTime, badge
}
```

### Add/Edit Packages
Edit `src/data/packages.js` — supports full itinerary arrays:
```js
{
  id, name, destination, duration, price, originalPrice,
  image, category[], rating, reviews, groupSize,
  highlights[], inclusions[], exclusions[],
  itinerary[{ day, title, desc }],
  badge, isFeatured
}
```

---

## 📜 License

MIT — free to use, modify, and deploy commercially.

---

*Built with ❤️ for Saffron Trails India — where every journey tells a story.*
