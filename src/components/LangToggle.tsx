import { motion } from "motion/react";
import { useContent, type Lang } from "../i18n";

const options: { value: Lang; label: string; name: string }[] = [
  { value: "en", label: "EN", name: "English" },
  { value: "pt", label: "PT", name: "Português" },
];

// Rendered twice (desktop and mobile bars), so each needs its own layoutId.
const LangToggle = ({ id }: { id: string }) => {
  const { lang, setLang, t } = useContent();

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.language}
      className="relative flex items-center rounded-full border border-rule p-0.5 text-[0.8rem] font-medium"
    >
      {options.map((o) => {
        const active = lang === o.value;
        return (
          <button
            key={o.value}
            role="radio"
            aria-checked={active}
            aria-label={o.name}
            lang={o.value === "pt" ? "pt-BR" : "en"}
            onClick={() => setLang(o.value)}
            className={`relative z-10 rounded-full px-2.5 py-1 transition-colors ${
              active ? "text-bg" : "text-ink2 hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`lang-active-${id}`}
                className="absolute inset-0 -z-10 rounded-full bg-ink"
                transition={{ type: "spring", stiffness: 500, damping: 36 }}
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
};

export default LangToggle;
