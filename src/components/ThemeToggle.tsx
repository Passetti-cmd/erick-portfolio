import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useContent } from "../i18n";

type Theme = "light" | "dark";

const systemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// index.html applies a saved choice before first paint; this keeps it in sync.
const ThemeToggle = () => {
  const { t } = useContent();
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const attr = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(attr ?? systemTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the choice just won't persist */
    }
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full text-ink2 transition-colors hover:text-ink"
      aria-label={theme === "dark" ? t.nav.toLight : t.nav.toDark}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme && (
          <motion.span
            key={theme}
            initial={{ y: 14, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 40 }}
            transition={{ duration: 0.22 }}
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
