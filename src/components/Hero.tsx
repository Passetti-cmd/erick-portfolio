import { useRef } from "react";
import { motion } from "motion/react";
import { Download, Github, Linkedin } from "lucide-react";
import FleetSchematic from "./FleetSchematic";
import Metrics from "./Metrics";
import { useContent } from "../i18n";

const ease = [0.22, 1, 0.36, 1] as const;

// The one orchestrated moment on the page: the name arrives wide and
// compresses into place, then the copy and the schematic follow.
const NameLine = ({ text, delay }: { text: string; delay: number }) => (
  <span className="block overflow-hidden pb-[0.06em]">
    <motion.span
      className="block"
      initial={{ y: "105%", "--wdth": 100 } as never}
      animate={{ y: "0%", "--wdth": 75 } as never}
      transition={{
        y: { duration: 0.9, delay, ease },
        "--wdth": { duration: 1.4, delay: delay + 0.15, ease },
      }}
      style={{ fontVariationSettings: '"wdth" var(--wdth)' }}
    >
      {text}
    </motion.span>
  </span>
);

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const scrollToId = (e: React.MouseEvent, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ block: "start" });
};

const Hero = () => {
  const { t, profile, cvUrl } = useContent();
  const ref = useRef<HTMLElement>(null);

  // A soft light follows the pointer across the blueprint grid.
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const [first, last] = profile.name.split(" ");

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={onPointerMove}
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 md:pt-32"
    >
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 [@media(hover:hover)]:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 70%) var(--my, 30%), rgb(var(--signal) / 0.09), transparent 70%)",
        }}
      />

      <div className="page relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h1
              id="hero-title"
              className="display text-[clamp(4.5rem,17vw,10.5rem)] leading-[0.86] tracking-[-0.03em]"
            >
              <NameLine text={first} delay={0.05} />
              <NameLine text={last} delay={0.18} />
              <span className="sr-only">, {profile.role}</span>
            </h1>

            <motion.p
              {...fadeUp(0.7)}
              className="mt-8 max-w-[30ch] text-[1.4rem] leading-snug text-ink md:text-[1.6rem]"
            >
              {t.hero.lead}
            </motion.p>

            <motion.p {...fadeUp(0.8)} className="mt-4 max-w-[46ch] text-ink2">
              {t.hero.sub(profile.location)}
            </motion.p>

            <motion.div {...fadeUp(0.9)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" onClick={(e) => scrollToId(e, "work")} className="btn-primary">
                {t.hero.seeWork}
              </a>
              <a href="#contact" onClick={(e) => scrollToId(e, "contact")} className="btn-ghost">
                {t.hero.emailMe}
              </a>
              {cvUrl && (
                <a href={cvUrl} download className="btn-ghost">
                  <Download className="h-4 w-4" />
                  {t.hero.downloadCv}
                </a>
              )}
              <span className="mx-1 hidden h-6 w-px bg-rule sm:block" aria-hidden />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.github}
                className="grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.linkedin}
                className="grid h-11 w-11 place-items-center rounded-full text-ink2 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease }}
          >
            <FleetSchematic />
          </motion.div>
        </div>

        <motion.div {...fadeUp(1.1)} className="mt-16 md:mt-20">
          <Metrics />
        </motion.div>
      </div>
      <div className="h-20 md:h-28" />
    </section>
  );
};

export default Hero;
