# Paul Antony — personal site

Modern, static personal site + security blog. Built with [Astro](https://astro.build),
deployed to GitHub Pages. Pure static output — no server, minimal attack surface.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Adding a blog post

Drop a markdown file in `src/content/blog/`:

```markdown
---
title: 'Your title'
description: 'One-line summary shown in listings and search results.'
pubDate: 2026-07-10
tags: ['security', 'leadership']
draft: false        # set true to hide from the site
---

Your content in **markdown**.
```

That's it — it appears on the home page, the `/blog` index, the RSS feed, and the sitemap
automatically.

## Editing your identity

All site-wide details (name, role, tagline, social links, email) live in one file:
`src/site.config.ts`. The About page copy is in `src/pages/about.astro`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. In the repo: **Settings → Pages → Source: GitHub Actions**.

- **User site** (`paulantony.github.io` repo): keep `base: '/'` in `astro.config.mjs`.
- **Project site** (any other repo name): set `base: '/<repo-name>/'`.
