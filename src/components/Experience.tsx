import { motion } from "framer-motion";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary?: string;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Saúde Bliss",
    period: "Mar 2025 – Present",
    location: "São Paulo, Brazil · Hybrid",
    type: "Full-time",
    summary:
      "Backend and automation engineering for an insurtech platform used by health insurance brokers.",
    responsibilities: [
      "Own and maintain a fleet of 5–6 production Playwright robots (TypeScript/Node.js) that automate insurance quoting across major Brazilian health insurers' portals.",
      "Added observability to the robots (structured logs, traces, CloudWatch metrics) to detect and diagnose failures faster.",
      "Continuously refactor and harden automations as third-party portals change.",
      "Created repositories and standardized project templates (Golden Path) so new services start from a consistent structure.",
      "Operate services on AWS (EC2, S3, CloudWatch) and configure IAM policies for access control.",
      "Write and run MySQL queries to support backend operations and data consistency.",
      "Work with senior engineers on technical decisions and design trade-offs.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "SESI São Paulo",
    period: "Jan 2025 – Mar 2025",
    location: "São Paulo, Brazil · On-site",
    type: "Internship",
    responsibilities: [
      "Built SQL and Python ETL pipelines that improved data consistency and reporting reliability.",
      "Automated recurring data workflows to reduce manual effort.",
      "Delivered Power BI dashboards and translated business requirements into data models.",
    ],
  },
  {
    title: "IT Support & Infrastructure Analyst",
    company: "Preçolândia Comercial",
    period: "Sep 2023 – Aug 2024",
    location: "São Paulo, Brazil · On-site",
    type: "Full-time",
    responsibilities: [
      "Supported ERP systems, networks and end-user infrastructure in a retail environment.",
      "Automated routine tasks and data organization to improve reporting efficiency.",
      "Gathered requirements from business users and turned them into technical adjustments.",
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
              {exp.summary && (
                <p className="text-slate-300 leading-relaxed mt-4">
                  {exp.summary}
                </p>
              )}
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
