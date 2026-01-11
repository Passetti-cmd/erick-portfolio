import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-slate-800 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-slate-400 text-sm">
          Built with <span className="text-cyan-400">React</span> & deployed on{' '}
          <span className="text-cyan-400">Vercel</span>
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

