# Portfolio Hero Type Scale Design

## Context

After switching the portfolio to Poppins, the hero headline feels too large. The current H1 uses `clamp(3rem, 6.4vw, 6.35rem)`, which creates a dramatic first impression.

## Goal

Reduce the hero text size so the first viewport feels calmer and more professional while keeping the existing layout, copy, and structure.

## Design

Update only `src/app/sections/hero-section.scss`.

Reduce the hero H1 from `clamp(3rem, 6.4vw, 6.35rem)` to `clamp(2.55rem, 5.2vw, 5.25rem)`.

Reduce the hero summary from `clamp(1.05rem, 1.7vw, 1.28rem)` to `clamp(1rem, 1.35vw, 1.16rem)`.

Keep line heights, layout, and responsive breakpoints unchanged unless verification shows overflow.

## Verification

- Angular tests pass.
- Angular build succeeds.
- Hero remains readable on desktop and mobile.
