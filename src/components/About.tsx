import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-8 space-y-4"
        >
          <p className="text-slate-300 leading-relaxed">
            Junior Software Engineer with multidisciplinary expertise in
            software development, data analysis, cloud computing, and
            automation. My professional journey combines practical experience in
            infrastructure and IT support, solid academic foundation in systems
            analysis, international education, and a strong focus on backend
            engineering, cloud-based systems, and data-oriented solutions.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Currently working at Saúde Bliss, developing backend systems,
            automation pipelines, and cloud infrastructure in production. I
            specialize in Python, TypeScript, Node.js, and AWS, building
            reliable automation systems that run on EC2 and S3.
          </p>
          <p className="text-slate-300 leading-relaxed">
            My experience spans from IT infrastructure support to data analysis
            and now backend engineering, bringing a unique combination of
            operational understanding and technical depth. I'm fluent in English
            (studied in the US).
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
