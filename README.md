# Babashaheed Micro Federation — Website

Static website for Babashaheed Micro Federation, a Section 8 (not-for-profit)
company carrying on microfinance activities. Built with Next.js 14 and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is written to `out/` and can be hosted on any static host
(Vercel, Netlify, Hostinger, cPanel).

## Updating company details

All company details (CIN, address, phone, WhatsApp, email, grievance officer,
directors) live in `src/config/site.ts`. Fields marked `TODO` show
"To be updated" on the site until filled in. Programmes are in
`src/config/programmes.ts`.
