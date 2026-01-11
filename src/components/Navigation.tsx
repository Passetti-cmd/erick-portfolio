import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gradient">
            Erick Passetti
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <MobileMenu items={navItems} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const MobileMenu = ({ items }: { items: typeof navItems }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-slate-300 hover:text-cyan-400 transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 glass border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-3">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                      setOpen(false)
                    }
                  }}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

