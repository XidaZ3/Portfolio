# Portfolio Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new Angular one-page bilingual portfolio landing page for Xida Chen's frontend product development services.

**Architecture:** Scaffold a modern standalone Angular app in the existing repository, then compose the page from focused section components fed by typed bilingual content. Keep the app static: CV downloads use public assets and contact uses a generated `mailto:` URL.

**Tech Stack:** Angular CLI, TypeScript, standalone Angular components, SCSS, static public assets, browser `mailto:`.

---

## File Structure

- Create Angular project files in the repository root with `ng new portfolio --directory . --standalone --style scss --routing false`.
- Modify `src/app/app.component.ts`, `src/app/app.component.html`, and `src/app/app.component.scss` for the shell, language state, and page composition.
- Create `src/app/content/portfolio-content.ts` for typed English and Italian copy.
- Create section components in `src/app/sections/`:
  - `hero-section`
  - `services-section`
  - `case-studies-section`
  - `skills-section`
  - `credentials-section`
  - `contact-section`
  - `site-footer`
- Copy `/Users/xidachen/Downloads/Xida Chen.pdf` to `public/xida-chen-cv-it.pdf`.
- Modify global styles in `src/styles.scss`.

## Task 1: Scaffold Angular App

**Files:**

- Create: Angular app files in repository root
- Preserve: `docs/superpowers/specs/2026-05-29-portfolio-landing-page-design.md`
- Preserve: `docs/superpowers/plans/2026-05-29-portfolio-landing-page.md`

- [ ] **Step 1: Confirm Angular CLI availability**

Run:

```bash
yarn ng version
```

Expected: Angular CLI version prints. If the Angular CLI is missing, install it through Yarn before continuing.

- [ ] **Step 2: Scaffold the Angular app**

Run:

```bash
yarn ng new portfolio --directory . --standalone --style scss --routing false --skip-git --skip-install false
```

Expected: Angular project files are created in the current directory without replacing `docs/`.

- [ ] **Step 3: Verify the generated app builds**

Run:

```bash
yarn build
```

Expected: build succeeds and writes browser output under `dist/`.

- [ ] **Step 4: Commit scaffold**

Run:

```bash
git add .
git commit -m "chore: scaffold angular portfolio app"
```

## Task 2: Add Typed Bilingual Content And Assets

**Files:**

- Create: `src/app/content/portfolio-content.ts`
- Create: `public/xida-chen-cv-it.pdf`

- [ ] **Step 1: Copy the CV asset**

Run:

```bash
cp "/Users/xidachen/Downloads/Xida Chen.pdf" public/xida-chen-cv-it.pdf
```

Expected: `public/xida-chen-cv-it.pdf` exists.

- [ ] **Step 2: Create typed content**

Create `src/app/content/portfolio-content.ts` with exported `LanguageCode`, `PortfolioContent`, `portfolioContent`, and `contactEmail` values. Include English and Italian strings for navigation, hero, services, case studies, skills, credentials, contact, and footer.

- [ ] **Step 3: Type-check through build**

Run:

```bash
yarn build
```

Expected: build succeeds with the new content file.

- [ ] **Step 4: Commit content and asset**

Run:

```bash
git add src/app/content/portfolio-content.ts public/xida-chen-cv-it.pdf
git commit -m "feat: add bilingual portfolio content"
```

## Task 3: Build Page Shell And Sections

**Files:**

- Modify: `src/app/app.component.ts`
- Modify: `src/app/app.component.html`
- Modify: `src/app/app.component.scss`
- Create: `src/app/sections/*`

- [ ] **Step 1: Generate section components**

Run:

```bash
yarn ng generate component sections/hero-section --standalone --style scss
yarn ng generate component sections/services-section --standalone --style scss
yarn ng generate component sections/case-studies-section --standalone --style scss
yarn ng generate component sections/skills-section --standalone --style scss
yarn ng generate component sections/credentials-section --standalone --style scss
yarn ng generate component sections/contact-section --standalone --style scss
yarn ng generate component sections/site-footer --standalone --style scss
```

Expected: each component is created under `src/app/sections/`.

- [ ] **Step 2: Implement the app shell**

Update `app.component.ts` to import content, keep the selected language in a signal, expose the current content, and provide a language toggle method.

- [ ] **Step 3: Implement section templates**

Each section accepts typed content through `input.required<...>()` and renders only its own section. The contact section includes fields for name, email, project type, and message, then creates a URL-encoded `mailto:` link.

- [ ] **Step 4: Compose sections in `app.component.html`**

Render the header, language toggle, and all sections in order. Pass the current content into each section.

- [ ] **Step 5: Build**

Run:

```bash
yarn build
```

Expected: build succeeds.

- [ ] **Step 6: Commit components**

Run:

```bash
git add src/app
git commit -m "feat: build portfolio landing page sections"
```

## Task 4: Style Responsive Landing Page

**Files:**

- Modify: `src/styles.scss`
- Modify: `src/app/app.component.scss`
- Modify: component SCSS files under `src/app/sections/`

- [ ] **Step 1: Add global design tokens**

Define neutral colors, accent color, base typography, focus states, section spacing, and shared responsive utilities in `src/styles.scss`.

- [ ] **Step 2: Style shell and header**

Make the header sticky or stable at the top, with navigation links and a compact language toggle that works on mobile.

- [ ] **Step 3: Style sections**

Use high-contrast, practical layouts: strong hero, compact service and case study cards, grouped skills, credentials, and contact panel. Avoid nested cards.

- [ ] **Step 4: Check mobile constraints**

Use CSS grid/flex wrapping, stable button sizes, and `overflow-wrap: anywhere` where needed so long labels and email addresses do not overflow.

- [ ] **Step 5: Build**

Run:

```bash
yarn build
```

Expected: build succeeds.

- [ ] **Step 6: Commit styling**

Run:

```bash
git add src/styles.scss src/app
git commit -m "style: polish responsive portfolio layout"
```

## Task 5: Final Verification And Local Run

**Files:**

- Modify only if verification reveals a defect.

- [ ] **Step 1: Run production build**

Run:

```bash
yarn build
```

Expected: build succeeds.

- [ ] **Step 2: Verify key files**

Run:

```bash
test -f public/xida-chen-cv-it.pdf
```

Expected: command exits successfully.

- [ ] **Step 3: Start dev server**

Run:

```bash
yarn start -- --host 127.0.0.1 --port 4200
```

Expected: Angular dev server starts at `http://127.0.0.1:4200/`.

- [ ] **Step 4: Commit fixes if any**

If verification required fixes, commit them with:

```bash
git add .
git commit -m "fix: verify portfolio landing page"
```

## Self-Review

- Spec coverage: the plan includes Angular scaffold, typed bilingual content, one-page sections, CV asset, contact `mailto:`, responsive styling, build verification, and local dev server.
- Placeholder scan: no deferred implementation placeholders remain; optional English CV behavior is handled by omitting the unavailable link.
- Type consistency: the plan consistently uses `LanguageCode`, `PortfolioContent`, section inputs, and `portfolioContent`.
