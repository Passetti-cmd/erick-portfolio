import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Express.js",
      "Node.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3)", "Docker", "Git", "CI/CD", "Cloud Deployments"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Automation & Web",
    skills: ["Playwright", "Puppeteer", "Web Automation", "Process Automation"],
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Data Pipelines"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "AI Integration",
      "Neural Networks",
    ],
  },
  {
    title: "Tools & Practices",
    skills: ["Git/GitHub", "Code Reviews", "Clean Code", "Production Systems"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-mono"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
