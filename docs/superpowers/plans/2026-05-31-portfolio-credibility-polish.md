# Portfolio Credibility Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the portfolio landing page so it reads as a credible professional engineering profile for agencies, recruiters, and hiring managers.

**Architecture:** Keep the existing single-page Angular standalone-component structure. Extend the typed static content model, add one focused credibility snapshot section, update the hero/profile rendering, reorder the existing sections, and tune SCSS without adding dependencies.

**Tech Stack:** Angular 21 standalone components, TypeScript, SCSS, Angular forms, Vitest/Jasmine-style Angular tests, Yarn.

---

## File Structure

- Modify: `src/app/content/portfolio-content.ts`
  - Owns typed bilingual landing-page content.
  - Add `SnapshotItem`, `ProfileFact`, and snapshot fields to the content model.
  - Update English and Italian copy for balanced agency/recruiter positioning.
- Modify: `src/app/app.ts`
  - Import the new `ProfessionalSnapshotSection` component.
- Modify: `src/app/app.html`
  - Reorder sections so professional credibility appears before services.
  - Pass new snapshot content into the new component.
- Modify: `src/app/app.spec.ts`
  - Update assertions for the new hero headline.
  - Add coverage for the professional snapshot section and section ordering.
- Modify: `src/app/sections/hero-section.html`
  - Replace the generic proof list with structured profile facts.
- Modify: `src/app/sections/hero-section.scss`
  - Reduce hero scale and polish the photo/profile block.
- Create: `src/app/sections/professional-snapshot-section.ts`
  - Standalone component for compact credibility facts.
- Create: `src/app/sections/professional-snapshot-section.html`
  - Renders bilingual snapshot content.
- Create: `src/app/sections/professional-snapshot-section.scss`
  - Compact proof-band styling.
- Modify: `src/app/sections/services-section.scss`
  - Reduce service-card dominance relative to selected work.
- Modify: `src/app/sections/case-studies-section.scss`
  - Give selected work stronger proof-section presence.
- Modify: `src/app/sections/credentials-section.scss`
  - Convert credentials toward timeline-style proof rows.

## Task 1: Update Tests For New Positioning And Structure

**Files:**
- Modify: `src/app/app.spec.ts`

- [ ] **Step 1: Replace app tests with expectations for the approved design**

Use this complete file content:

```ts
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the English professional profile by default', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'I build reliable web products across Angular, Vue, and Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer at Moku');
    expect(compiled.textContent).toContain('Computer Science, University of Padova');
    expect(compiled.textContent).toContain('How I can support a team');
  });

  it('should render credibility before services', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const snapshot = compiled.querySelector('#profile') as HTMLElement;
    const work = compiled.querySelector('#work') as HTMLElement;
    const services = compiled.querySelector('#services') as HTMLElement;

    expect(snapshot).toBeTruthy();
    expect(work).toBeTruthy();
    expect(services).toBeTruthy();
    expect(snapshot.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(work.compareDocumentPosition(services) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('should switch to Italian content', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.language-toggle') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Realizzo prodotti web affidabili con Angular, Vue e Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer presso Moku');
    expect(compiled.textContent).toContain('Come posso supportare un team');
  });
});
```

- [ ] **Step 2: Run the tests and verify they fail**

Run:

```bash
yarn test --watch=false
```

Expected: FAIL because the new headline, `#profile` section, and updated copy do not exist yet.

- [ ] **Step 3: Commit the failing test**

```bash
git add src/app/app.spec.ts
git commit -m "test: cover portfolio credibility polish"
```

## Task 2: Extend The Typed Content Model And Copy

**Files:**
- Modify: `src/app/content/portfolio-content.ts`

- [ ] **Step 1: Add new content interfaces**

Insert these interfaces after `CtaLink`:

```ts
export interface ProfileFact {
  label: string;
  value: string;
}

export interface SnapshotItem {
  label: string;
  value: string;
  description: string;
}
```

Change `HeroContent` to include `profileFacts`:

```ts
export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  profileFacts: ProfileFact[];
  bestFit: string[];
  primaryCta: string;
  secondaryCta: CtaLink;
}
```

Add these fields to `PortfolioContent` after `hero`:

```ts
  snapshotTitle: string;
  snapshotItems: SnapshotItem[];
```

- [ ] **Step 2: Replace the English hero and add English snapshot content**

Replace the English `hero` object with:

