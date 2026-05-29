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
  bestFit: string[];
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
      eyebrow: 'Full-stack web products',
      title: 'I build practical web products from UI to Rails API.',
      summary:
        'I help product teams ship Angular and Vue interfaces with Rails APIs behind them, especially for workflow-heavy products that need clear UX and reliable backend delivery.',
      proof: [
        'Full-stack product delivery',
        'Ruby on Rails APIs',
        'Angular, Vue, TypeScript',
        'Workflow-heavy products',
      ],
      bestFit: ['SaaS dashboards', 'Internal tools', 'Workflow platforms', 'API-backed web apps'],
      primaryCta: 'Start a project inquiry',
      secondaryCta: {
        label: 'Download CV',
        href: italianCvUrl,
      },
    },
    servicesTitle: 'Development services',
    servicesSummary:
      'Focused support for teams that need full-stack delivery, Rails API capability, product clarity, and maintainable web applications.',
    services: [
      {
        title: 'Full-stack product development',
        description:
          'End-to-end web product delivery across Angular or Vue interfaces, Rails APIs, data flow, and release-ready implementation.',
      },
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
        title: 'API-driven interfaces',
        description:
          'Reliable integration with GraphQL, REST, and Rails services, including loading states, error paths, and data-heavy screens.',
      },
      {
        title: 'Product rescue and maintainability',
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
          'Contributed to product delivery across a complete workflow, helping translate operational steps into usable web interfaces and connected application behavior.',
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
      'The stack is built around full-stack product delivery, with a strong frontend edge and enough backend depth to own the product path end to end.',
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
        title: 'Product delivery',
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
          'Full-stack delivery across workflow platforms, management tools, Rails-backed APIs, and interactive web experiences.',
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
        'Share the product, timeline, and where you need support. I will reply with practical next steps.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      typeLabel: 'Project type',
      typeOptions: [
        'Full-stack product',
        'Rails API',
        'Angular/Vue frontend',
        'Product rescue',
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
      summary: 'Full-stack product development for teams that need practical delivery.',
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
      eyebrow: 'Prodotti web full-stack',
      title: 'Realizzo prodotti web pratici dalla UI all’API Rails.',
      summary:
        'Aiuto team di prodotto a consegnare interfacce Angular e Vue con API Rails solide, soprattutto quando il prodotto ha workflow complessi e deve funzionare bene end to end.',
      proof: [
        'Delivery full-stack di prodotto',
        'API Ruby on Rails',
        'Angular, Vue, TypeScript',
        'Prodotti con workflow complessi',
      ],
      bestFit: ['Dashboard SaaS', 'Strumenti interni', 'Piattaforme workflow', 'Web app con API'],
      primaryCta: 'Avvia una richiesta',
      secondaryCta: {
        label: 'Scarica CV',
        href: italianCvUrl,
      },
    },
    servicesTitle: 'Servizi di sviluppo',
    servicesSummary:
      'Supporto mirato per team che hanno bisogno di delivery full-stack, API Rails, chiarezza di prodotto e applicazioni web mantenibili.',
    services: [
      {
        title: 'Sviluppo prodotto full-stack',
        description:
          'Delivery end-to-end di prodotti web con interfacce Angular o Vue, API Rails, flussi dati e implementazione pronta al rilascio.',
      },
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
        title: 'Interfacce basate su API',
        description:
          'Integrazione affidabile con servizi GraphQL, REST e Rails, inclusi stati di caricamento, casi di errore e schermate data-heavy.',
      },
      {
        title: 'Recupero prodotto e mantenibilità',
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
          'Ho contribuito alla delivery di prodotto lungo un workflow completo, traducendo passaggi operativi in interfacce web utilizzabili e comportamento applicativo integrato.',
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
      'Lo stack è orientato alla delivery full-stack di prodotto, con un forte taglio frontend e capacità backend per seguire il flusso end to end.',
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
        title: 'Delivery di prodotto',
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
          'Delivery full-stack su piattaforme workflow, strumenti gestionali, API Rails ed esperienze web interattive.',
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
        'Condividi prodotto, tempistiche e tipo di supporto richiesto. Da lì capiamo insieme come procedere.',
      nameLabel: 'Nome',
      emailLabel: 'Email',
      typeLabel: 'Tipo di progetto',
      typeOptions: [
        'Prodotto full-stack',
        'API Rails',
        'Frontend Angular/Vue',
        'Recupero prodotto',
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
      summary: 'Sviluppo prodotto full-stack per team che hanno bisogno di delivery concreta.',
      location: 'Sacile, Pordenone, Italia',
    },
  },
};
