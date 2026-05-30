## Goal

A premium, dark-themed "Digital Cosmos" portfolio for Kashish — futuristic, fluid, recruiter-friendly, with all content sourced from the uploaded resume and an editable config file for easy updates.

## Content (from resume + your answers)

- Name: Kashish, B.Tech CSE, JSS Academy of Technical Education, Noida (Sept 2023 – May 2027), CGPA 7.17
- Email: kashish860458@gmail.com · Phone: +91 8604585161 · Location: Noida
- GitHub: github.com/krutzia · LinkedIn: linkedin.com/in/krutzia · LeetCode: leetcode.com/u/krutzia
- Projects (with live demos): ResuMatch, FitTrack, Silo Study AI (all URLs wired in)
- Skills: full list across Languages / Frontend / Backend / Databases / Tools / Libraries
- Certifications: AWS Cloud Practitioner Essentials, AWS AI Practitioner Challenge
- Achievement: 450+ LeetCode problems solved
- Uploaded `Kashish_Resume.pdf` bundled and served from `/resume.pdf` for the Resume button

## Architecture

Single editable source of truth: `src/config/portfolio.ts` — exports typed objects for `profile`, `socials`, `roles[]`, `skills` (grouped), `projects[]`, `achievements[]`, `certifications[]`. Every section reads from this file so updates are one-place edits.

Routes (TanStack Start, file-based):
- `/` — single long page with all sections (hero, about, skills, projects, achievements, leetcode, contact) and smooth in-page scroll
- Per-section `head()` meta on `/` only; root layout untouched apart from font + cursor providers

Component layout:
```
src/
  config/portfolio.ts          ← edit this to update content
  routes/index.tsx             ← assembles sections
  components/
    layout/Navbar.tsx          ← logo + section links + AnimationMode toggle
    layout/ScrollProgress.tsx
    layout/CustomCursor.tsx
    fx/ParticleField.tsx       ← background depth particles
    fx/MagneticButton.tsx
    fx/Reveal.tsx              ← motion wrapper that respects AnimationMode
    sections/Hero.tsx          ← name + role rotator + 4 CTAs
    sections/About.tsx         ← visual story (timeline cards, not paragraphs)
    sections/SkillConstellation.tsx  ← signature interaction
    sections/Projects.tsx      ← immersive cards with hover expansion
    sections/Achievements.tsx  ← animated counters (IntersectionObserver)
    sections/LeetCode.tsx      ← coding journey viz
    sections/Contact.tsx       ← animated form + socials
  context/AnimationModeContext.tsx
  hooks/useCountUp.ts
public/resume.pdf              ← uploaded PDF
```

## Animation Mode system

Context provider with three modes persisted to `localStorage`:
- Minimal — fade-in only, no parallax, no particles, instant transitions (recruiter-friendly default fallback when `prefers-reduced-motion`)
- Balanced (default) — smooth transitions, floating elements, hover depth, light particles
- Cinematic — parallax layers, animated gradients, denser particles, cursor-reactive constellation, magnetic buttons

Navbar exposes a 3-state segmented toggle. Every motion component reads the mode and scales its effects (duration, particle count, parallax intensity) accordingly.

## Signature interaction — Skill Constellation

Canvas-based starfield where each skill is a node positioned in a soft galaxy layout, grouped by category color. Lines connect skills within the same category. On cursor movement:
- Nearby nodes brighten and gently drift toward the cursor (Balanced/Cinematic)
- Hovering a node shows a glass tooltip with name + category
- Click pulses the node and highlights its category cluster
In Minimal mode, renders as a static categorized grid with hover glow only.

## Design system

- Dark-first palette in `src/styles.css` using oklch: deep space background, soft indigo/violet primaries, cosmic cyan accent, glassmorphism surface tokens (`--glass-bg`, `--glass-border`), gradient tokens for hero/section backdrops
- Typography: Space Grotesk (display) + Inter (body)
- Reusable utilities: `.glass`, `.gradient-text`, `.cosmic-bg`, magnetic & reveal animation keyframes

## Sections detail

1. Hero — full-viewport, large "Kashish" with gradient + subtle letter animation, rotating role text (Framer Motion AnimatePresence), animated intro line, particle backdrop with depth, 4 magnetic CTA buttons (Resume → `/resume.pdf`, GitHub, LinkedIn, Contact → scroll to form)
2. About — visual story: 3 floating glass cards (Student · JSSATE Noida · Passion for scalable apps · Strong problem-solving) with subtle parallax, no wall of text
3. Skills — Constellation (signature)
4. Projects — 3 immersive cards (ResuMatch, FitTrack, Silo Study AI) with hover expansion revealing bullets and tech chips, Live Demo + GitHub buttons
5. Achievements — animated counters: 450+ LeetCode, 2 AWS certs, current CGPA; trigger on viewport entry
6. LeetCode — coding journey viz: animated progress arcs + streak-style dot grid + "View LeetCode" CTA
7. Contact — glass form (name/email/message) with focus animations, plus email/GitHub/LinkedIn quick links. Form is presentation-only (mailto fallback) since no backend is requested

## Special effects

Scroll progress bar at top · custom cursor (Balanced/Cinematic) · magnetic buttons · `Reveal` wrapper for scroll fades · animated gradient blobs in hero/contact · smooth scroll via CSS

## Out of scope

- No backend (no Lovable Cloud, no DB) — contact form uses mailto
- No CMS — config file is the edit surface
- No light theme toggle (dark-first per brief)

## What gets shipped this turn

All files above created, resume PDF copied into `public/`, placeholder `src/routes/index.tsx` replaced, page renders end-to-end on first build.
