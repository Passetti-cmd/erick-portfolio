import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  problem: string;
  solution: string;
  challenges: string[];
  architecture: {
    backend: string[];
    scraping?: string[];
    database: string[];
    frontend?: string[];
  };
  security: string[];
  whyMatters: string;
  githubUrl: string;
}

const projectData: Record<string, ProjectData> = {
  "public-tender-radar": {
    id: "public-tender-radar",
    title: "Public Tender Radar",
    problem:
      "Companies struggle to discover and manage public tenders (licitações) in Brazil. Manual monitoring across multiple government portals is time-consuming, error-prone, and makes it difficult to identify relevant opportunities that match company profiles.",
    solution:
      "Built a comprehensive full-stack web application with AI-powered matching system that automatically discovers and scores public tenders. The platform uses machine learning to match tenders with company profiles, provides intelligent adherence scoring (0-100), and offers multi-language support (Portuguese, English, German). Includes automated web scraping from multiple Brazilian tender portals, multi-user company management, and comprehensive notification system.",
    challenges: [
      "Implementing AI-powered keyword matching across multiple data sources",
      "Building reliable multi-portal web scraper with Playwright",
      "Designing ML-based adherence scoring algorithm (0-100 scale)",
      "Creating multi-language support with internationalization",
      "Ensuring data consistency across multiple scraping sources",
      "Handling dynamic website structures and anti-scraping measures",
      "Implementing secure multi-tenant data isolation",
      "Optimizing database queries for large-scale tender data",
    ],
    architecture: {
      backend: [
        "FastAPI (Python) with async/await support",
        "RESTful API design with comprehensive error handling",
        "JWT authentication with password hashing (bcrypt)",
      ],
      scraping: [
        "Playwright for multi-threaded web scraping",
        "Multi-portal support (PNCP, ComprasNet)",
        "Automated navigation and data extraction",
        "Retry and timeout handling",
      ],
      database: [
        "MySQL with SQLAlchemy ORM",
        "Indexed queries for performance",
        "User-based data isolation",
        "Audit logging for compliance",
      ],
      frontend: [
        "React 18 with TypeScript",
        "Tailwind CSS for responsive design",
        "Custom i18n system with localStorage",
        "React Router with protected routes",
      ],
    },
    security: [
      "JWT-based authentication",
      "Password hashing with bcrypt",
      "Input validation with Pydantic",
      "CORS configuration",
      "SQL injection prevention (SQLAlchemy ORM)",
      "Environment variable management",
      "Multi-tenant data isolation",
    ],
    whyMatters:
      "Demonstrates full-stack development expertise, AI/ML integration, web scraping capabilities, and internationalization skills. Shows ability to build production-ready systems that solve real-world business problems with modern technologies.",
    githubUrl: "https://github.com/Passetti-cmd/radar-bidding",
  },
  "secure-task-management-api": {
    id: "secure-task-management-api",
    title: "Secure Task Management API",
    problem:
      "Need for a production-ready RESTful API with complete user data isolation and secure authentication mechanisms. Each user must only access their own tasks, ensuring privacy and security at the database query level.",
    solution:
      "Built a scalable task management API with JWT authentication, type-safe request validation using Zod, and complete user data isolation using MongoDB. The system implements stateless authentication, comprehensive input validation, centralized error handling, and multi-tenant data separation. Demonstrates production-ready backend engineering practices including secure authentication, error handling, and data isolation.",
    challenges: [
      "Implementing secure JWT token management",
      "Ensuring complete data isolation between users at database level",
      "Type-safe API validation with Zod schemas",
      "Handling concurrent requests efficiently",
      "Database query optimization for performance",
      "Centralized error handling and validation",
      "Stateless authentication architecture",
    ],
    architecture: {
      backend: [
        "Node.js with TypeScript",
        "Express.js framework",
        "RESTful API design",
        "JWT authentication middleware",
      ],
      database: [
        "MongoDB",
        "User-based collections",
        "Indexed queries",
        "Data isolation at query level",
      ],
    },
    security: [
      "JWT token-based authentication",
      "Password hashing with bcrypt",
      "Zod schema validation",
      "Rate limiting",
      "CORS configuration",
      "Environment variable management",
      "Complete user data isolation",
    ],
    whyMatters:
      "Demonstrates production-level API development with focus on security, type safety, and scalable architecture patterns. Shows expertise in secure authentication, data isolation, and modern TypeScript backend development.",
    githubUrl: "https://github.com/Passetti-cmd/Management-API",
  },
  "data-analytics-pipelines": {
    id: "data-analytics-pipelines",
    title: "Data Analytics & ETL Pipelines",
    problem:
      "Organizations need reliable data pipelines to extract, transform, and analyze data from multiple sources, enabling data-driven decision-making through automated reporting and dashboards.",
    solution:
      "Developed SQL and Python-based data pipelines for extraction, transformation, and analysis. Created Power BI dashboards and automated reporting systems, improving data consistency and enabling business intelligence for stakeholders.",
    challenges: [
      "Building reliable ETL pipelines for data extraction and transformation",
      "Creating meaningful dashboards and reports in Power BI",
      "Ensuring data consistency and reliability",
      "Automating manual data workflows",
      "Translating business requirements into data models",
      "Optimizing data processing performance",
    ],
    architecture: {
      backend: [
        "Python for data processing",
        "SQL for data extraction and queries",
        "ETL pipeline design",
      ],
      database: [
        "SQL databases",
        "Data modeling",
        "Data consistency management",
      ],
    },
    security: [
      "Data validation and quality checks",
      "Secure data access",
      "Error handling and logging",
      "Automated monitoring",
    ],
    whyMatters:
      "Demonstrates data engineering capabilities, business intelligence skills, and ability to translate technical work into actionable insights for stakeholders. Shows experience with modern data tools and automation.",
    githubUrl: "https://github.com",
  },
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{project.title}</span>
            </h1>
            <div className="flex gap-4">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </motion.a>
            </div>
          </div>

          <div className="glass rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                Problem
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                Solution
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                Key Technical Challenges
              </h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1.5">▸</span>
                    <span>{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                Architecture Overview
              </h2>
              <div className="space-y-4">
                {Object.entries(project.architecture).map(([key, items]) => (
                  <div key={key}>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 capitalize">
                      {key}
                    </h3>
                    <ul className="space-y-1">
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className="text-slate-300 text-sm font-mono pl-4"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                Security & Reliability
              </h2>
              <ul className="space-y-2">
                {project.security.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1.5">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                Why This Project Matters
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {project.whyMatters}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
