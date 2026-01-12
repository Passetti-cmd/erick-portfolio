import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
  id: string;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/", id: "home" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/") {
      e.preventDefault();
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gradient">
            Erick Passetti
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.href === "/") {
                return (
                  <Link
                    key={item.id}
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="md:hidden">
            <MobileMenu items={navItems} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const MobileMenu = ({ items }: { items: NavItem[] }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-slate-300 hover:text-cyan-400 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
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
              {items.map((item: NavItem) => {
                if (item.href === "/") {
                  return (
                    <Link
                      key={item.id}
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setOpen(false);
                      }}
                      className="block text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setOpen(false);
                      }
                    }}
                    className="block text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
