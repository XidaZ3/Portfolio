export type LanguageCode = 'en' | 'it';

export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  proof: string[];
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
  typeLabel: string;
  typeOptions: string[];
  messageLabel: string;
  submitLabel: string;
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
  servicesTitle: string;
  servicesSummary: string;
  services: ServiceItem[];
  casesTitle: string;
  casesSummary: string;
  cases: CaseStudy[];
  skillsTitle: string;
  skillsSummary: string;
  skillGroups: SkillGroup[];
  credentialsTitle: string;
  credentials: CredentialItem[];
  contact: ContactContent;
  footer: FooterContent;
}

export const contactEmail = 'xidachen3@gmail.com';
export const linkedInUrl = 'https://www.linkedin.com/in/xida-chen-4797911a2/';
export const italianCvUrl = '/xida-chen-cv-it.pdf';

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
      eyebrow: 'Frontend products and Rails-backed APIs',
      title: 'I build practical web products from interface to API.',
      summary:
        'I help product teams turn complex workflows into clear Angular and Vue applications, with Rails API development when the product needs backend delivery too.',
      proof: [
        'Angular, Vue, TypeScript',
        'Ruby on Rails APIs',
        'Workflow-heavy products',
        'Based in Italy, working in English',
      ],
      primaryCta: 'Start a project inquiry',
      secondaryCta: {
        label: 'Download CV',
        href: italianCvUrl,
      },
    },
    servicesTitle: 'Development services',
    servicesSummary:
      'Focused support for teams that need frontend delivery, Rails API capability, product clarity, and maintainable web applications.',
    services: [
      {
        title: 'Frontend product development',
        description:
          'Angular and Vue implementation for dashboards, workflow tools, customer portals, and internal products that need to be reliable after launch.',
      },
      {
        title: 'Rails API development',
        description:
          'Ruby on Rails API work for product teams that need backend endpoints, data flow, and frontend integration delivered together.',
      },
      {
        title: 'TypeScript architecture',
        description:
          'Component structure, state flow, RxJS usage, and maintainable patterns that help features keep moving.',
      },
      {
        title: 'API-driven interfaces',
        description:
          'Reliable integration with GraphQL, REST, and Rails services, including loading states, error paths, and data-heavy screens.',
      },
      {
        title: 'Frontend rescue and polish',
        description:
          'Refactoring, performance improvements, UI cleanup, and delivery support for products that need momentum again.',
      },
    ],
    casesTitle: 'Selected work',
    casesSummary:
      'Anonymized examples from recent software engineering work, focused on the kind of delivery value clients can expect.',
    cases: [
      {
        label: 'Complex workflow platform',
        title: 'Dental order lifecycle platform',
        challenge:
          'A multinational dental-sector organization needed a platform to support the order journey from initial design through final shipment.',
        contribution:
          'Contributed to frontend delivery across a complete product workflow, helping translate operational steps into usable web interfaces.',
        outcome:
          'Clearer order flow, stronger product structure, and a web application that supports a demanding multi-step process.',
      },
      {
        label: 'Maintainability and reliability',
        title: 'Vehicle practice management app',
        challenge:
          'A management application needed codebase restructuring and better visibility into automated delivery pipelines.',
        contribution:
          'Improved the codebase around key processes and added monitoring mechanisms for automated pipelines.',
        outcome:
          'Faster critical workflows and more proactive detection of delivery issues before they became blockers.',
      },
      {
        label: 'Interactive web experience',
        title: '3D product configurator',
        challenge:
          'Customers needed a more immersive way to inspect and configure a company product directly in the browser.',
        contribution:
          'Contributed to a high-realism 3D web configurator using frontend and interactive UI engineering.',
        outcome:
          'A richer browser experience that made product exploration more visual, direct, and engaging.',
      },
    ],
    skillsTitle: 'Tools and strengths',
    skillsSummary:
      'The stack is centered on modern frontend delivery with Rails API capability for teams that need one developer to connect product flow end to end.',
    skillGroups: [
      {
        title: 'Frontend',
        skills: ['Angular', 'Vue', 'TypeScript', 'RxJS', 'Three.js', 'TailwindCSS'],
      },
      {
        title: 'Backend and APIs',
        skills: ['Ruby on Rails', 'Rails APIs', 'GraphQL', 'REST', 'Data modeling'],
      },
      {
        title: 'Delivery',
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
    credentialsTitle: 'Credentials',
    credentials: [
      {
        title: 'Software Engineer at Moku',
        meta: 'June 2022 to today',
        description:
          'Frontend, Rails API, and full-stack delivery across workflow platforms, management tools, and interactive web experiences.',
      },
      {
        title: 'University of Padova',
        meta: 'Computer Science, 2019 to 2022',
        description:
          'Bachelor degree in Computer Science. Top 3% of graduating class and winner of the “Mille e una lode” scholarship.',
      },
    ],
    contact: {
      eyebrow: 'Project inquiry',
      title: 'Tell me what you need to build.',
      summary:
        'Use the fields below to prepare an email. The site keeps things simple and opens your mail client with the details filled in.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      typeLabel: 'Project type',
      typeOptions: [
        'Angular product',
        'Vue product',
        'Rails API / full-stack product',
        'Frontend rescue',
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
      summary: 'Frontend and Rails API development for teams that need practical delivery.',
      location: 'Sacile, Pordenone, Italy',
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
      eyebrow: 'Prodotti frontend e API Rails',
      title: 'Realizzo prodotti web pratici dall’interfaccia all’API.',
      summary:
        'Aiuto team di prodotto a trasformare workflow complessi in applicazioni Angular e Vue chiare, con sviluppo API Rails quando serve coprire anche il backend.',
      proof: [
        'Angular, Vue, TypeScript',
        'API Ruby on Rails',
        'Prodotti con workflow complessi',
        'Base in Italia, lavoro in inglese',
      ],
      primaryCta: 'Avvia una richiesta',
      secondaryCta: {
        label: 'Scarica CV',
        href: italianCvUrl,
      },
    },
    servicesTitle: 'Servizi di sviluppo',
    servicesSummary:
      'Supporto mirato per team che hanno bisogno di delivery frontend, API Rails, chiarezza di prodotto e applicazioni web mantenibili.',
    services: [
      {
        title: 'Sviluppo frontend di prodotto',
        description:
          'Implementazione Angular e Vue per dashboard, strumenti operativi, portali cliente e prodotti interni che devono restare affidabili dopo il rilascio.',
      },
      {
        title: 'Sviluppo API Rails',
        description:
          'Sviluppo Ruby on Rails per team che hanno bisogno di endpoint backend, flussi dati e integrazione frontend consegnati insieme.',
      },
      {
        title: 'Architettura TypeScript',
        description:
          'Struttura dei componenti, flusso dello stato, uso di RxJS e pattern mantenibili per far avanzare le feature.',
      },
      {
        title: 'Interfacce basate su API',
        description:
          'Integrazione affidabile con servizi GraphQL, REST e Rails, inclusi stati di caricamento, casi di errore e schermate data-heavy.',
      },
      {
        title: 'Refactoring e rifinitura frontend',
        description:
          'Miglioramenti di mantenibilità, performance, pulizia UI e supporto alla delivery per prodotti che devono riprendere ritmo.',
      },
    ],
    casesTitle: 'Esperienze selezionate',
    casesSummary:
      'Esempi anonimizzati da esperienze recenti di software engineering, centrati sul valore di delivery.',
    cases: [
      {
        label: 'Piattaforma workflow complessa',
        title: 'Piattaforma per ciclo ordine nel settore dentale',
        challenge:
          'Una multinazionale del settore dentale aveva bisogno di una piattaforma per seguire l’ordine dalla progettazione iniziale alla spedizione finale.',
        contribution:
          'Ho contribuito alla delivery frontend lungo un workflow completo, traducendo passaggi operativi in interfacce web utilizzabili.',
        outcome:
          'Flusso ordine più chiaro, struttura di prodotto più solida e supporto a un processo multi-step esigente.',
      },
      {
        label: 'Mantenibilità e affidabilità',
        title: 'Applicazione per gestione pratiche veicoli',
        challenge:
          'Un’applicazione gestionale richiedeva ristrutturazione della codebase e maggiore visibilità sulle pipeline automatizzate.',
        contribution:
          'Ho migliorato la codebase attorno ai processi chiave e integrato meccanismi di monitoraggio per le pipeline.',
        outcome:
          'Workflow critici più rapidi e rilevamento più proattivo dei problemi di delivery.',
      },
      {
        label: 'Esperienza web interattiva',
        title: 'Configuratore prodotto 3D',
        challenge:
          'I clienti avevano bisogno di un modo più immersivo per ispezionare e configurare un prodotto direttamente nel browser.',
        contribution:
          'Ho contribuito a un configuratore web 3D ad alto realismo con competenze frontend e UI interattiva.',
        outcome: 'Esperienza browser più ricca, visuale e diretta per l’esplorazione del prodotto.',
      },
    ],
    skillsTitle: 'Strumenti e punti di forza',
    skillsSummary:
      'Lo stack è centrato sulla delivery frontend moderna, con capacità API Rails per team che cercano continuità tra prodotto, interfaccia e backend.',
    skillGroups: [
      {
        title: 'Frontend',
        skills: ['Angular', 'Vue', 'TypeScript', 'RxJS', 'Three.js', 'TailwindCSS'],
      },
      {
        title: 'Backend e API',
        skills: ['Ruby on Rails', 'API Rails', 'GraphQL', 'REST', 'Data modeling'],
      },
      {
        title: 'Delivery',
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
    credentialsTitle: 'Credenziali',
    credentials: [
      {
        title: 'Software Engineer presso Moku',
        meta: 'Giugno 2022 a oggi',
        description:
          'Delivery frontend, API Rails e full-stack su piattaforme workflow, strumenti gestionali ed esperienze web interattive.',
      },
      {
        title: 'Università di Padova',
        meta: 'Informatica, 2019-2022',
        description:
          'Laurea triennale in Informatica. Top 3% della classe di laureati e vincitore della borsa “Mille e una lode”.',
      },
    ],
    contact: {
      eyebrow: 'Richiesta progetto',
      title: 'Raccontami cosa devi costruire.',
      summary:
        'Compila i campi per preparare un’email. Il sito resta statico e apre il tuo client email con i dettagli già inseriti.',
      nameLabel: 'Nome',
      emailLabel: 'Email',
      typeLabel: 'Tipo di progetto',
      typeOptions: [
        'Prodotto Angular',
        'Prodotto Vue',
        'API Rails / prodotto full-stack',
        'Recupero frontend',
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
      summary: 'Sviluppo frontend e API Rails per team che hanno bisogno di delivery concreta.',
      location: 'Sacile, Pordenone, Italia',
    },
  },
};
