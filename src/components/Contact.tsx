import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-gradient">Contact</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:erickpassetti23@gmail.com"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
            >
              <Mail className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-slate-100">erickpassetti23@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/Passetti-cmd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
            >
              <Github className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-slate-400 text-sm">GitHub</p>
                <p className="text-slate-100">GitHub Profile</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/erick-passetti"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-slate-400 text-sm">LinkedIn</p>
                <p className="text-slate-100">
                  www.linkedin.com/in/erick-passetti
                </p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg"
            >
              <MapPin className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-slate-100">
                  Open to relocation / Remote work
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
