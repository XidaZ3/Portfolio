# Portfolio Section Title Scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce and normalize section title sizes across the portfolio.

**Architecture:** Keep the current Angular components and update only existing SCSS font-size clamps for shared section headings and related section title outliers.

**Tech Stack:** Angular 21, SCSS, Yarn.

---

## File Structure

- Modify: `src/styles.scss`
  - Reduce shared `.section__intro h2` title scale.
- Modify: `src/app/sections/contact-section.scss`
  - Reduce contact section H2 scale.
- Modify: `src/app/sections/case-studies-section.scss`
  - Reduce case card title scale.
- Modify: `src/app/sections/services-section.scss`
  - Reduce service card title scale.
- Modify: `src/app/sections/professional-snapshot-section.scss`
  - Reduce snapshot heading scale.

## Task 1: Reduce Section Title Scale

**Files:**
- Modify: `src/styles.scss`
- Modify: `src/app/sections/contact-section.scss`
- Modify: `src/app/sections/case-studies-section.scss`
- Modify: `src/app/sections/services-section.scss`
- Modify: `src/app/sections/professional-snapshot-section.scss`

- [ ] **Step 1: Reduce the shared section H2 scale**

In `src/styles.scss`, replace:

```scss
  font-size: clamp(2rem, 4vw, 4rem);
```

with:

```scss
  font-size: clamp(1.65rem, 2.7vw, 2.85rem);
```

- [ ] **Step 2: Reduce one-off title scales**

Apply these replacements:

```scss
/* src/app/sections/contact-section.scss */
font-size: clamp(1.8rem, 3vw, 3rem);

/* src/app/sections/case-studies-section.scss */
font-size: clamp(1.15rem, 1.8vw, 1.55rem);

/* src/app/sections/services-section.scss */
font-size: clamp(1.05rem, 1.45vw, 1.35rem);

/* src/app/sections/professional-snapshot-section.scss */
font-size: clamp(1.35rem, 1.8vw, 1.65rem);
```

- [ ] **Step 3: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit**

```bash
git add src/styles.scss src/app/sections/contact-section.scss src/app/sections/case-studies-section.scss src/app/sections/services-section.scss src/app/sections/professional-snapshot-section.scss
git commit -m "style: normalize section title scale"
```
