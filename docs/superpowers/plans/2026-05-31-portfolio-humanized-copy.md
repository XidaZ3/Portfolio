# Portfolio Humanized Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the portfolio copy so it stays professional but sounds more natural, specific, and less generated.

**Architecture:** Keep the existing Angular component and content structure. Update only the app text assertions and the typed bilingual static content in `portfolio-content.ts`; no layout, component, or style changes are required.

**Tech Stack:** Angular 21 standalone components, TypeScript, SCSS, Vitest/Jasmine-style Angular tests, Yarn.

---

## File Structure

- Modify: `src/app/app.spec.ts`
  - Update text assertions so tests describe the humanized headline, snapshot copy, service framing, and Italian hero.
- Modify: `src/app/content/portfolio-content.ts`
  - Rewrite English and Italian content in the existing content model.
  - Keep the same interfaces and page structure.

## Task 1: Update Tests For Humanized Copy

**Files:**
- Modify: `src/app/app.spec.ts`

- [ ] **Step 1: Replace app tests with humanized-copy expectations**

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
      'I build web products with Angular, Vue, and Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer at Moku');
    expect(compiled.textContent).toContain('Computer Science, University of Padova');
    expect(compiled.textContent).toContain('How I can help');
    expect(compiled.textContent).toContain('I can build product screens');
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
      'Sviluppo prodotti web con Angular, Vue e Rails',
    );
    expect(compiled.textContent).toContain('Software Engineer presso Moku');
    expect(compiled.textContent).toContain('Come posso aiutare');
    expect(compiled.textContent).toContain('Posso sviluppare schermate di prodotto');
  });
});
```

- [ ] **Step 2: Run the tests and verify they fail**

Run:

```bash
yarn test --watch=false
```

Expected: FAIL because the current content still uses the more generic credibility-polish copy.

- [ ] **Step 3: Commit the failing test**

```bash
git add src/app/app.spec.ts
git commit -m "test: cover humanized portfolio copy"
```

## Task 2: Rewrite English And Italian Portfolio Copy

**Files:**
- Modify: `src/app/content/portfolio-content.ts`

- [ ] **Step 1: Replace the English hero, snapshot, services, cases, skills summary, credentials, contact, and footer copy**

In the English `portfolioContent.en` object, use these values:

```ts
    hero: {
      eyebrow: 'Full-stack product engineer',
      title: 'I build web products with Angular, Vue, and Rails.',
      summary:
        'Most of my work sits between product screens, APIs, and the details that make a web app feel clear and reliable. I work mainly with Angular and Vue on the frontend, and Rails APIs on the backend.',
      profileFacts: [
        { label: 'Current role', value: 'Software Engineer at Moku' },
        { label: 'Main stack', value: 'Angular, Vue, TypeScript, Rails' },
        { label: 'Based in', value: 'Sacile, Italy · remote-friendly' },
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
        description:
          'I work on web products that combine frontend screens, APIs, and business processes.',
      },
      {
        label: 'Frontend and backend',
        value: 'Angular, Vue, and Rails APIs',
        description:
          'I can take care of UI work, API integration, and small backend changes when the product needs both.',
      },
      {
        label: 'Core stack',
        value: 'Angular · Vue · TypeScript · Rails',
        description:
          'Also comfortable with RxJS, GraphQL, REST, Three.js, Git, and day-to-day product work.',
      },
      {
        label: 'Education',
        value: 'Computer Science, University of Padova',
        description:
          'Bachelor degree in Computer Science, top 3% of my graduating class, Mille e una lode scholarship.',
      },
    ],
    servicesTitle: 'How I can help',
    servicesSummary:
      'I am useful when a team needs someone who can understand the product, work in the codebase, and ship clear web interfaces connected to real data.',
    services: [
      {
        title: 'Full-stack product development',
        description:
          'I can build product screens, connect them to Rails APIs, and handle the data flow between frontend and backend.',
      },
      {
        title: 'Frontend product development',
        description:
          'I build Angular and Vue interfaces for dashboards, internal tools, customer portals, and multi-step product flows.',
      },
      {
        title: 'Rails API development',
        description:
          'I can add or adjust Rails endpoints, shape responses for the frontend, and keep the integration straightforward.',
      },
      {
        title: 'API-driven interfaces',
        description:
          'I work on screens that depend on GraphQL, REST, and Rails services, including loading states, empty states, and errors.',
      },
      {
        title: 'Codebase cleanup and maintenance',
        description:
          'I can help simplify existing code, improve UI consistency, and make product areas easier to change.',
      },
    ],
    casesSummary:
      'A few anonymized examples from recent engineering work.',
    cases: [
      {
        label: 'Order workflow',
        title: 'Dental order lifecycle platform',
        challenge:
          'The product supported a dental-sector order process from the first design steps through shipment.',
        contribution:
          'I worked on parts of the web application that turned operational steps into usable screens and connected behavior.',
        outcome:
          'The order flow became easier to follow, with clearer screens for a process that had many moving parts.',
      },
      {
        label: 'Maintenance and reliability',
        title: 'Vehicle practice management app',
        challenge:
          'The application needed codebase cleanup and better visibility into automated pipeline issues.',
        contribution:
          'I worked on restructuring parts of the codebase and added monitoring around automated pipelines.',
        outcome:
          'Important workflows became easier to maintain, and pipeline problems were easier to catch early.',
      },
      {
        label: '3D web interface',
        title: '3D product configurator',
        challenge:
          'Customers needed to inspect and configure a product directly in the browser.',
        contribution:
          'I contributed frontend and interactive UI work for a browser-based 3D configurator.',
        outcome:
          'The product could be explored more directly online, with a visual interface instead of a static presentation.',
      },
    ],
    skillsSummary:
      'My stack is strongest on frontend product work, with enough backend experience to follow a feature through the API layer.',
    credentials: [
      {
        title: 'Software Engineer at Moku',
        meta: 'June 2022 to today',
        description:
          'Working across frontend, Rails APIs, internal tools, workflow platforms, and interactive web interfaces.',
      },
      {
        title: 'University of Padova',
        meta: 'Computer Science, 2019 to 2022',
        description:
          'Bachelor degree in Computer Science. Top 3% of my graduating class and winner of the Mille e una lode scholarship.',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me what you are working on.',
      summary:
        'Send a short note about the project, role, team, or timeline. I will reply with the next practical step.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      typeLabel: 'Project type',
      typeOptions: [
        'Full-stack product',
        'Rails API',
        'Angular/Vue frontend',
        'Codebase cleanup',
        'API-driven UI',
        '3D web UI',
      ],
      messageLabel: 'Project details',
      submitLabel: 'Prepare email',
      mailSubject: 'Project inquiry for Xida Chen',
      fallbackLabel: 'Or email directly',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      summary: 'Full-stack web product work with Angular, Vue, TypeScript, and Rails.',
      location: 'Sacile, Pordenone, Italy',
    },
```

- [ ] **Step 2: Replace the Italian hero, snapshot, services, cases, skills summary, credentials, contact, and footer copy**

In the Italian `portfolioContent.it` object, use these values:

```ts
    hero: {
      eyebrow: 'Full-stack product engineer',
      title: 'Sviluppo prodotti web con Angular, Vue e Rails.',
      summary:
        'Mi occupo soprattutto di schermate di prodotto, API e dettagli che rendono una web app chiara e affidabile. Lavoro principalmente con Angular e Vue sul frontend, e con API Rails sul backend.',
      profileFacts: [
        { label: 'Ruolo attuale', value: 'Software Engineer presso Moku' },
        { label: 'Stack principale', value: 'Angular, Vue, TypeScript, Rails' },
        { label: 'Base', value: 'Sacile, Italia · disponibile da remoto' },
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
        label: 'Lavoro attuale',
        value: 'Software Engineer presso Moku',
        description:
          'Lavoro su prodotti web che uniscono interfacce frontend, API e processi aziendali.',
      },
      {
        label: 'Frontend e backend',
        value: 'Angular, Vue e API Rails',
        description:
          'Posso seguire UI, integrazione API e piccole modifiche backend quando il prodotto richiede entrambe le parti.',
      },
      {
        label: 'Stack principale',
        value: 'Angular · Vue · TypeScript · Rails',
        description:
          'Uso anche RxJS, GraphQL, REST, Three.js, Git e strumenti comuni del lavoro di prodotto.',
      },
      {
        label: 'Formazione',
        value: 'Informatica, Università di Padova',
        description:
          'Laurea triennale in Informatica, top 3% della classe di laureati, borsa Mille e una lode.',
      },
    ],
    servicesTitle: 'Come posso aiutare',
    servicesSummary:
      'Sono utile quando un team ha bisogno di qualcuno che capisca il prodotto, lavori nella codebase e sviluppi interfacce web collegate a dati reali.',
    services: [
      {
        title: 'Sviluppo prodotto full-stack',
        description:
          'Posso sviluppare schermate di prodotto, collegarle ad API Rails e gestire il flusso dati tra frontend e backend.',
      },
      {
        title: 'Sviluppo frontend di prodotto',
        description:
          'Sviluppo interfacce Angular e Vue per dashboard, strumenti interni, portali cliente e flussi multi-step.',
      },
      {
        title: 'Sviluppo API Rails',
        description:
          'Posso aggiungere o adattare endpoint Rails, modellare risposte per il frontend e mantenere semplice l’integrazione.',
      },
      {
        title: 'Interfacce basate su API',
        description:
          'Lavoro su schermate basate su GraphQL, REST e servizi Rails, inclusi stati di caricamento, vuoti ed errori.',
      },
      {
        title: 'Pulizia e manutenzione codebase',
        description:
          'Posso aiutare a semplificare codice esistente, migliorare la coerenza UI e rendere alcune aree più facili da modificare.',
      },
    ],
    casesSummary:
      'Alcuni esempi anonimizzati da esperienze recenti di engineering.',
    cases: [
      {
        label: 'Flusso ordine',
        title: 'Piattaforma per ciclo ordine nel settore dentale',
        challenge:
          'Il prodotto supportava un processo ordine nel settore dentale, dai primi passaggi di progettazione fino alla spedizione.',
        contribution:
          'Ho lavorato su parti della web app che trasformavano passaggi operativi in schermate utilizzabili e comportamento applicativo collegato.',
        outcome:
          'Il flusso ordine è diventato più facile da seguire, con schermate più chiare per un processo con molte parti.',
      },
      {
        label: 'Manutenzione e affidabilità',
        title: 'Applicazione per gestione pratiche veicoli',
        challenge:
          'L’applicazione aveva bisogno di pulizia nella codebase e maggiore visibilità sui problemi delle pipeline automatiche.',
        contribution:
          'Ho lavorato sulla ristrutturazione di alcune parti del codice e sul monitoraggio delle pipeline automatiche.',
        outcome:
          'I flussi principali sono diventati più facili da mantenere e i problemi di pipeline più semplici da intercettare.',
      },
      {
        label: 'Interfaccia web 3D',
        title: 'Configuratore prodotto 3D',
        challenge:
          'I clienti dovevano poter ispezionare e configurare un prodotto direttamente nel browser.',
        contribution:
          'Ho contribuito al lavoro frontend e UI interattiva per un configuratore 3D browser-based.',
        outcome:
          'Il prodotto poteva essere esplorato online in modo più diretto, con un’interfaccia visuale invece di una presentazione statica.',
      },
    ],
    skillsSummary:
      'Il mio stack è più forte sul frontend di prodotto, con esperienza backend sufficiente per seguire una feature fino al livello API.',
    credentials: [
      {
        title: 'Software Engineer presso Moku',
        meta: 'Giugno 2022 a oggi',
        description:
          'Lavoro su frontend, API Rails, strumenti interni, piattaforme workflow e interfacce web interattive.',
      },
      {
        title: 'Università di Padova',
        meta: 'Informatica, 2019-2022',
        description:
          'Laurea triennale in Informatica. Top 3% della classe di laureati e vincitore della borsa Mille e una lode.',
      },
    ],
    contact: {
      eyebrow: 'Contatti',
      title: 'Raccontami a cosa stai lavorando.',
      summary:
        'Mandami una nota breve su progetto, ruolo, team o tempistiche. Risponderò con il prossimo passo pratico.',
      nameLabel: 'Nome',
      emailLabel: 'Email',
      typeLabel: 'Tipo di progetto',
      typeOptions: [
        'Prodotto full-stack',
        'API Rails',
        'Frontend Angular/Vue',
        'Pulizia codebase',
        'UI basata su API',
        'UI web 3D',
      ],
      messageLabel: 'Dettagli progetto',
      submitLabel: 'Prepara email',
      mailSubject: 'Richiesta progetto per Xida Chen',
      fallbackLabel: 'Oppure scrivi direttamente',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      summary: 'Sviluppo prodotti web full-stack con Angular, Vue, TypeScript e Rails.',
      location: 'Sacile, Pordenone, Italia',
    },
```

- [ ] **Step 3: Run tests and build**

Run:

```bash
yarn test --watch=false
yarn build
```

Expected: both commands PASS.

- [ ] **Step 4: Commit content changes**

```bash
git add src/app/content/portfolio-content.ts
git commit -m "copy: humanize portfolio wording"
```

## Task 3: Final Copy Review

**Files:**
- Inspect: `src/app/content/portfolio-content.ts`

- [ ] **Step 1: Scan for overused AI-like phrases**

Run:

```bash
rg -n "delivery|workflow-heavy|release-ready|practical engineer|product path|dependable delivery|ownership|end-to-end|data-heavy" src/app/content/portfolio-content.ts
```

Expected: no output.

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

- [ ] **Step 4: Manual browser review**

Check:

- English hero sounds professional but not generic.
- Snapshot facts read as evidence, not marketing.
- Services explain concrete help.
- Selected work is modest and specific.
- Italian avoids awkward English business terms.
- Language toggle works.
- No visible text overflow on desktop or mobile widths.

- [ ] **Step 5: Stop the dev server**

Use `Ctrl-C` in the terminal running `yarn start`.
