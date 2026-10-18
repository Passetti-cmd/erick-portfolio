import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import { useContent } from "../i18n";

const sectionIds = ["work", "projects", "skills", "about", "education", "contact"] as const;

/** Tracks which home section sits under the nav bar. */
const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...sectionIds].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return active;
};

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, profile } = useContent();
  const onHome = location.pathname === "/";
  const active = useActiveSection(onHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const navItems = sectionIds.map((id) => ({ id, name: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const goTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
      history.replaceState(null, "", `#${id}`);
    } else {
      navigate({ pathname: "/", hash: `#${id}` });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-rule bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="page flex h-16 items-center justify-between" aria-label="Main">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0 })}
          className="display text-[1.6rem] leading-none"
        >
          {profile.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => goTo(e, item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative z-10 block rounded-full px-3.5 py-1.5 text-[0.95rem] transition-colors ${
                    active === item.id ? "text-bg" : "text-ink2 hover:text-ink"
                  }`}
                >
                  {item.name}
                </a>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </li>
            ))}
          </ul>
          <span className="mx-2 h-5 w-px bg-rule" aria-hidden />
          <LangToggle id="desktop" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LangToggle id="mobile" />
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-signal"
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="page flex flex-col pb-6 pt-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => goTo(e, item.id)}
                    className="display block py-2 text-[2rem]"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
