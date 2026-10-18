export const SITE_URL = "https://passetti-cmd.github.io/erick-portfolio";

export const profile = {
  name: "Erick Passetti",
  role: "Software Engineer, Backend & Automation",
  location: "São Paulo, Brazil",
  email: "erickpassetti23@gmail.com",
  github: "https://github.com/Passetti-cmd",
  linkedin: "https://www.linkedin.com/in/erick-passetti",
  summary:
    "Backend engineer building resilient automation systems with Node.js, TypeScript and AWS.",
};

/*
 * CV downloads. Drop the PDFs at these paths inside public/ and the
 * "Download CV" buttons appear on the next build (see vite.config.ts).
 * If only the English file exists, the Portuguese site links to it too.
 */
export const cvFiles = {
  en: "cv/Erick-Passetti-CV-EN.pdf",
  pt: "cv/Erick-Passetti-CV-PT.pdf",
} as const;

// Shown right under the hero headline. Keep these in sync with the CV.
export type Metric = {
  label: string;
  /** Value before the work; omit for a plain figure. */
  before?: number;
  after: number;
  unit: string;
  approx?: boolean;
  /** Overrides the rendered figure (e.g. a range). */
  display?: string;
};

export const metrics: Metric[] = [
  { label: "Production robots I own and operate", after: 6, unit: "", display: "5–6" },
  { label: "Average quote runtime", before: 7, after: 3, unit: "min", approx: true },
  { label: "Error rate after hardening", before: 35, after: 8, unit: "%", approx: true },
];

export const about = [
  "I build and operate automation-heavy backend systems in production with Node.js, TypeScript and Python.",
  "I like problems where the system I depend on keeps changing under me: third-party portals, flaky networks, moving selectors. My approach is to make failures visible first (logs, traces, metrics), then make them boring (retries, idempotency, clear runbooks).",
  "I lived and studied in Orlando, FL (2017–2019), so I work comfortably in English and in US-style teams. I’m finishing an associate’s degree in Systems Analysis and Development (December 2026).",
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    skills: ["Node.js", "TypeScript", "JavaScript", "Python", "SQL", "Playwright"],
  },
  {
    title: "Backend",
    skills: ["REST APIs", "Express", "FastAPI", "JWT auth", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2",
      "AWS S3",
      "CloudWatch",
      "IAM",
      "Docker",
      "CI/CD",
      "Git & GitHub",
      "Logs, traces, metrics",
    ],
  },
  {
    title: "Data",
    skills: ["Pandas", "NumPy", "ETL pipelines", "Power BI"],
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  start: string;
  end: string;
  location: string;
  type: string;
  current?: boolean;
  summary?: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Saúde Bliss",
    start: "Mar 2025",
    end: "Present",
    location: "São Paulo, hybrid",
    type: "Full-time",
    current: true,
    summary:
      "Backend and automation engineering for an insurtech platform used by health insurance brokers.",
    highlights: [
      "Own and maintain a fleet of 5–6 production Playwright robots (TypeScript/Node.js) that automate insurance quoting across major Brazilian health insurers’ portals.",
      "Added observability to the robots (structured logs, traces, CloudWatch metrics) to detect and diagnose failures faster.",
      "Continuously refactor and harden automations as third-party portals change.",
      "Created repositories and standardized project templates (Golden Path) so new services start from a consistent structure.",
      "Operate services on AWS (EC2, S3, CloudWatch) and configure IAM policies for access control.",
      "Write and run MySQL queries to support backend operations and data consistency.",
      "Onboarded three senior engineers to the quoting robots and advise on robot architecture decisions.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "SESI São Paulo",
    start: "Jan 2025",
    end: "Mar 2025",
    location: "São Paulo, on-site",
    type: "Internship",
    highlights: [
      "Built SQL and Python ETL pipelines that improved data consistency and reporting reliability.",
      "Automated recurring data workflows to reduce manual effort.",
      "Delivered Power BI dashboards and translated business requirements into data models.",
    ],
  },
  {
    title: "IT Support & Infrastructure Analyst",
    company: "Preçolândia Comercial",
    start: "Sep 2023",
    end: "Aug 2024",
    location: "São Paulo, on-site",
    type: "Full-time",
    highlights: [
      "Supported ERP systems, networks and end-user infrastructure in a retail environment.",
      "Automated routine tasks and data organization to improve reporting efficiency.",
      "Gathered requirements from business users and turned them into technical adjustments.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location?: string;
  status?: string;
  note: string;
};

export const education: EducationItem[] = [
  {
    degree: "Associate’s degree",
    field: "Systems Analysis and Development",
    institution: "Universidade São Judas Tadeu",
    period: "Jun 2024 – Dec 2026",
    status: "In progress",
    note: "Software engineering fundamentals, backend development, databases and systems architecture.",
  },
  {
    degree: "Middle school",
    field: "General education",
    institution: "Bridgewater Middle School",
    period: "Feb 2017 – Feb 2019",
    location: "Orlando, FL, USA",
    note: "Two years of school in the US, where I became fluent in English.",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "2025",
    skills: ["Node.js", "SQL", "DevOps", "Cloud"],
  },
  {
    title: "Advanced JavaScript and TypeScript",
    issuer: "Udemy",
    date: "Mar 2025",
    skills: ["JavaScript", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    title: "CS50’s Introduction to Artificial Intelligence with Python",
    issuer: "HarvardX",
    date: "Dec 2024",
    skills: ["Python", "Machine learning", "Deep learning", "AI"],
  },
  {
    title: "Data Scientist: The Complete Course",
    issuer: "Udemy",
    date: "Nov 2024",
    skills: ["Python", "SQL", "Power BI"],
  },
];