```ts
    hero: {
      eyebrow: 'Full-stack product engineer',
      title: 'I build reliable web products across Angular, Vue, and Rails.',
      summary:
        'I work with agencies, product teams, and hiring teams that need a practical engineer for workflow-heavy web products, frontend delivery, and Rails-backed APIs.',
      profileFacts: [
        { label: 'Current role', value: 'Software Engineer at Moku' },
        { label: 'Focus', value: 'Angular, Vue, TypeScript, Rails APIs' },
        { label: 'Location', value: 'Sacile, Italy · remote-friendly' },
        { label: 'Languages', value: 'Italian native · professional English' },
      ],
      bestFit: ['Agencies', 'Product teams', 'Internal tools', 'Workflow platforms'],
      primaryCta: 'Contact me',
      secondaryCta: {
        label: 'Download CV',
        href: italianCvUrl,
      },
    },
    snapshotTitle: 'Professional snapshot',
    snapshotItems: [
      {
        label: 'Current work',
        value: 'Software Engineer at Moku',
        description: 'Full-stack product delivery across workflow platforms, management tools, and Rails-backed web applications.',
      },
      {
        label: 'Delivery focus',
        value: 'Frontend strength with backend ownership',
        description: 'Angular and Vue interfaces, API integration, Rails endpoints, data flow, and release-ready implementation.',
      },
      {
        label: 'Core stack',
        value: 'Angular · Vue · TypeScript · Rails',
        description: 'Practical web product work with GraphQL, REST, RxJS, Three.js, and maintainable UI systems.',
      },
      {
        label: 'Education',
        value: 'Computer Science, University of Padova',
        description: 'Bachelor degree in Computer Science, top 3% of graduating class, Mille e una lode scholarship.',
      },
    ],
```

- [ ] **Step 3: Replace the English service/contact framing**

Set the English service title and summary to:

```ts
    servicesTitle: 'How I can support a team',
    servicesSummary:
      'Focused engineering support for agencies, product teams, and hiring managers who need dependable delivery inside an existing product context.',
```

Set the English contact summary to:

```ts
      summary:
        'Share the project, role, team context, or timeline. I will reply with practical next steps for a collaboration or career conversation.',
```

- [ ] **Step 4: Replace the Italian hero and add Italian snapshot content**

Replace the Italian `hero` object with:

```ts
    hero: {
      eyebrow: 'Full-stack product engineer',
      title: 'Realizzo prodotti web affidabili con Angular, Vue e Rails.',
      summary:
        'Collaboro con agenzie, team di prodotto e hiring manager che cercano un engineer pratico per prodotti web con workflow complessi, delivery frontend e API Rails.',
      profileFacts: [
        { label: 'Ruolo attuale', value: 'Software Engineer presso Moku' },
        { label: 'Focus', value: 'Angular, Vue, TypeScript, API Rails' },
        { label: 'Posizione', value: 'Sacile, Italia · disponibile da remoto' },
        { label: 'Lingue', value: 'Italiano madrelingua · inglese professionale' },
      ],
      bestFit: ['Agenzie', 'Team prodotto', 'Strumenti interni', 'Piattaforme workflow'],
      primaryCta: 'Contattami',
      secondaryCta: {
        label: 'Scarica CV',
        href: italianCvUrl,
      },
    },
    snapshotTitle: 'Profilo professionale',
    snapshotItems: [
      {
        label: 'Esperienza attuale',
        value: 'Software Engineer presso Moku',
        description: 'Delivery full-stack su piattaforme workflow, strumenti gestionali e applicazioni web con backend Rails.',
      },
      {
        label: 'Focus delivery',
        value: 'Frontend forte con ownership backend',
        description: 'Interfacce Angular e Vue, integrazione API, endpoint Rails, flussi dati e implementazione pronta al rilascio.',
      },
      {
        label: 'Stack principale',
        value: 'Angular · Vue · TypeScript · Rails',
        description: 'Sviluppo prodotto web con GraphQL, REST, RxJS, Three.js e sistemi UI mantenibili.',
      },
      {
        label: 'Formazione',
        value: 'Informatica, Università di Padova',
        description: 'Laurea triennale in Informatica, top 3% della classe di laureati, borsa Mille e una lode.',
      },
    ],
```

- [ ] **Step 5: Replace the Italian service/contact framing**

Set the Italian service title and summary to:

```ts
    servicesTitle: 'Come posso supportare un team',
    servicesSummary:
      'Supporto engineering mirato per agenzie, team di prodotto e hiring manager che cercano delivery affidabile dentro un contesto prodotto esistente.',
```

Set the Italian contact summary to:

```ts
      summary:
        'Condividi progetto, ruolo, contesto del team o tempistiche. Rispondo con prossimi passi pratici per una collaborazione o una conversazione professionale.',
```

