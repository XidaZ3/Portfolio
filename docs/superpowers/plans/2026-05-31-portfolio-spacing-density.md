# Portfolio Spacing Density Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce excessive negative space across the portfolio layout.

**Architecture:** Keep the existing Angular components and update only SCSS spacing values for the hero, shared sections, and repeated cards.

**Tech Stack:** Angular 21, SCSS, Yarn.

---

## File Structure

- Modify: `src/app/sections/hero-section.scss`
  - Remove forced hero viewport height and reduce hero padding/gaps.
- Modify: `src/app/app.scss`
  - Reduce global `main` section gap.
- Modify: `src/styles.scss`
  - Reduce shared section intro and split-layout gaps.
- Modify: `src/app/sections/case-studies-section.scss`
  - Tighten case card spacing.
- Modify: `src/app/sections/contact-section.scss`
  - Tighten contact section padding and column gap.

## Task 1: Tighten Layout Spacing

**Files:**
- Modify: `src/app/sections/hero-section.scss`
- Modify: `src/app/app.scss`
- Modify: `src/styles.scss`
- Modify: `src/app/sections/case-studies-section.scss`
- Modify: `src/app/sections/contact-section.scss`

- [ ] **Step 1: Apply spacing reductions**

Use the approved design values:

```scss
/* src/app/sections/hero-section.scss */
gap: clamp(1.5rem, 4vw, 4rem);
min-height: auto;
padding: clamp(2.25rem, 5vw, 4rem) 0 clamp(1.5rem, 3vw, 2.25rem);

/* src/app/app.scss */
gap: clamp(2.5rem, 5vw, 4.25rem);

/* src/styles.scss */
gap: clamp(1.25rem, 3vw, 3rem);
margin-bottom: 1rem;

/* src/app/sections/case-studies-section.scss */
gap: clamp(1.25rem, 3vw, 2.25rem);
padding: clamp(1.1rem, 2vw, 1.65rem);

/* src/app/sections/contact-section.scss */
gap: clamp(1.25rem, 3vw, 3rem);
padding: clamp(1.5rem, 4vw, 2.35rem);
```

- [ ] **Step 2: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/hero-section.scss src/app/app.scss src/styles.scss src/app/sections/case-studies-section.scss src/app/sections/contact-section.scss
git commit -m "style: tighten portfolio spacing"
```
