import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  tags: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "public-tender-radar",
    title: "Public Tender Radar",
    description:
      "AI-powered procurement platform that helps companies discover and manage public tenders in Brazil. Features intelligent matching, ML-based scoring, multi-language support, and automated web scraping from multiple portals.",
    techStack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "React",
      "TypeScript",
      "MySQL",
      "Playwright",
      "JWT",
    ],
    tags: [
      "Full-Stack",
      "AI/ML",
      "Web Scraping",
      "Multi-language",
      "Production",
    ],
    githubUrl: "https://github.com/Passetti-cmd/radar-bidding",
  },
  {
    id: "secure-task-management-api",
    title: "Secure Task Management API",
    description:
      "Production-ready RESTful API with JWT authentication and strict data isolation. Demonstrates secure authentication, input validation, error handling, and multi-tenant data separation at the database level.",
    techStack: [
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zod",
    ],
    tags: ["Backend Development", "REST API", "Security", "Production"],
    githubUrl: "https://github.com/Passetti-cmd/Management-API",
  },
  {
    id: "data-analytics-pipelines",
    title: "Data Analytics & ETL Pipelines",
    description:
      "SQL and Python-based data pipelines for extraction, transformation, and analysis. Includes Power BI dashboards, automated reporting, and data consistency improvements for business intelligence.",
    techStack: ["Python", "SQL", "Power BI", "Pandas", "ETL"],
    tags: [
      "Data Engineering",
      "Analytics",
      "Business Intelligence",
      "Automation",
    ],
    githubUrl: "https://github.com/Passetti-cmd",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Real-world backend systems, automation pipelines, and secure APIs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                {index === 0 && (
                  <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded">
                    MAIN
                  </span>
                )}
              </div>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono text-cyan-400/80 bg-cyan-500/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Repository
                </motion.a>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/project/${project.id}`);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