- [ ] **Step 6: Run tests and verify type errors still exist for missing rendering**

Run:

```bash
yarn test --watch=false
```

Expected: FAIL because `profileFacts`, `snapshotTitle`, and `snapshotItems` are typed but not yet rendered or wired into the app.

- [ ] **Step 7: Commit content model changes**

```bash
git add src/app/content/portfolio-content.ts
git commit -m "feat: update portfolio credibility content"
```

## Task 3: Add The Professional Snapshot Section

**Files:**
- Create: `src/app/sections/professional-snapshot-section.ts`
- Create: `src/app/sections/professional-snapshot-section.html`
- Create: `src/app/sections/professional-snapshot-section.scss`
- Modify: `src/app/app.ts`
- Modify: `src/app/app.html`

- [ ] **Step 1: Create the component class**

Create `src/app/sections/professional-snapshot-section.ts`:

```ts
import { Component, input } from '@angular/core';
import { SnapshotItem } from '../content/portfolio-content';

@Component({
  selector: 'app-professional-snapshot-section',
  imports: [],
  templateUrl: './professional-snapshot-section.html',
  styleUrl: './professional-snapshot-section.scss',
})
export class ProfessionalSnapshotSection {
  readonly title = input.required<string>();
  readonly items = input.required<SnapshotItem[]>();
}
```

- [ ] **Step 2: Create the component template**

Create `src/app/sections/professional-snapshot-section.html`:

```html
<section class="profile-snapshot" id="profile" aria-labelledby="profile-title">
  <div class="profile-snapshot__heading">
    <p class="eyebrow">Profile</p>
    <h2 id="profile-title">{{ title() }}</h2>
  </div>

  <div class="profile-snapshot__items">
    @for (item of items(); track item.label) {
      <article>
        <p>{{ item.label }}</p>
        <h3>{{ item.value }}</h3>
        <span>{{ item.description }}</span>
      </article>
    }
  </div>
</section>
```

- [ ] **Step 3: Create compact proof-band styles**

Create `src/app/sections/professional-snapshot-section.scss`:

```scss
:host {
  display: block;
}

.profile-snapshot {
  display: grid;
  grid-template-columns: minmax(220px, 0.38fr) minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  align-items: stretch;
  padding: clamp(1rem, 2.5vw, 1.5rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: rgb(255 255 255 / 0.82);
  box-shadow: 0 18px 50px rgb(16 24 40 / 0.05);
}

.profile-snapshot__heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-snapshot__heading h2 {
  margin: 0;
  font-size: clamp(1.45rem, 2.2vw, 2rem);
  line-height: 1.05;
}

.profile-snapshot__items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

article {
  padding: 0.95rem;
  border-left: 1px solid var(--color-border);
}

article p,
article h3,
article span {
  margin: 0;
}

article p {
  color: var(--color-accent);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

article h3 {
  margin-top: 0.55rem;
  font-size: clamp(1rem, 1.5vw, 1.18rem);
  line-height: 1.18;
}

article span {
  display: block;
  margin-top: 0.55rem;
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.45;
}

@media (max-width: 980px) {
  .profile-snapshot {
    grid-template-columns: 1fr;
  }

  .profile-snapshot__items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  article {
    border-left: 0;
    border-top: 1px solid var(--color-border);
  }
}

@media (max-width: 620px) {
  .profile-snapshot__items {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Import the component into the app**

In `src/app/app.ts`, add:

```ts
import { ProfessionalSnapshotSection } from './sections/professional-snapshot-section';
```

Then include `ProfessionalSnapshotSection` in the `imports` array between `HeroSection` and `ServicesSection`.

- [ ] **Step 5: Reorder the app template**

Change `src/app/app.html` so the main section order is:

```html
  <main>
    <app-hero-section [content]="content().hero" />
    <app-professional-snapshot-section
      [title]="content().snapshotTitle"
      [items]="content().snapshotItems"
    />
    <app-case-studies-section
      [title]="content().casesTitle"
      [summary]="content().casesSummary"
      [cases]="content().cases"
    />
    <app-services-section
      [title]="content().servicesTitle"
      [summary]="content().servicesSummary"
      [services]="content().services"
    />
    <app-skills-section
      [title]="content().skillsTitle"
      [summary]="content().skillsSummary"
      [groups]="content().skillGroups"
    />
    <app-credentials-section
      [title]="content().credentialsTitle"
      [credentials]="content().credentials"
    />
    <app-contact-section [content]="content().contact" />
  </main>
