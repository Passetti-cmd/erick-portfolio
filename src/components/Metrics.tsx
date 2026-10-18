import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import type { Metric } from "../content/profile";
import { useContent } from "../i18n";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/*
 * Before → after figures. The server renders the final values; on the client
 * the number runs down from "before" to "after" while the bar shrinks, so the
 * improvement is something you watch rather than read.
 */
const Delta = ({ metric, index }: { metric: Metric; index: number }) => {
  const ref = useRef<HTMLLIElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { before, after, unit, approx, display, label } = metric;
  const ratio = before ? after / before : 1;

  useEffect(() => {
    if (!inView || before === undefined || reducedMotion()) return;
    const el = valueRef.current;
    if (!el) return;
    const controls = animate(before, after, {
      duration: 1.6,
      delay: 0.25 + index * 0.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, before, after, index]);

  return (
    <li ref={ref} className="flex flex-col gap-3 py-5 sm:px-6 sm:first:pl-0">
      <p className="display text-[3rem] leading-none sm:text-[3.5rem]">
        {before !== undefined && (
          <span className="text-ink3">
            {approx && "~"}
            {before}
            <span className="mx-2 inline-block text-[0.6em] align-[0.2em]">→</span>
          </span>
        )}
        {approx && "~"}
        <span ref={valueRef}>{display ?? after}</span>
        {unit && <span className="ml-1 text-[0.5em] text-ink2">{unit}</span>}
      </p>

      {before !== undefined ? (
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-rule" aria-hidden>
          <div
            className="absolute inset-0 origin-left rounded-full bg-signal transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `scaleX(${inView ? ratio : 1})`,
              transitionDelay: `${250 + index * 150}ms`,
            }}
          />
        </div>
      ) : (
        <div className="flex h-1.5 gap-1" aria-hidden>
          {Array.from({ length: after }, (_, i) => (
            <motion.span
              key={i}
              className="h-full flex-1 rounded-full bg-ok"
              initial={{ opacity: 0.15 }}
              animate={inView ? { opacity: i < after - 1 ? 1 : 0.5 } : undefined}
              transition={{ delay: 0.25 + i * 0.12 }}
            />
          ))}
        </div>
      )}

      <p className="text-[0.95rem] text-ink2">{label}</p>
    </li>
  );
};

const Metrics = () => {
  const { metrics, t } = useContent();
  return (
  <ul
    aria-label={t.hero.metricsLabel}
    className="grid divide-y divide-rule border-y border-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0"
  >
    {metrics.map((m, i) => (
      <Delta key={i} metric={m} index={i} />
    ))}
  </ul>
  );
};

export default Metrics;
