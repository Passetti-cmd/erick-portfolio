import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: 'HarvardX',
    date: 'Dec 2024',
    skills: ['Machine Learning', 'Deep Learning', 'AI', 'Python'],
    credentialCode: '12345678901234567890',
  },
  {
    title: 'IBM Full Stack Software Developer',
    issuer: 'IBM',
    date: 'Jan 2025',
    status: 'Ongoing',
    skills: ['Node.js', 'DevOps', 'SQL', 'Backend Development', 'Cloud Computing', 'Python'],
  },
  {
    title: 'Advanced JavaScript and TypeScript Course',
    issuer: 'Udemy',
    date: 'Mar 2025',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'SQL', 'React.js', 'REST API'],
  },
  {
    title: 'Data Scientist: The Complete Course',
    issuer: 'Udemy',
    date: 'Nov 2024',
    skills: ['Data Analysis', 'Power BI', 'SQL', 'Data Science', 'Python'],
  },
  {
    title: 'Complete Web Development',
    issuer: 'Udemy',
    date: 'Oct 2024',
    skills: ['JavaScript', 'Bootstrap', 'HTML', 'CSS', 'Web Development', 'React.js', 'Cloud Computing'],
  },
]

const Certifications = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-xs font-mono">
                    {cert.date}
                    {cert.status && ` · ${cert.status}`}
                  </p>
                </div>
              </div>
              {cert.skills && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="px-2 py-1 text-xs text-slate-400">
                      +{cert.skills.length - 4}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

