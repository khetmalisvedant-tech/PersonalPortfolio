# 🚀 Vedant S. Khetmalis — Portfolio

> A personal portfolio site with an animated 3D hero, smooth scroll, and interactive project showcase — built to feel less like a static page and more like an experience.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](YOUR_LIVE_URL_HERE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

🔗 **Live site:** 

 --> ved-kportfolio.netlify.app/

---

## ✨ Features

- **3D animated hero** — built with Three.js via React Three Fiber
- **Buttery smooth scrolling** — powered by Lenis
- **Motion-driven UI** — Framer Motion + GSAP for section transitions and micro-interactions
- **Fully data-driven content** — every section (projects, skills, experience, socials) pulls from a single `src/data/content.js` file, so the site can be updated without touching component code
- **Working contact form** — validation-ready, EmailJS integration included
- **Fast dev/build pipeline** — Vite + Tailwind CSS v4

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion, GSAP |
| 3D Graphics | Three.js (React Three Fiber) |
| Scroll | Lenis |
| Forms | EmailJS |

## 📦 Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
git clone https://github.com/khetmalisvedant-tech/PersonalPortfolio.git
cd PersonalPortfolio
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build   # outputs to dist/
```

## ⚙️ Customization

This project is designed to be forked and re-skinned quickly:

- **Content:** edit `src/data/content.js` — projects, skills, experience, and social links all live here
- **Resume:** replace `public/resume.pdf` with your own (the Download Resume button links to it)
- **Hero photo:** swap the placeholder `src` in `src/sections/Hero.jsx` for your own image
- **Contact form:** uncomment the `emailjs.send(...)` call in `src/sections/Contact.jsx` and add your EmailJS service/template/public keys

## 🚀 Deployment

Deployed on **[Netlify / Vercel / Cloudflare Pages — pick one]**. To deploy your own copy:

```bash
npm run build
```
Then upload the `dist/` folder to your host of choice, or connect the repo directly for auto-deploys on push.

## 📄 License

MIT — free to use, modify, and adapt for your own portfolio.

---

**Built by [Vedant S. Khetmalis](https://github.com/khetmalisvedant-tech)** — full-stack engineer and AI developer.
