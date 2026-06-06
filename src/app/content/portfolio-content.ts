export type LanguageCode = 'en' | 'it';

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface SnapshotItem {
  label: string;
  value: string;
  description: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  profileFacts: ProfileFact[];
  primaryCta: string;
  secondaryCta: CtaLink;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface CaseStudy {
  label: string;
  title: string;
  challenge: string;
  contribution: string;
  outcome: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface CredentialItem {
  title: string;
  meta: string;
  description: string;
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  summary: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  typeLabel: string;
  typeOptions: string[];
  messageLabel: string;
  submitLabel: string;
  sendingLabel: string;
  sentLabel: string;
  errorLabel: string;
  mailSubject: string;
  fallbackLabel: string;
  linkedinLabel: string;
}

export interface FooterContent {
  summary: string;
  location: string;
}

export interface PortfolioContent {
  languageName: string;
  alternateLanguageName: string;
  nav: NavItem[];
  hero: HeroContent;
  snapshotEyebrow: string;
  snapshotTitle: string;
  snapshotItems: SnapshotItem[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSummary: string;
  services: ServiceItem[];
  casesEyebrow: string;
  casesTitle: string;
  casesSummary: string;
  caseContextLabel: string;
  caseContributionLabel: string;
  caseValueLabel: string;
  cases: CaseStudy[];
  skillsEyebrow: string;
  skillsTitle: string;
  skillsSummary: string;
  skillGroups: SkillGroup[];
  credentialsEyebrow: string;
  credentialsTitle: string;
  credentials: CredentialItem[];
  contact: ContactContent;
  footer: FooterContent;
}

export const contactEmail = 'xidachen3@gmail.com';
export const linkedInUrl = 'https://www.linkedin.com/in/xida-chen-4797911a2/';
export const englishCvUrl = '/Xida Chen - Frontend Resume - ENG.pdf';
export const italianCvUrl = '/Xida Chen - Frontend Resume - ITA.pdf';

export const portfolioContent: Record<LanguageCode, PortfolioContent> = {
  en: {
    languageName: 'English',
    alternateLanguageName: 'Italiano',
    nav: [
      { label: 'Services', href: '#services' },
      { label: 'Work', href: '#work' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
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
      primaryCta: 'Contact me',
      secondaryCta: {
        label: 'Download CV',
        href: englishCvUrl,
      },
    },
    snapshotEyebrow: 'Profile',
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
          'Bachelor degree in Computer Science, top 3% of graduating class, Mille e una lode scholarship.',
      },
    ],
    servicesEyebrow: 'Services',
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
    casesEyebrow: 'Selected work',
    casesTitle: 'Selected work',
    casesSummary:
      'A few anonymized examples from recent engineering work.',
    caseContextLabel: 'Context',
    caseContributionLabel: 'Contribution',
    caseValueLabel: 'Value',
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
    skillsEyebrow: 'Stack',
    skillsTitle: 'Tools and strengths',
    skillsSummary:
      'My stack is strongest on frontend product work, with enough backend experience to follow a feature through the API layer.',
    skillGroups: [
      {
        title: 'Frontend',
        skills: ['Angular', 'Vue', 'TypeScript', 'RxJS', 'Three.js', 'TailwindCSS'],
      },
      {
        title: 'Backend',
        skills: ['Ruby on Rails', 'Rails APIs', 'GraphQL', 'REST', 'Data modeling'],
      },
      {
        title: 'Product work',
        skills: [
          'Git',
          'Agile methodologies',
          'Pipeline monitoring',
          'Predictive thinking',
          'Italian native',
          'Professional English',
        ],
      },
    ],
    credentialsEyebrow: 'Credentials',
    credentialsTitle: 'Credentials',
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
      phoneLabel: 'Phone',
      typeLabel: 'Project type',
      typeOptions: [
        'Full-stack product',
        'Rails API',
        'Angular/Vue frontend',
        'Codebase cleanup',
        '3D web UI',
      ],
      messageLabel: 'Project details',
      submitLabel: 'Send message',
      sendingLabel: 'Sending...',
      sentLabel: 'Message sent. I will reply soon.',
      errorLabel: 'Something went wrong. Please email me directly.',
      mailSubject: 'Project inquiry for Xida Chen',
      fallbackLabel: 'Or email directly',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      summary: 'Full-stack web product work with Angular, Vue, TypeScript, and Rails.',
      location: 'Based near Pordenone, available for remote projects across Italy and Europe.',
    },
  },
  it: {
    languageName: 'Italiano',
    alternateLanguageName: 'English',
    nav: [
      { label: 'Servizi', href: '#services' },
      { label: 'Progetti', href: '#work' },
      { label: 'Competenze', href: '#skills' },
      { label: 'Contatti', href: '#contact' },
    ],
    hero: {
      eyebrow: 'Sviluppatore full-stack di prodotto',
      title: 'Sviluppo prodotti web con Angular, Vue e Rails.',
      summary:
        'Mi occupo soprattutto di schermate di prodotto, API e dettagli che rendono una web app chiara e affidabile. Lavoro principalmente con Angular e Vue sul frontend, e con API Rails sul backend.',
      profileFacts: [
        { label: 'Ruolo attuale', value: 'Software Engineer presso Moku' },
        { label: 'Stack principale', value: 'Angular, Vue, TypeScript, Rails' },
        { label: 'Base', value: 'Sacile, Italia · disponibile da remoto' },
        { label: 'Lingue', value: 'Italiano madrelingua · inglese professionale' },
      ],
      primaryCta: 'Contattami',
      secondaryCta: {
        label: 'Scarica CV',
        href: italianCvUrl,
      },
    },
    snapshotEyebrow: 'Profilo',
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
    servicesEyebrow: 'Servizi',
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
    casesEyebrow: 'Progetti',
    casesTitle: 'Progetti',
    casesSummary: '',
    caseContextLabel: 'Contesto',
    caseContributionLabel: 'Contributo',
    caseValueLabel: 'Valore',
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
    skillsEyebrow: 'Competenze',
    skillsTitle: 'Strumenti e punti di forza',
    skillsSummary:
      'Il mio stack è più forte sul frontend di prodotto, con esperienza backend sufficiente per seguire una feature fino al livello API.',
    skillGroups: [
      {
        title: 'Frontend',
        skills: ['Angular', 'Vue', 'TypeScript', 'RxJS', 'Three.js', 'TailwindCSS'],
      },
      {
        title: 'Backend',
        skills: ['Ruby on Rails', 'API Rails', 'GraphQL', 'REST', 'Data modeling'],
      },
      {
        title: 'Lavoro di prodotto',
        skills: [
          'Git',
          'Metodologie Agile',
          'Monitoraggio pipeline',
          'Predictive thinking',
          'Italiano madrelingua',
          'Inglese professionale',
        ],
      },
    ],
    credentialsEyebrow: 'Formazione e lavoro',
    credentialsTitle: 'Credenziali',
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
      phoneLabel: 'Telefono',
      typeLabel: 'Tipo di progetto',
      typeOptions: [
        'Prodotto full-stack',
        'API Rails',
        'Frontend Angular/Vue',
        'Pulizia codebase',
        'UI web 3D',
      ],
      messageLabel: 'Dettagli progetto',
      submitLabel: 'Invia messaggio',
      sendingLabel: 'Invio in corso...',
      sentLabel: 'Messaggio inviato. Ti risponderò presto.',
      errorLabel: 'Qualcosa non ha funzionato. Scrivimi direttamente via email.',
      mailSubject: 'Richiesta progetto per Xida Chen',
      fallbackLabel: 'Oppure scrivi direttamente',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      summary: 'Sviluppo prodotti web full-stack con Angular, Vue, TypeScript e Rails.',
      location: 'Vicino a Pordenone, lavoro da remoto con clienti in Italia e in Europa.',
    },
  },
};
