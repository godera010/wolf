# Gemini Context File

This file serves as a context anchor for the Gemini AI to understand the RoadWolf project.

## Project Identity
**Name:** RoadWolf (Coach/Bus Booking App)
**Stack:** Vite, React, TypeScript, Tailwind CSS, Shadcn UI.

## Critical Paths
- **Entry:** `src/main.tsx` -> `src/app/App.tsx`
- **Routing:** Defined in `src/app/App.tsx` (assumed) or `main.tsx` using `react-router-dom`.
- **Styles:** `src/index.css` (Tailwind).

## Coding Conventions
1.  **Components:** Use Functional Components with Hooks.
2.  **Typing:** Strict TypeScript usage. Define interfaces for props and state.
3.  **Styling:** Prefer Tailwind CSS utility classes. Use `cn()` utility (clsx + tailwind-merge) for conditional classes.
4.  **UI Library:** Use components from `src/app/components/ui/` whenever possible. These are accessible Radix UI wrappers.
5.  **Imports:** Use the `@/` alias for imports from `src/` (e.g., `import { Button } from "@/app/components/ui/button"`).

## Task Context
The project involves building a polished, responsive coach booking interface. 
Key pages include Home (Search), Routes, Seat Selection, and Booking Confirmation.
The `src/imports` folder contains reference implementations or raw exports that may need to be integrated or refactored into the main `src/app` structure.
