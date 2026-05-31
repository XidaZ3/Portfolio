# Portfolio Poppins Font Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Switch the portfolio typography from Inter to Poppins using Google Fonts.

**Architecture:** Keep the existing Angular app and styling structure. Add Google Fonts resource hints and the Poppins stylesheet to `src/index.html`, then update the global font stack in `src/styles.scss`.

**Tech Stack:** Angular 21, HTML, SCSS, Google Fonts, Yarn.

---

## File Structure

- Modify: `src/index.html`
  - Add Google Fonts preconnect links and a Poppins stylesheet link in the document head.
- Modify: `src/styles.scss`
  - Replace the global `Inter` font family with `Poppins`, keeping the current system fallback stack.

## Task 1: Load Poppins And Apply It Globally

**Files:**
- Modify: `src/index.html`
- Modify: `src/styles.scss`

- [ ] **Step 1: Add Google Fonts links**

In `src/index.html`, add these links after the viewport meta tag and before the favicon link:

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
```

- [ ] **Step 2: Update the global font stack**

In `src/styles.scss`, replace the current root font stack with:

```scss
  font-family:
    Poppins,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
```

- [ ] **Step 3: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit the font change**

```bash
git add src/index.html src/styles.scss
git commit -m "style: switch portfolio font to Poppins"
```

## Task 2: Final Verification

**Files:**
- Inspect: `src/index.html`
- Inspect: `src/styles.scss`

- [ ] **Step 1: Confirm the font references**

Run:

```bash
rg -n "Poppins|fonts.googleapis|fonts.gstatic|Inter" src/index.html src/styles.scss
```

Expected:

```text
src/index.html:<line>:    <link rel="preconnect" href="https://fonts.googleapis.com" />
src/index.html:<line>:    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
src/index.html:<line>:      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
src/styles.scss:<line>:    Poppins,
```

There should be no `Inter` match.

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

- [ ] **Step 3: Start the dev server for review**

Run:

```bash
yarn start --host 127.0.0.1 --port 4200
```

Expected: Angular serves the app at `http://127.0.0.1:4200/`.
