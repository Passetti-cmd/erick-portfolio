import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Section } from "./ui";
import { useContent } from "../i18n";

const Experience = () => {
  const { experience, t } = useContent();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section
      id="work"
      title={t.nav.work}
      intro={t.sections.workIntro}
    >
      <ol ref={listRef} className="relative">
        {/* Rail, and the part of it you have scrolled past */}
        <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-rule" />
        <motion.span
          aria-hidden
          className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-signal"
          style={{ scaleY: draw }}
        />

        {experience.map((job, i) => {
          const current = job.current;
          return (
            <li key={job.company} className={`relative pl-10 ${i > 0 ? "mt-16" : ""}`}>
              <span aria-hidden className="absolute left-0 top-[0.55rem] flex h-[11px] w-[11px]">
                {current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-50" />
                )}
                <span
                  className={`relative inline-flex h-[11px] w-[11px] rounded-full border-2 ${
                    current ? "border-ok bg-ok" : "border-ink3 bg-bg"
                  }`}
                />
              </span>

              <p className="text-[0.95rem] text-ink3">
                <time>{job.start}</time> – <time>{job.end}</time>
              </p>
              <h3 className="mt-1 text-[1.6rem] font-semibold leading-tight tracking-[-0.01em]">
                {job.title}
                <span className="font-normal text-ink2">, {job.company}</span>
              </h3>
              <p className="mt-1 text-ink3">
                {job.type}, {job.location}
              </p>

              {job.summary && (
                <p className="mt-5 max-w-[60ch] text-[1.125rem] text-ink">{job.summary}</p>
              )}

              <ul className="mt-5 max-w-[66ch] space-y-3 text-ink2">
                {job.highlights.map((h) => (
                  <li key={h} className="relative pl-5">
                    <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink3" />
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default Experience;
