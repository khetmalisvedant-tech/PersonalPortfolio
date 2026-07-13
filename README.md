# Vedant S. Khetmalis — Portfolio

React + Vite + Tailwind CSS v4 + Framer Motion + GSAP + Three.js (React Three Fiber) + Lenis smooth scroll.

## Run locally
npm install
npm run dev

## Build
npm run build   # outputs to dist/

## Notes
- Replace `public/resume.pdf` with your real resume (Download Resume button links to it).
- Hero photo uses a generated placeholder avatar — swap the `src` in `src/sections/Hero.jsx` with your real photo.
- Contact form is validation-ready; wire real sending in `src/sections/Contact.jsx` by uncommenting the `emailjs.send(...)` call and adding your EmailJS service/template/public keys (`@emailjs/browser` is already installed).
- Edit all content (projects, skills, experience, socials, etc.) in `src/data/content.js` — one file drives the whole site.
