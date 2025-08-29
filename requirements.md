# Swiftography - Requirements

## Overview
Swiftography is a Taylor Swift tribute website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.  
It is a pure frontend project with no backend or database.  

The goal is to provide an interactive fan tribute site featuring Taylor Swift’s biography, discography, and album-themed color palettes.

---

## Tech Stack
- **Frontend Framework**: Next.js (latest, App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting/Deployment**: Vercel (production-ready static site)

---

## Core Features
1. **Navigation**
   - Responsive **Navbar** (with links to all pages)
   - Footer with social/media links

2. **Theme Switching**
   - Changeable themes inspired by **Taylor Swift albums** (up to the newest upcoming release)
   - Each theme has **light and dark variants**

3. **Home Page**
   - Hero Section (background image, short intro)
   - About Taylor Swift (brief, with “Read More” → navigates to Taylor Swift page)
   - About Swiftography (site purpose/tribute explanation)
   - Contact section (simple form or email link)

4. **Taylor Swift Page**
   - Hero Section
   - Biography (detailed text, images)
   - Discography (grid/list of all albums, each album is clickable → opens Album Detail page)
   - Gallery (images from different eras/albums)

5. **Album Detail Page**
   - Title and cover art
   - Tracklist (optional static data)
   - Theme preview (based on that album’s palette)
   - Back navigation to Discography

---

## Pages
- `/` → Home (Hero, About Taylor, About Swiftography, Contact)
- `/taylor-swift` → Full biography, discography, gallery
- `/album/[id]` → Individual album detail page

---

## Components
- **Layout Components**
  - Navbar
  - Footer
- **UI Components**
  - ThemeSwitcher (dropdown or toggle for album themes)
  - HeroSection
  - AboutSection
  - ContactSection
  - AlbumCard (for discography grid)
  - GalleryGrid (for photos)

---

## Deployment Goal
- Deploy on **Vercel** as a production-ready static site
- Optimized for performance (image optimization via Next.js)
- Mobile-first responsive design

---

## Notes
- Include all **Taylor Swift albums** (debut → upcoming album).
- Each theme should be visually distinct and inspired by the album’s branding.
- Keep UI **clean, modern, and elegant** (minimal clutter, smooth animations).
