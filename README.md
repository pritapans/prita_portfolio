# Prita P. — Portfolio

A modern, animated personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/    Navbar, Hero, About, Skills, Projects, Achievements, LinkTree, Contact, Footer
  context/       ThemeContext.jsx (light/dark mode, system preference + localStorage)
  App.jsx        Page composition, loading screen, scroll progress bar
  index.css      Tailwind layers + design tokens (glass, gradients, grid background)
```

## Notes

- Light/dark mode auto-detects system preference on first load, remembers your choice afterward, and toggles instantly via the sun/moon icon in the navbar.
- The contact form is frontend-only: submitting opens the visitor's email client with the message pre-filled — no backend or data storage.
- Replace the placeholder links in `src/components/LinkTree.jsx` (Design Portfolio, Resume PDF) with real URLs/files when ready.
- All content (skills, projects, achievements, contact details) is sourced directly from Prita's resume and existing portfolio — nothing invented.
