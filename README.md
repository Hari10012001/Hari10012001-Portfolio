# Hariharan P — Java Full Stack Developer Portfolio

A responsive, recruiter-focused portfolio for **Hariharan P**, Java Full Stack Developer based in Chennai, India. Built with clean, accessible semantic HTML5, modern CSS3 (custom properties, responsive grid, dark/light themes), and vanilla JavaScript.

## Featured Projects

1. **Smart Blood Bank Management System** — Healthcare platform for blood bank inventory tracking, donor registration, and emergency requests via Spring Boot REST APIs and MySQL.
2. **AI-Powered Expense Analyzer** — Financial document parsing pipeline extracting expense records from PDFs/text with 90%+ accuracy and AI-driven spending trend analysis.
3. **WarrantyWise** — Product warranty and asset management platform tracking purchase records, invoice metadata, and expiry alerts.
4. **FoundIt** — Community lost-and-found platform with categorical filtering, status tracking, and verified claim workflows.
5. **VolunteerLink** — Community volunteering portal coordinating volunteer registration, event scheduling, and organizer rosters.
6. **Ride Rent** — Vehicle rental booking system with date-based availability validation, transactional inventory integrity, and reservation management.

## Project Structure

```text
├── index.html                                        # Complete page markup, styles, and client-side logic
├── site-config.js                                    # Project link configuration (GitHub repos & live demos)
├── robots.txt                                        # Search engine crawler directives
├── _headers                                          # Security and caching headers for Netlify
├── Hariharan_P_Java_Full_Stack_Developer_Resume.pdf  # Downloadable resume
├── favicon.ico / favicon.svg / apple-touch-icon.png  # Favicon assets
├── assets/
│   ├── og-image.png                                  # Social preview banner (1200x630)
│   ├── profile-360.webp                              # Responsive portrait image (360px)
│   ├── profile-540.webp                              # Responsive portrait image (540px)
│   └── profile-720.webp                              # Responsive portrait image (720px)
└── fonts/
    ├── syne-latin-wght-normal.woff2                  # Syne variable web font
    ├── dm-sans-latin-wght-normal.woff2               # DM Sans variable web font
    └── OFL-NOTICE.txt                                # Open Font License notice
```

## Adding Project Links

Project links are centrally managed in `site-config.js`:
- Each project card hides its link buttons by default when URLs are left empty (`""`).
- Paste verified `https://` URLs for any repository (`https://github.com/<owner>/<repo>`) or live demo, and the corresponding button will automatically render.

## Local Preview

To preview the website locally, open a terminal in the project directory and run:

```sh
python -m http.server 8000
```

Then navigate to `http://localhost:8000` in your web browser.

## Key Features

- **Responsive Grid**: 3-column layout on desktop (>1024px), 2-column on tablet (641px–1024px), and 1-column on mobile (≤640px).
- **Dark / Light Theme**: Instant toggle with `localStorage` persistence, contrast-verified design tokens, and smooth transitions.
- **Accessibility**: Semantic HTML5 landmarks, ARIA labels, skip-to-content link, keyboard navigation, and full `prefers-reduced-motion` support.
- **Performance**: Preloaded self-hosted WOFF2 fonts with `font-display: swap`, responsive WebP images with `srcset` and `fetchpriority="high"`.
- **Form Handling**: Configured for Netlify Forms with client-side validation, honeypot spam protection, and a direct `mailto:` fallback.
