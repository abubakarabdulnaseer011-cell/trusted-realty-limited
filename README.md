# TRUSTED REALTY LIMITED

Production-ready premium real estate website for TRUSTED REALTY LIMITED, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and deployment-friendly contact handling for Vercel.

## Overview

This project positions TRUSTED REALTY LIMITED as a premium Nigerian real estate brand focused on:

- residential property sales
- house rentals
- apartment leasing
- commercial property services
- property marketing and sourcing
- real estate advisory
- investment opportunities
- documentation support
- diaspora client support

Core markets covered in the site experience:

- Lagos
- Abuja
- Port Harcourt
- Enugu
- Kano State

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Zod
- Resend

## Pages Included

- `/` Home
- `/about`
- `/services`
- `/markets`
- `/properties`
- `/properties/[slug]`
- `/investors`
- `/contact`
- `/insights`

## Project Structure

```text
app/
  about/
  api/contact/
  contact/
  insights/
  investors/
  manifest.ts
  markets/
  properties/
  services/
  globals.css
  icon.svg
  layout.tsx
  not-found.tsx
  opengraph-image.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  layout/
  site/
  ui/
data/
  company.ts
  properties.ts
lib/
  format.ts
  inquiries.ts
  metadata.ts
  utils.ts
  validators.ts
public/
  images/
README.md
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## Quality Checks

Run the full local validation suite before shipping:

```bash
npm run lint
npm run typecheck
npm run build
```

To test the production build locally:

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file for local development when you want live email delivery or a correct public site URL:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_SITE_VERIFICATION=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

### Variable reference

- `NEXT_PUBLIC_SITE_URL`
  Sets the canonical public site URL used for metadata, Open Graph tags, sitemap links, and robots output. On production, set this to your final domain, for example `https://trustedrealtylimited.com`.

- `RESEND_API_KEY`
  Enables live email delivery through Resend from the contact endpoint.

- `GOOGLE_SITE_VERIFICATION`
  Optional Google Search Console verification token. When added, the app outputs the verification meta tag automatically so Google can confirm site ownership.

- `CONTACT_TO_EMAIL`
  The destination inbox that should receive website inquiries.

- `CONTACT_FROM_EMAIL`
  The verified sender address used by Resend, for example `inquiries@yourdomain.com`.

## Contact Form Behavior

The contact flow is already wired through `app/api/contact/route.ts`.

- If `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are present, submissions are sent as real emails.
- If those variables are missing, the form stays usable in preview mode and returns a success message instead of failing.
- Preview mode logs the captured inquiry payload on the server so the integration can be tested safely before live email is enabled.

## How to Enable Live Email Sending

1. Create a Resend account and generate an API key.
2. Verify the sending domain or sender email inside Resend.
3. Add the following environment variables locally and in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=hello@trustedrealtylimited.com
CONTACT_FROM_EMAIL=inquiries@yourdomain.com
```

4. Redeploy the site.

No further code changes are required for the existing inquiry flow.

## How to Replace Mock Property Data

All showcase listings live in:

```text
data/properties.ts
```

Each property record supports:

- `id`
- `slug`
- `title`
- `summary`
- `location`
- `city`
- `price`
- `priceQualifier`
- `status`
- `type`
- `category`
- `bedrooms`
- `bathrooms`
- `areaSqm`
- `images`
- `description`
- `amenities`
- `featured`
- `marketDescription`
- `coordinates`

To replace the mock inventory:

1. Update or replace the entries in `data/properties.ts`.
2. Keep each `slug` unique.
3. Point each property's `images` array to files in `public/images/` or another supported image path.
4. Rebuild the app so static property detail pages regenerate.

## How to Replace Placeholder Images

Current image assets live in:

```text
public/images/
```

To replace them:

1. Add new optimized images into `public/images/`.
2. Update the references in `data/properties.ts`, page sections, or shared components.
3. Keep filenames web-safe and descriptive.
4. Prefer large, high-quality landscape images for hero and listing presentation.

Recommended image priorities:

- premium residential exteriors
- refined interior living spaces
- apartment and penthouse photography
- elegant commercial spaces
- city-relevant market imagery

## How to Replace Brand or Company Content

Core brand and company content is centralized in:

```text
data/company.ts
```

Update this file to change:

- company name
- tagline
- contact details
- WhatsApp number
- mission and vision
- values
- leadership biographies
- market descriptions

The logo lockup is currently text-based and can be refined in:

```text
components/layout/logo.tsx
```

If an official logo asset becomes available, you can replace the text lockup with an image or SVG there.

## SEO and Metadata

The project already includes:

- per-page metadata
- Open Graph metadata
- Twitter card metadata
- organization, website, breadcrumb, and property structured data
- dynamic sitemap
- robots configuration
- web app manifest
- semantic headings and content structure
- route-level property metadata for detail pages

Key files:

```text
app/layout.tsx
lib/metadata.ts
app/opengraph-image.tsx
app/sitemap.ts
app/robots.ts
app/manifest.ts
```

## Google Indexing Notes

Google discovery is not instantaneous for a newly launched site. Google Search Central says crawling can take anywhere from a few days to a few weeks, and the supported ways to accelerate discovery are verifying the site in Search Console, submitting the sitemap, and requesting indexing for important URLs.

This project is now prepared for that workflow:

- the live canonical URL is `https://trusted-realty-limited.vercel.app`
- `robots.txt` points Google to `/sitemap.xml`
- the sitemap uses stable `lastmod` values instead of changing on every deploy
- Search Console verification can be enabled by setting `GOOGLE_SITE_VERIFICATION`

## Vercel Deployment

### Deploy through the Vercel dashboard

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the production environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
GOOGLE_SITE_VERIFICATION=your_search_console_token
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=hello@trustedrealtylimited.com
CONTACT_FROM_EMAIL=inquiries@yourdomain.com
```

4. Deploy.
5. Add your custom domain in Vercel and update `NEXT_PUBLIC_SITE_URL` to match it exactly.

### Deploy through the Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

When prompted:

- link the correct project
- confirm the build settings detected by Vercel
- add the required environment variables

## Production Readiness Notes

This project is prepared for immediate deployment with:

- a full multi-page premium marketing site
- dynamic property detail routing
- client-side property filtering
- reusable content and layout components
- responsive design across mobile and desktop
- server-side contact endpoint
- graceful email fallback behavior
- deployment-safe metadata and static generation

## Recommended Next Improvements

- connect the property inventory to a CMS or database
- add a live map integration for office and listing coordinates
- replace placeholder images with final branded photography
- add analytics and conversion tracking
- add a CMS-backed journal workflow
- add a proper testimonial management source
- add multilingual support if needed for broader market reach

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```
