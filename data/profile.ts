// Toutes les données du portfolio. Modifiez ce fichier pour mettre à jour le site.

export const profile = {
  name: "Romain Kabasi Bilumbu",
  shortName: "Romain Kabasi",
  initials: "RK",
  title: "Ingénieur Logiciel & Support Applicatif",
  subtitle: "Consultant IT · Cisco Network Technician",
  location: "RD Congo",
  email: "kabasiromain@gmail.com",
  phone: "+243 819 600 518",
  phone2: "+243 999 967 088",
  whatsapp: "https://wa.me/243819600518",
  available: true,
  summary:
    "Consultant IT et développeur freelance, j’accompagne entreprises et organisations dans la conception, le développement et l’optimisation de solutions numériques sur mesure — de l’analyse des besoins jusqu’au déploiement et à la maintenance.",
  about: [
    "Spécialisé dans le développement d’applications web et le support applicatif, j’interviens sur tout le cycle de production logicielle : analyse, architecture, développement, tests, mise en production et accompagnement des utilisateurs.",
    "Habitué aux environnements complexes et aux contraintes métiers — santé publique, télécoms, finance d’entreprise, recrutement — je privilégie des solutions fiables, sécurisées et évolutives. Orienté résultats et satisfaction client.",
  ],
};

export const stats = [
  { value: "3+", label: "années d’expérience professionnelle" },
  { value: "7", label: "plateformes conçues et livrées" },
  { value: "5", label: "organisations accompagnées" },
  { value: "3", label: "langues parlées" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  type: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Airtel RDC",
    role: "Support CX KYC",
    period: "Depuis janvier 2026",
    current: true,
    type: "Télécoms",
    highlights: [
      "Support technique aux équipes commerciales déployées dans toute la République",
      "Tests de toute implémentation des applications CX avant leur mise sur le marché",
      "Monitoring quotidien des comptes Agile KYC et production de rapports pour le management",
      "Appui au data analyst sur l’automatisation et le reporting",
      "Recherche de solutions aux problématiques touchant les clients",
    ],
  },
  {
    company: "Indépendant",
    role: "Consultant & Développeur Freelance",
    period: "Depuis octobre 2023",
    current: true,
    type: "Freelance",
    highlights: [
      "Analyse des besoins clients et proposition de solutions techniques adaptées",
      "Conception et développement d’applications web et mobiles sécurisées",
      "Mise en réseau de systèmes de gestion, automatisation et reporting",
      "Déploiement, maintenance et support post-livraison",
      "Accompagnement technique et formation des utilisateurs",
    ],
  },
  {
    company: "SBN-SBS",
    role: "Software Engineer & Project Manager",
    period: "Janv. 2024 — Oct. 2025",
    type: "CDI",
    highlights: [
      "Conception et développement de logiciels et systèmes d’information",
      "Surveillance des incidents et analyse des journaux",
      "Gestion de projet et supervision des développeurs front-end",
    ],
  },
  {
    company: "World Corp Group RDC",
    role: "Software Engineer",
    period: "Janv. — Déc. 2023",
    type: "CDI",
    highlights: [
      "Développement et maintenance d’applications sécurisées",
      "Supervision et monitoring des serveurs Linux",
      "Gestion des bases de données, des accès et contrôles de conformité",
      "Rédaction d’architectures logicielles",
    ],
  },
];

export type ProjectStatus = "En cours" | "Livré";

export type Project = {
  name: string;
  tagline: string;
  domain: string;
  status: ProjectStatus;
  client?: string;
  features: string[];
  tags: string[];
  accent: number; // teinte (0-360) pour la vignette du projet
};

