# Portfolio Hero Type Scale Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the portfolio hero headline and summary text size.

**Architecture:** Keep the existing Angular component structure and update only the hero section SCSS type scale.

**Tech Stack:** Angular 21, SCSS, Yarn.

---

## File Structure

- Modify: `src/app/sections/hero-section.scss`
  - Reduce H1 and summary `font-size` clamp values.

## Task 1: Reduce Hero Text Scale

**Files:**
- Modify: `src/app/sections/hero-section.scss`

- [ ] **Step 1: Update the H1 clamp**

Replace:

```scss
  font-size: clamp(3rem, 6.4vw, 6.35rem);
```

with:

```scss
  font-size: clamp(2.55rem, 5.2vw, 5.25rem);
```

- [ ] **Step 2: Update the summary clamp**

Replace:

```scss
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
```

with:

```scss
  font-size: clamp(1rem, 1.35vw, 1.16rem);
```

- [ ] **Step 3: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit the change**

```bash
git add src/app/sections/hero-section.scss
git commit -m "style: reduce hero text scale"
```

## Task 2: Final Verification

**Files:**
- Inspect: `src/app/sections/hero-section.scss`

- [ ] **Step 1: Confirm the new values**

Run:

```bash
rg -n "font-size: clamp\\(2.55rem|font-size: clamp\\(1rem" src/app/sections/hero-section.scss
```

Expected: both new clamp values appear.

- [ ] **Step 2: Run final verification**

Run:

```bash
yarn test --watch=false
yarn build
git status --short
```

Expected:

- Tests pass.
- Build succeeds.
- `git status --short` shows no uncommitted app changes.
