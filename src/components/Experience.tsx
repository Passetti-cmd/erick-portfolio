import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Saúde Bliss",
    period: "Mar 2025 – Present · 11 months",
    location: "São Paulo, Brazil · Hybrid",
    type: "Full-time",
    responsibilities: [
      "Develop and maintain backend services and APIs using TypeScript (Node.js) and Python",
      "Create and maintain process automation bots that interact with third-party platforms via APIs and web automation",
      "Operate and monitor automation services running on AWS, primarily using EC2 and S3",
      "Analyze cloud logs and application logs daily to debug failures, rerun tasks, and ensure system stability",
      "Perform continuous maintenance and refactoring of automation workflows to adapt to changes in external systems",
      "Work with SQL databases to support backend operations and data consistency",
      "Support cloud-based deployments and operational workflows",
      "Assist with AI resource usage and integration to support automation, monitoring, error handling, and data cleaning",
      "Use Git and GitHub for version control, code reviews, and collaborative development",
      "Collaborate with cross-functional teams to improve system reliability, performance, and scalability",
      "Apply clean code principles and production-oriented engineering practices",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "SESI São Paulo",
    period: "Jan 2025 – Mar 2025 · 3 months",
    location: "São Paulo, Brazil · On-site",
    type: "Internship",
    responsibilities: [
      "Designed and maintained analytical dashboards and reports using Power BI, enabling data-driven decision-making across internal teams",
      "Developed SQL and Python-based data pipelines for extraction, transformation, and analysis, improving data consistency and report reliability",
      "Implemented process automation to optimize data workflows and reduce manual operational tasks",
      "Collaborated with cross-functional stakeholders to translate business requirements into structured data models and analytical solutions",
      "Gained hands-on experience with data modeling, automation, and fundamental concepts for AI-assisted and data retrieval-based systems",
    ],
  },
  {
    title: "IT Support & Infrastructure Analyst",
    company: "Preçolandia Comercial Ltda",
    period: "Sep 2023 – Aug 2024 · 1 year",
    location: "São Paulo, Brazil · On-site",
    type: "Full-time",
    responsibilities: [
      "Provided technical support to internal users, including hardware, operating systems, and network-related issues",
      "Supported ERP system usage and troubleshooting, assisting with system configuration and operational stability",
      "Assisted with basic process automation and data organization, improving internal workflows and reporting efficiency",
      "Participated in requirements gathering and documentation, working closely with business users to translate operational needs into technical adjustments",
      "Developed solid foundations in systems thinking, problem-solving, and IT operations, which later supported backend and data-oriented work",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 text-lg mb-1">{exp.company}</p>
                  <p className="text-slate-400 text-sm">{exp.location}</p>
                  {exp.type && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded">
                      {exp.type}
                    </span>
                  )}
                </div>
                <span className="text-slate-400 font-mono mt-2 md:mt-0 text-sm">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mt-6">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.05 }}
                    className="text-slate-300 flex items-start gap-3"
                  >
                    <span className="text-cyan-400 mt-1.5">▸</span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
