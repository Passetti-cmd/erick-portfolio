export type Project = {
  id: string;
  title: string;
  /** One line for the list view. */
  tagline: string;
  description: string;
  /** Honest status shown on the card, e.g. "Personal project". */
  kind: string;
  topics: string[];
  stack: string[];
  githubUrl: string;
  /** Takes the large slot at the top of the projects section. */
  featured?: boolean;
  problem: string;
  solution: string;
  challenges: string[];
  architecture: Record<string, string[]>;
  security: string[];
  takeaway: string;
};

export const projects: Project[] = [
  // TODO: browser-fleet goes here with `featured: true` once it is published.
  // The featured slot in src/components/Projects.tsx renders it automatically.
  {
    id: "secure-task-management-api",
    title: "Secure Task Management API",
    tagline: "REST API where every query is scoped to the user who asked.",
    description:
      "RESTful API with JWT authentication and strict per-user data isolation: input validation, centralized error handling and tenant separation enforced at the database query level.",
    kind: "Personal project",
    topics: ["REST API", "Auth", "Security"],
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Mongoose", "JWT", "Docker"],
    githubUrl: "https://github.com/Passetti-cmd/Management-API",
    problem:
      "A task API needs complete user data isolation and secure authentication: each user must only ever reach their own tasks, and that guarantee has to hold at the query level, not just in the UI.",
    solution:
      "A task management API with stateless JWT authentication and per-user isolation in MongoDB. It validates every input, centralizes error handling and keeps tenants separated in every query. Docker Compose brings up the API and database with one command.",
    challenges: [
      "Issuing, verifying and expiring JWTs safely",
      "Enforcing data isolation between users at the database level",
      "Type-safe request validation with TypeScript",
      "Handling concurrent requests efficiently",
      "Query optimization with indexes",
      "Centralized error handling and validation",
      "Stateless authentication architecture",
      "Multi-container setup with Docker Compose",
    ],
    architecture: {
      Backend: ["Node.js with TypeScript", "Express.js", "RESTful API design", "JWT authentication"],
      Database: ["MongoDB", "Mongoose ODM", "Isolation enforced per query"],
      DevOps: ["Docker", "Docker Compose", "Multi-container setup"],
    },
    security: [
      "JWT token-based authentication",
      "Password hashing with bcryptjs",
      "TypeScript type safety end to end",
      "Rate limiting",
      "CORS configuration",
      "Complete user data isolation",
    ],
    takeaway:
      "API design with security as the default: authentication, isolation and validation built in from the first endpoint rather than added later.",
  },
  {
    id: "intelligence-log-extractor",
    title: "Intelligence Log Extractor",
    tagline: "Pulls dates, amounts and names out of messy text in five languages.",
    description:
      "Data pipeline with a FastAPI backend that extracts structured information (dates, monetary values, names) from unstructured text, handling international date and currency formats, with results stored in PostgreSQL.",
    kind: "Personal project",
    topics: ["Data engineering", "i18n", "ETL"],
    stack: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "Docker", "Pydantic", "Pandas"],
    githubUrl: "https://github.com/Passetti-cmd/Data-Analytics-ETL-Pipelines",
    problem:
      "Extracting structured data from unstructured text is slow and error-prone by hand, especially across languages and regional formats: 1.500,50 €, $1,500.50 and 1'500.00 CHF are the same kind of value written three ways.",
    solution:
      "A FastAPI backend with a Streamlit dashboard that extracts structured fields from text files. It supports Portuguese, English, German, French and Spanish, international date formats and European, US and Swiss currency formats, with background processing and a live analytics view.",
    challenges: [
      "Detecting date formats across languages (dd/mm/yyyy, yyyy-mm-dd, German formats)",
      "Parsing European, US and Swiss currency formats",
      "Extracting Unicode names with accented characters",
      "Building an interactive analytics dashboard",
      "Processing large files as background jobs",
      "Writing locale-aware extraction rules",
    ],
    architecture: {
      Backend: ["FastAPI with async/await", "Pydantic validation", "Pandas processing", "Background tasks"],
      Analytics: ["Streamlit dashboard", "Plotly charts", "Live metrics"],
      Database: ["PostgreSQL", "Job tracking and history"],
    },
    security: [
      "Input validation with Pydantic",
      "Error handling and logging",
      "Docker containerization",
      "Environment-based configuration",
    ],
    takeaway:
      "Data engineering around the unglamorous part: formats, locales and edge cases, handled by rules that can be tested.",
  },
  {
    id: "public-tender-radar",
    title: "Public Tender Radar",
    tagline: "Finds Brazilian public tenders and scores how well each fits a company.",
    description:
      "Backend for a procurement platform that helps companies discover public tenders in Brazil: Playwright scraping across multiple portals, keyword-based adherence scoring, served through a FastAPI REST API on MySQL.",
    kind: "Personal project",
    topics: ["Web scraping", "Matching", "Multi-tenant"],
    stack: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Playwright", "JWT"],
    githubUrl: "https://github.com/Passetti-cmd/radar-bidding",
    problem:
      "Companies struggle to find public tenders (licitações) that fit them. Monitoring several government portals by hand is slow, error-prone and makes relevant opportunities easy to miss.",
    solution:
      "The backend of a platform that discovers tenders and scores them against company profiles. It scrapes several Brazilian tender portals, gives each tender an adherence score from 0 to 100, supports Portuguese, English and German, and handles multiple users per company with notifications.",
    challenges: [
      "Keyword matching across multiple data sources",
      "A reliable multi-portal scraper with Playwright",
      "Designing the 0–100 adherence score",
      "Internationalization in three languages",
      "Keeping data consistent across scraping sources",
      "Handling dynamic page structures and anti-scraping measures",
      "Multi-tenant data isolation",
      "Fast queries over a large tender table",
    ],
    architecture: {
      Backend: ["FastAPI (Python), async", "SQLAlchemy ORM", "Pydantic validation", "JWT auth with bcrypt", "REST API"],
      Scraping: ["Playwright browser automation", "Multi-portal extraction"],
      Database: ["MySQL 8", "SQLAlchemy ORM", "Indexed queries"],
    },
    security: [
      "JWT-based authentication",
      "Password hashing with bcrypt",
      "Input validation with Pydantic",
      "CORS configuration",
      "Parameterized queries through the ORM",
      "Environment-based configuration",
      "Multi-tenant data isolation",
    ],
    takeaway:
      "The same problem I solve at work, scraping portals that were never designed to be scraped, applied to a different domain and wrapped in a multi-tenant API.",
  },
];

export const getProject = (id: string | undefined) =>
  projects.find((p) => p.id === id);
