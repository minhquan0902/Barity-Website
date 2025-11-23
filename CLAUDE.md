# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based website for Barity Capital, a trading firm specializing in high-frequency trading, arbitrage trading, and ICO investment. The site is built with React 17, Next.js 12, and uses SCSS for styling with a dark theme design.

## Build & Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Build and export static site
npm run export

# Deploy to production (Firebase)
npm run deploy-prod
```

## Architecture Overview

### Page Structure
- **Pages**: Located in `src/pages/`, following Next.js file-based routing
  - Each page imports and composes multiple components
  - Pages wrap content with either `Dark.jsx` or `Light.jsx` layout
  - Example: `src/pages/index.jsx` is the homepage

### Component Organization
- **Components**: Located in `src/components/`
  - Self-contained, reusable UI components (e.g., `Navbar`, `Footer`, `Contact-form`)
  - Each component typically has its own directory with `.jsx` file
  - Components receive data via props or import from JSON data files

### Data-Driven Content
- **Data Files**: Static content is stored in `src/data/` as JSON files
  - `src/data/sections/` contains section-specific content (intro, features, team, etc.)
  - Components import JSON directly to render dynamic content
  - Example: `src/data/sections/intro.json` contains homepage slider data

### Layouts
- **Theme Layouts**: `src/layouts/Dark.jsx` and `src/layouts/Light.jsx`
  - Wrapper components that set theme-specific CSS files
  - Set `window.theme` variable for client-side theme detection
  - Support optional skin variants via props (`useSkin`, `mobileappstyle`)

### Common Utilities
- **Common Functions**: Located in `src/common/`
  - DOM manipulation utilities (parallax, animations, isotope grid)
  - Navbar scroll effects, accordion handlers, loading effects
  - Examples: `scrollToTop.js`, `fadeWhenScroll.js`, `initIsotope.js`

### Styling
- **Global Styles**: `src/styles/main.scss` is the main SCSS entry point
- **Theme CSS**: Pre-compiled CSS files in `public/css/`
  - `dark.css` / `light.css` for base themes
  - Additional skin files: `arch-skin-dark.css`, `mobile-app-dark.css`

### App Initialization
- **`_app.js`**: Global app wrapper that includes:
  - Custom cursor component
  - Loading screen
  - Scroll-to-top button
  - External JS libraries (WOW.js, Splitting.js, simpleParallax, Isotope)
  - Sets site title and favicon

## Key Dependencies

- **Form Handling**: Formik for forms, emailjs for contact form submissions
- **UI Libraries**: Material-UI (@mui/material), react-hot-toast for notifications
- **Animations**: WOW.js, Splitting.js, react-visibility-sensor
- **Sliders/Carousals**: react-slick, Swiper
- **Other**: react-scroll, react-countup, typewriter-effect

## Environment Variables

- `.env`: Base environment file (contains `NEXT_PUBLIC_API_URL`)
- `.env.development`: Development-specific config
- `.env.production`: Production-specific config
- EmailJS credentials are hardcoded in `Contact-form` component (consider moving to env)

## Firebase Deployment

- Configured for Firebase Hosting
- Production deployment uses `env-cmd` to load `.env.production`
- Firebase project: `barity-prod` (configured in `.firebaserc`)
- Backend region: `us-central1`

## Development Notes

- Next.js config enables trailing slashes on routes (`trailingSlash: true`)
- React Strict Mode is enabled
- ESLint runs during builds (not ignored)
- Build activity indicator is disabled in dev mode
- TypeScript is available but project primarily uses JSX