export const projects: Project[] = [
  {
    name: "Écosystème",
    tagline:
      "Plateforme de recrutement et de gestion de l’écosystème national congolais : portail candidats, back-office de traitement multi-rôles et intégrations inter-plateformes.",
    domain: "Secteur public · RH",
    status: "Livré",
    client: "Écosystème national congolais",
    features: [
      "Portail public de candidature avec critères d’éligibilité configurables",
      "Back-office de réception des candidatures avec répartition des rôles par étape de traitement",
      "Workflow d’approbation et de rejet avec notation et commentaires des évaluateurs",
      "Conception d’API REST et de mécanismes d’intégration avec les plateformes partenaires",
    ],
    tags: ["Web app", "Back-office", "REST API", "Workflow", "RBAC"],
    accent: 195,
  },
  {
    name: "AGISMAC",
    tagline:
      "Portail d’accueil, de gestion de l’information scientifique et de monitoring des activités des chercheurs et innovateurs.",
    domain: "Recherche & innovation",
    status: "Livré",
    features: [
      "Architecture applicative modulaire et modélisation d’une base de données relationnelle",
      "Gestion des utilisateurs, rôles, profils et habilitations (RBAC)",
      "Gestion des candidatures, projets de recherche et d’innovation",
      "Gestion de contenus : documentation des recherches et rapports",
      "Circuits d’approbation sécurisés et notifications par e-mail",
      "Conception d’API REST et de mécanismes d’intégration inter-plateformes",
    ],
    tags: ["Architecture modulaire", "RBAC", "REST API", "SGBDR"],
    accent: 140,
  },
  {
    name: "Easy_Recruit",
    tagline: "Plateforme de recrutement en ligne : portail candidats et back-office de traitement des candidatures.",
    domain: "Ressources humaines",
    status: "Livré",
    features: [
      "Portail public ouvert aux candidatures selon des critères définis",
      "Réception en intranet avec répartition des rôles de traitement",
      "Commentaires et notation de chaque candidature après revue",
      "Workflow d’approbation et de rejet",
      "Notifications par e-mail",
      "Authentification à double facteur (2FA)",
    ],
    tags: ["Web app", "Back-office", "2FA", "Workflow"],
    accent: 210,
  },
  {
    name: "ePharma",
    tagline:
      "Système national d’approvisionnement en médicaments et matériels médicaux pour le Programme de Couverture Santé Universelle.",
    domain: "Santé publique",
    status: "Livré",
    features: [
      "Statistiques de commandes par hôpital, zone de santé et division provinciale",
      "Initiation et approbation des requêtes selon un workflow défini",
      "Génération de documents PDF avec signature électronique",
      "Calcul des coûts des médicaments",
      "Interopérabilité avec les autres applications du système",
    ],
    tags: ["Reporting", "Signature électronique", "Interopérabilité"],
    accent: 160,
  },
  {
    name: "Luxos Request",
    tagline: "Gestion des bons de commande et bons à payer en entreprise, avec chaîne d’approbations.",
    domain: "Finance d’entreprise",
    status: "Livré",
    features: [
      "Initiation des réquisitions et bons à payer soumis à la chaîne d’approbations",
      "Reporting par direction et par service",
      "Export des rapports en Excel, CSV et PDF",
      "Traitement des bons de commande en ligne",
      "Notifications d’activité par e-mail",
      "Sécurisation des flux par OTP",
    ],
    tags: ["Workflow", "OTP", "Exports"],
    accent: 265,
  },
  {
    name: "Billet na nga",
    tagline: "Réservation de billets d’événements en ligne, en libre-service, avec tickets sécurisés.",
    domain: "Événementiel",
    status: "En cours",
    features: [
      "Réservation de tickets d’événements en ligne sans assistance",
      "Génération de tickets sécurisés",
      "Délivrance des tickets par e-mail avec code QR",
    ],
    tags: ["E-commerce", "QR code", "E-mail"],
    accent: 25,
  },
  {
    name: "Célébrons la vie",
    tagline:
      "Sanctuaire numérique de souvenirs éternels : hommages personnalisés, récits touchants et moments partagés.",
    domain: "Mémoriel",
    status: "En cours",
    features: [
      "Pages d’hommage personnalisées",
      "Publication de récits et de souvenirs",
      "Partage de moments avec les proches",
    ],
    tags: ["Plateforme communautaire", "Médias"],
    accent: 330,
  },
];

export const skillGroups = [
  { title: "Langages", items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"] },
  { title: "Back-end", items: ["Node.js", "Express.js", "NestJS", "REST API"] },
  { title: "Front-end", items: ["React", "Next.js", "Angular"] },
  { title: "Données", items: ["MySQL", "MongoDB", "SQL & NoSQL"] },
  { title: "Systèmes & réseaux", items: ["Linux", "Windows", "Shell & Batch", "Réseaux Cisco"] },
  { title: "Méthodes & outils", items: ["Git & GitHub", "Jira", "Asana", "Merise", "UML", "Agile"] },
];

export const softSkills = [
  "Travail en méthode Agile",
  "Livraison de qualité dans le respect des délais",
  "Adaptation aux environnements techniques complexes",
  "Rigueur et sens de la redevabilité",
  "Sens du service et résolution de problèmes",
];

export const education = [
  { title: "Licence en Mathématiques et Informatique", org: "Université de Kinshasa (UNIKIN)", period: "2019 — 2024" },
  { title: "Formation développement logiciel", org: "Kadea Academy", period: "2022 — 2023" },
  { title: "Cisco Network Technician", org: "Cisco Networking Academy", period: "2024" },
  { title: "CCNA — Introduction to Networks", org: "Cisco Networking Academy", period: "2024" },
];

export const languages = ["Français", "Anglais", "Lingala"];