```

- [ ] **Step 6: Run tests**

Run:

```bash
yarn test --watch=false
```

Expected: FAIL only on hero rendering expectations, because the snapshot exists but the hero still renders old proof markup.

- [ ] **Step 7: Commit the snapshot section**

```bash
git add src/app/app.ts src/app/app.html src/app/sections/professional-snapshot-section.ts src/app/sections/professional-snapshot-section.html src/app/sections/professional-snapshot-section.scss
git commit -m "feat: add professional snapshot section"
```

## Task 4: Update Hero Rendering And Polish

**Files:**
- Modify: `src/app/sections/hero-section.html`
- Modify: `src/app/sections/hero-section.scss`

- [ ] **Step 1: Replace the hero profile block**

Replace `src/app/sections/hero-section.html` with:

```html
<section class="hero" id="top">
  <div class="hero__content">
    <p class="eyebrow">{{ content().eyebrow }}</p>
    <h1>{{ content().title }}</h1>
    <p class="hero__summary">{{ content().summary }}</p>

    <div class="hero__actions">
      <a class="button button--primary" href="#contact">{{ content().primaryCta }}</a>
      <a class="button button--secondary" [href]="content().secondaryCta.href" download>
        {{ content().secondaryCta.label }}
      </a>
    </div>

    <div class="hero__fit" aria-label="Best fit work contexts">
      @for (item of content().bestFit; track $index) {
        <span>{{ item }}</span>
      }
    </div>
  </div>

  <aside class="hero__media" aria-label="Profile highlights">
    <img src="/xida-chen-photo.jpeg" alt="Xida Chen" />

    <div class="hero__profile">
      @for (fact of content().profileFacts; track fact.label) {
        <div>
          <span>{{ fact.label }}</span>
          <strong>{{ fact.value }}</strong>
        </div>
      }
    </div>
  </aside>
</section>
```

- [ ] **Step 2: Replace hero styles**

Replace `src/app/sections/hero-section.scss` with:

```scss
:host {
  display: block;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.72fr);
  gap: clamp(2rem, 5vw, 5.5rem);
  align-items: end;
  min-height: calc(92svh - 84px);
  padding: clamp(3.25rem, 7vw, 5.75rem) 0 clamp(2rem, 4vw, 3.25rem);
}

.hero__content {
  max-width: 800px;
}

h1 {
  margin: 0;
  max-width: 14ch;
  font-size: clamp(3rem, 6.4vw, 6.35rem);
  line-height: 0.96;
  letter-spacing: 0;
}

.hero__summary {
  max-width: 700px;
  margin: 1.35rem 0 0;
  color: var(--color-muted);
  font-size: clamp(1.05rem, 1.7vw, 1.28rem);
  line-height: 1.62;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.85rem;
}

.hero__fit {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.25rem;
}

.hero__fit span {
  padding: 0.46rem 0.7rem;
  border: 1px solid rgb(15 118 110 / 0.2);
  border-radius: 999px;
  background: rgb(255 255 255 / 0.74);
  color: var(--color-accent-strong);
  font-size: 0.88rem;
  font-weight: 800;
}

.hero__media {
  display: grid;
  gap: 0.85rem;
}

.hero__media img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: 50% 28%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  filter: brightness(1.13) contrast(1.04) saturate(1.02);
  box-shadow: 0 22px 60px rgb(16 24 40 / 0.1);
}

.hero__profile {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-surface);
  box-shadow: 0 18px 45px rgb(16 24 40 / 0.06);
  overflow: hidden;
}

.hero__profile div {
  display: grid;
  gap: 0.35rem;
  min-width: 0;
  padding: 0.95rem;
  border-top: 1px solid var(--color-border);
}

.hero__profile div:nth-child(-n + 2) {
  border-top: 0;
}

.hero__profile div:nth-child(even) {
  border-left: 1px solid var(--color-border);
}

