import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

interface ProjectData {
  id: string
  title: string
  problem: string
  solution: string
  challenges: string[]
  architecture: {
    backend: string[]
    scraping?: string[]
    database: string[]
    frontend?: string[]
  }
  security: string[]
  whyMatters: string
  githubUrl: string
}

const projectData: Record<string, ProjectData> = {
  'cloud-automation-platform': {
    id: 'cloud-automation-platform',
    title: 'Cloud-Based Automation Platform',
    problem:
      'Health insurance platform requires reliable, scalable automation systems to interact with third-party platforms, process data, and maintain system stability in production environments.',
    solution:
      'Built and maintained production automation system running on AWS EC2 and S3, handling process automation bots that interact with third-party platforms via APIs and web automation. Includes comprehensive monitoring, logging, error recovery, and cloud storage management.',
    challenges: [
      'Maintaining automation bots that adapt to frequently changing external systems',
      'Monitoring and debugging failures in cloud environments',
      'Ensuring system stability and reliability in production',
      'Managing cloud resources (EC2, S3) efficiently',
      'Handling error recovery and task reruns',
      'Integrating AI resources for automation support',
    ],
    architecture: {
      backend: [
        'Python for automation scripts',
        'TypeScript (Node.js) for backend services',
        'Cloud-based deployment on AWS',
      ],
      scraping: [
        'Playwright for web automation',
        'API integration with third-party platforms',
        'Automated navigation and data extraction',
      ],
      database: [
        'AWS S3 for cloud storage',
        'SQL databases for data consistency',
        'Log management and monitoring',
      ],
    },
    security: [
      'Environment-based configuration',
      'Secure API integrations',
      'Cloud security best practices',
      'Error logging and monitoring',
      'Version control with Git/GitHub',
      'Code review processes',
    ],
    whyMatters:
      'Demonstrates production-level cloud engineering, automation expertise, and ability to maintain critical systems in real-world environments. Shows experience with AWS infrastructure and production operations.',
    githubUrl: 'https://github.com',
  },
  'backend-api-services': {
    id: 'backend-api-services',
    title: 'Backend API Services',
    problem:
      'Health insurance platform used by brokers requires robust, scalable backend services and APIs to support business operations, handle authentication, and manage data efficiently.',
    solution:
      'Developed and maintained production-ready backend services and APIs using TypeScript (Node.js) and Python, supporting a health insurance platform. Includes database operations, authentication, cloud deployments, and cross-functional collaboration.',
    challenges: [
      'Building scalable backend services for production use',
      'Implementing secure authentication and authorization',
      'Optimizing database queries for performance',
      'Managing cloud-based deployments',
      'Ensuring system reliability and performance',
      'Collaborating with cross-functional teams',
    ],
    architecture: {
      backend: [
        'TypeScript (Node.js)',
        'Python (FastAPI)',
        'RESTful API design',
        'JWT authentication',
      ],
      database: [
        'PostgreSQL',
        'SQL databases',
        'Data consistency management',
      ],
    },
    security: [
      'JWT-based authentication',
      'Secure API endpoints',
      'Input validation',
      'Environment variable management',
      'Code review and quality practices',
      'Production security standards',
    ],
    whyMatters:
      'Shows production-level backend development skills, API design expertise, and ability to work with modern TypeScript and Python stacks in real-world business applications.',
    githubUrl: 'https://github.com',
  },
  'data-analytics-pipelines': {
    id: 'data-analytics-pipelines',
    title: 'Data Analytics & ETL Pipelines',
    problem:
      'Organizations need reliable data pipelines to extract, transform, and analyze data from multiple sources, enabling data-driven decision-making through automated reporting and dashboards.',
    solution:
      'Developed SQL and Python-based data pipelines for extraction, transformation, and analysis. Created Power BI dashboards and automated reporting systems, improving data consistency and enabling business intelligence for stakeholders.',
    challenges: [
      'Building reliable ETL pipelines for data extraction and transformation',
      'Creating meaningful dashboards and reports in Power BI',
      'Ensuring data consistency and reliability',
      'Automating manual data workflows',
      'Translating business requirements into data models',
      'Optimizing data processing performance',
    ],
    architecture: {
      backend: [
        'Python for data processing',
        'SQL for data extraction and queries',
        'ETL pipeline design',
      ],
      database: [
        'SQL databases',
        'Data modeling',
        'Data consistency management',
      ],
    },
    security: [
      'Data validation and quality checks',
      'Secure data access',
      'Error handling and logging',
      'Automated monitoring',
    ],
    whyMatters:
      'Demonstrates data engineering capabilities, business intelligence skills, and ability to translate technical work into actionable insights for stakeholders. Shows experience with modern data tools and automation.',
    githubUrl: 'https://github.com',
  },
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = id ? projectData[id] : null

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Project not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
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
              <p className="text-slate-300 leading-relaxed">{project.problem}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                Solution
              </h2>
              <p className="text-slate-300 leading-relaxed">{project.solution}</p>
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
              <p className="text-slate-300 leading-relaxed">{project.whyMatters}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetails

