# Hariharan P — Portfolio

A simple static portfolio repository for GitHub. The website files are at the repository root so `index.html` is easy to find.

## Files

- `index.html` — page markup, styles, and main JavaScript are kept together in this single file.
- `site-config.js` — project link configuration.
- `assets/` and `fonts/` — profile images, social card, and local web fonts.
- Resume PDF and favicon files — linked/downloadable site assets.
- `_headers` — response headers for hosts that support this file (such as Netlify).

## Preview

Open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

The three `assets/profile-*.webp` images are monogram placeholders. Replace them with the real portrait before calling the site ready. The full project package contains the photo-generation tool and pre-deploy safety check in `extras/tools/`.

The contact form is configured for Netlify Forms. A GitHub repository alone does not process form submissions. See the full package's `extras/FORM-TROUBLESHOOTING.md` for Netlify setup and delivery testing.

CSS and the main page JavaScript are inline in `index.html`; there are no separate stylesheet or main script files in this version.