.hero__profile span {
  color: var(--color-muted);
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero__profile strong {
  color: var(--color-ink);
  font-size: 0.96rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

@media (max-width: 820px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  h1 {
    max-width: 13ch;
  }
}

@media (max-width: 520px) {
  .hero__profile {
    grid-template-columns: 1fr;
  }

  .hero__profile div,
  .hero__profile div:nth-child(even) {
    border-left: 0;
  }

  .hero__profile div:nth-child(2) {
    border-top: 1px solid var(--color-border);
  }
}
```

- [ ] **Step 3: Run tests**

Run:

```bash
yarn test --watch=false
```

Expected: PASS.

- [ ] **Step 4: Commit hero changes**

```bash
git add src/app/sections/hero-section.html src/app/sections/hero-section.scss
git commit -m "feat: polish portfolio hero profile"
```

## Task 5: Polish Work, Services, Credentials, And Global Rhythm

**Files:**
- Modify: `src/styles.scss`
- Modify: `src/app/app.scss`
- Modify: `src/app/sections/case-studies-section.scss`
- Modify: `src/app/sections/services-section.scss`
- Modify: `src/app/sections/credentials-section.scss`

- [ ] **Step 1: Reduce repeated gradient weight globally**

In `src/styles.scss`, replace the `body` background with:

```scss
body {
  margin: 0;
  background:
    linear-gradient(135deg, rgb(15 118 110 / 0.09) 0%, rgb(249 250 251 / 0) 32%),
    linear-gradient(215deg, rgb(245 158 11 / 0.055) 0%, rgb(249 250 251 / 0) 28%),
    var(--color-background);
  overflow-x: clip;
}
```

- [ ] **Step 2: Tighten section rhythm**

In `src/app/app.scss`, change `main` to:

```scss
main {
  display: grid;
  gap: clamp(3.5rem, 7vw, 6rem);
}
```

- [ ] **Step 3: Give selected work stronger proof presence**

In `src/app/sections/case-studies-section.scss`, replace `.case-card` and `.case-card:nth-child(even)` with:

```scss
.case-card {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 2fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  padding: clamp(1.35rem, 2.8vw, 2.15rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: rgb(255 255 255 / 0.9);
  box-shadow: 0 16px 48px rgb(16 24 40 / 0.045);
}

.case-card:nth-child(even) {
  background: linear-gradient(135deg, var(--color-surface), rgb(245 158 11 / 0.05));
}
```

- [ ] **Step 4: Reduce service-card dominance**

In `src/app/sections/services-section.scss`, replace `.service-card--featured` with:

```scss
.service-card--featured {
  grid-column: span 3;
  min-height: 240px;
  padding: clamp(1.25rem, 2vw, 1.65rem);
  background: linear-gradient(135deg, rgb(15 118 110 / 0.075), var(--color-surface) 56%);
}
```

- [ ] **Step 5: Convert credentials to timeline-like rows**

Replace `src/app/sections/credentials-section.scss` with:

```scss
:host {
  display: block;
}

.credential-list {
  display: grid;
  gap: 0.85rem;
}

.credential-list article {
  display: grid;
  grid-template-columns: minmax(220px, 0.42fr) minmax(0, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  align-items: start;
  padding: 1.15rem 0;
  border-top: 1px solid var(--color-border);
}

.credential-list article:last-child {
  border-bottom: 1px solid var(--color-border);
}

h3,
p {
  margin: 0;
}

h3 + p {
  margin-top: 0.35rem;
  color: var(--color-accent);
  font-size: 0.9rem;
  font-weight: 800;
}

article > p {
  color: var(--color-muted);
  line-height: 1.55;
}

@media (max-width: 680px) {
  .credential-list article {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 6: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 7: Commit visual polish**

```bash
git add src/styles.scss src/app/app.scss src/app/sections/case-studies-section.scss src/app/sections/services-section.scss src/app/sections/credentials-section.scss
git commit -m "style: polish portfolio credibility sections"
```

## Task 6: Manual Verification And Final Cleanup

**Files:**
- Inspect: `src/app/content/portfolio-content.ts`
- Inspect: `src/app/app.html`
- Inspect: `src/app/sections/*.scss`

- [ ] **Step 1: Run the full verification commands**

Run:

```bash
yarn test --watch=false
yarn build
git status --short
```

Expected:

- Tests pass.
- Build succeeds.
- `git status --short` shows no uncommitted app changes after the planned commits.

- [ ] **Step 2: Start the local Angular server for visual review**

Run:

```bash
yarn start --host 127.0.0.1 --port 4200
```

Expected: Angular dev server starts and serves the app at `http://127.0.0.1:4200/`.

- [ ] **Step 3: Review the page manually in browser**

Check:

- Hero headline is less oversized and reads as a professional identity.
- Profile photo and profile facts render cleanly.
- Professional snapshot appears before selected work and services.
- Selected work has stronger visual weight than services.
- Services are framed as team support.
- Contact copy supports project and career conversations.
- Italian language toggle updates the hero, snapshot, services, and contact copy.
- Mobile width does not overflow tags, buttons, profile facts, cards, or credentials.

- [ ] **Step 4: Stop the dev server**

Use `Ctrl-C` in the terminal running `yarn start`.

- [ ] **Step 5: Final status check**

Run:

```bash
git log --oneline -5
git status --short
```

Expected:

- Recent commits include the test, content, snapshot, hero, and visual polish commits.
- Working tree is clean.
