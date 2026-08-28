# The Vin Diagram — Astro rebuild

A static rebuild of vinayiyengar.com, replacing WordPress. Same structure
(essay list, categories, monthly archives, About/Theses/Job Guide, search)
on a much simpler stack.

## Stack
- **Astro** — static site generator, content lives as Markdown files in the repo
- **Pagefind** — static, client-side search (no server, no third-party search index)
- **Plausible Analytics** — one script tag, no cookie banner needed (swap for
  Fathom or GA4 if you prefer — see `src/components/Analytics.astro`)
- Deploys to **Vercel** or **Netlify** for free, connected to a GitHub repo

## Local development
```
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/, also builds the search index
npm run preview    # serve the production build locally
```

## Structure
```
src/
  content/posts/*.md     — one file per essay (frontmatter: title, date, categories)
  content.config.ts       — schema for posts
  pages/
    index.astro           — homepage (essay list)
    posts/[...id].astro    — individual post pages
    category/[category].astro
    archive/[key].astro    — monthly archives, e.g. /archive/2026-06/
    about.astro, theses.astro, job-guide.astro
    rss.xml.js
  components/              — Header, Footer, PostCard, Sidebar, VennMark, Analytics
  layouts/BaseLayout.astro
  styles/global.css        — all design tokens (colors, fonts) live here
```

## Migrating your real content
I seeded 3 sample posts (with your real titles, dates, and categories) pulled
from the live site, but only the excerpt text — WordPress's public page
doesn't expose full post bodies to a page fetch. To bring over the rest:

1. **Get full content**: in WP admin, go to Tools → Export → All Content.
   This gives you an XML file with every post's full HTML body.
2. Either hand that export file to Claude Code and ask it to convert each
   `<item>` into a Markdown file in `src/content/posts/` (frontmatter:
   `title`, `date`, `categories`, `description`), or do it manually —
   you have ~23 posts total, so it's very doable by hand in an afternoon.
3. Fill in `about.astro`, `theses.astro`, and `job-guide.astro` with your
   real copy (currently placeholders).
4. Download and re-host any images referenced in your posts (WP stores
   them under `/wp-content/uploads/`) — put them in `public/images/` and
   update the paths.

## Search
Pagefind indexes whatever's inside `data-pagefind-body` (currently just the
post pages) at build time — nothing to configure, it just needs `npm run
build` to run once for the index to exist. It won't show results in `npm run
dev`, only after a build.

## Analytics
Sign up at plausible.io, add `vinayiyengar.com` as a site, and the snippet
in `Analytics.astro` will start reporting automatically once deployed (it's
gated to production so local dev traffic isn't counted).

## Deploying
1. Push this repo to GitHub.
2. Import it in Vercel (or Netlify) — it auto-detects Astro, no config needed.
3. Point `vinayiyengar.com` at the new deployment (update DNS/A record —
   Vercel/Netlify will walk you through it).
4. Update `site` in `astro.config.mjs` if the final domain differs.

## URL compatibility
Old WordPress URLs look like `/2026/06/04/request-for-startups-ai-rollup-edition/`.
This rebuild uses `/posts/<slug>/`. To avoid breaking inbound links/SEO,
add redirects at the host level (Vercel supports a `vercel.json` redirects
array, Netlify a `_redirects` file) mapping each old date-based URL to its
new `/posts/...` path — Claude Code can generate this list for you from the
WordPress export mentioned above.
