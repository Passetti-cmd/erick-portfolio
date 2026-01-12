import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const stack = [
    "Python",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "AWS",
    "PostgreSQL",
    "SQL",
    "Power BI",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-gradient">Erick Passetti</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 mb-2 font-medium"
        >
          Junior Software Engineer
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-8"
        >
          Backend, Automation & Data Engineering
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Backend engineer specializing in Python, TypeScript, and cloud
          infrastructure. Building production-ready automation systems, APIs,
          and data pipelines on AWS.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="px-4 py-2 glass rounded-full text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            View Projects
          </motion.a>
          <motion.a
            href={`${import.meta.env.BASE_URL}Curriculum.pdf`}
            download="Erick_Passetti_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass hover:border-cyan-500/50 text-slate-300 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
          <motion.a
            href="https://github.com/Passetti-cmd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass hover:border-cyan-500/50 text-slate-300 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/erick-passetti"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass hover:border-cyan-500/50 text-slate-300 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-slate-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
