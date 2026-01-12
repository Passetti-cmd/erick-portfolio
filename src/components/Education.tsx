import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Associate's Degree",
    field: "Systems Analysis and Development",
    institution: "Universidade São Judas Tadeu",
    period: "Jun 2024 – Dec 2026",
    status: "In Progress",
    description:
      'Focused on practical software development projects, self-directed study, and continuous improvement in backend development, data analysis, and cloud technologies. Undergraduate program emphasizing software engineering fundamentals, backend development, databases, and systems architecture.',
    skills: ["Backend Development", "Python", "Software Engineering", "Databases", "Systems Architecture"],
  },
  {
    degree: "Middle School Diploma",
    field: "General Education",
    institution: "Bridgewater Middle School",
    period: "Feb 2017 – Feb 2019",
    location: "Orlando, FL, USA",
    description:
      'Completed middle school education in the United States. This international academic experience strengthened English fluency, cultural adaptability, and ability to communicate in multicultural environments. Developed a global mindset and early exposure to international collaboration, valuable skills for working in global technology teams.',
    skills: ["English"],
  },
]

const Education = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-100 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 text-lg mb-1">{edu.field}</p>
                      <p className="text-slate-300 text-base mb-1">{edu.institution}</p>
                      {edu.location && (
                        <p className="text-slate-400 text-sm">{edu.location}</p>
                      )}
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-slate-400 font-mono text-sm block">
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                {edu.description}
              </p>
              {edu.skills && (
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

