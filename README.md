# BlueVision Realtors

Website for BlueVision Realtors LTD, a Kenyan land specialist that helps local buyers and Kenyans abroad find and buy verified land with no stress.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Render](https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, featured land and why choose BlueVision |
| `/listings` | Verified land listings with type and location filters |
| `/services` | Land search, verification, diaspora purchases and more |
| `/about` | Company story and team |
| `/blog` | Articles and guides |
| `/contact` | Contact form (sent through EmailJS) |

## Tech

- React 18 + TypeScript + Vite
- Tailwind CSS
- React Router, TanStack Query, Zustand
- EmailJS for the contact form
- Express server (`server.js`) to serve the built site with single-page routing

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm start` | Serve `dist/` with Express (used in production) |

## Configuration

Optional Vite variables:

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for the contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Deployment

The site deploys to Render using `render.yaml`: it runs `npm install && npm run build` and then serves the site with `node server.js`.

## Author

**Felix Kariuki** - [@101feliki](https://github.com/101feliki)
