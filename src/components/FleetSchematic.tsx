import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useContent } from "../i18n";

/*
 * Simplified drawing of the quoting fleet I run at work: broker requests go
 * to a pool of Playwright robots, the robots drive insurer portals, results
 * land in S3 and logs/metrics in CloudWatch. Illustration only, not live data.
 */

const LANES = 6;
const laneY = (i: number) => 104 + i * 38;
const portalY = [118, 198, 278];

// Each lane works for a different length of time, like real runs do.
const laneDur = [3.1, 3.9, 2.7, 3.5, 4.4, 2.9];
// Lane index 4 hits a changed selector and retries.
const RETRY_LANE = 4;

const LOG_SCRIPT = [
  ["robot-2", "quote completed", "2m54s"],
  ["robot-4", "portal session renewed", ""],
  ["robot-5", "selector changed, retrying with fallback", "warn"],
  ["robot-5", "quote completed", "3m08s"],
  ["robot-1", "results uploaded to s3", ""],
  ["robot-6", "quote completed", "2m41s"],
  ["robot-3", "trace exported to cloudwatch", ""],
  ["robot-1", "quote completed", "2m59s"],
  ["robot-4", "quote completed", "3m12s"],
  ["robot-2", "portal returned 503, backing off 2s", "warn"],
  ["robot-2", "quote completed", "3m04s"],
  ["robot-6", "metrics flushed", ""],
] as const;

const VISIBLE_LINES = 4;

const stamp = (n: number) => {
  const total = 14 * 3600 + 2 * 60 + 11 + n * 7;
  const h = Math.floor(total / 3600) % 24;
  const m = Math.floor(total / 60) % 60;
  const s = total % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
};

const LogTicker = ({ running, label }: { running: boolean; label: string }) => {
  const [tick, setTick] = useState(VISIBLE_LINES);

  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1700);
    return () => window.clearInterval(id);
  }, [running]);

  const lines = Array.from({ length: VISIBLE_LINES }, (_, k) => {
    const n = tick - VISIBLE_LINES + k;
    const [robot, msg, extra] = LOG_SCRIPT[n % LOG_SCRIPT.length];
    return { n, robot, msg, extra };
  });

  return (
    <ol
      className="relative h-[6.5rem] overflow-hidden px-4 py-3 font-mono text-[0.72rem] leading-[1.55rem] sm:text-[0.78rem]"
      aria-label={label}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {lines.map(({ n, robot, msg, extra }) => (
          <motion.li
            key={n}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-3 whitespace-nowrap"
          >
            <span className="text-ink3">{stamp(n)}</span>
            <span className="text-ink2">{robot}</span>
            <span className={extra === "warn" ? "text-warn" : "text-ink"}>
              {msg}
            </span>
            {extra && extra !== "warn" && (
              <span className="text-ok">{extra}</span>
            )}
          </motion.li>
        ))}
      </AnimatePresence>
    </ol>
  );
};

const FleetSchematic = () => {
  const { t } = useContent();
  const s = t.schematic;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });

  return (
    <figure ref={ref} className="relative">
      <div className="overflow-hidden rounded-2xl border border-rule bg-surface/80 shadow-[0_1px_0_rgb(var(--rule)),0_24px_60px_-30px_rgb(var(--ink)/0.25)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-rule px-4 py-2.5 text-sm">
          <span className="text-ink2">{s.header}</span>
          <span className="flex items-center gap-2 text-ink2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            {s.running}
          </span>
        </div>

        <svg
          viewBox="0 0 540 420"
          className="block h-auto w-full"
          role="img"
          aria-labelledby="schematic-title schematic-desc"
        >
          <title id="schematic-title">{s.title}</title>
          <desc id="schematic-desc">{s.desc}</desc>

          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" className="fill-rule" />
            </pattern>
          </defs>
          <rect width="540" height="420" fill="url(#dots)" opacity="0.7" />

          {/* Wires */}
          <g className="stroke-rule" strokeWidth="1.25" fill="none">
            <path id="w-in" d="M118 214 H168" />
            {Array.from({ length: LANES }, (_, i) => (
              <path
                key={i}
                id={`w-out-${i}`}
                d={`M372 ${laneY(i)} C 396 ${laneY(i)}, 396 ${portalY[i % 3]}, 420 ${portalY[i % 3]}`}
              />
            ))}
            <path id="w-s3" d="M230 334 V 366" />
            <path id="w-cw" d="M310 334 V 366" />
          </g>

          {/* Brokers */}
          <g>
            <rect x="16" y="184" width="102" height="60" rx="10" className="fill-bg stroke-ink/70" strokeWidth="1.25" />
            <text x="67" y="211" textAnchor="middle" className="fill-ink text-[13px] font-medium">{s.brokers}</text>
            <text x="67" y="228" textAnchor="middle" className="fill-ink3 text-[10.5px]">{s.requests}</text>
          </g>

          {/* Fleet */}
          <g>
            <rect x="168" y="62" width="204" height="272" rx="14" className="fill-bg stroke-ink/70" strokeWidth="1.25" />
            <text x="184" y="86" className="fill-ink text-[13px] font-medium">{s.robots}</text>
            <text x="356" y="86" textAnchor="end" className="fill-ink3 text-[10.5px]">{s.onEc2}</text>
            {Array.from({ length: LANES }, (_, i) => {
              const y = laneY(i);
              const retry = i === RETRY_LANE;
              return (
                <g key={i}>
                  <circle cx="190" cy={y} r="4" className="fill-ok" />
                  {retry && (
                    <circle cx="190" cy={y} r="4" className="packet fill-warn" opacity="0">
                      <animate
                        attributeName="opacity"
                        values="0;0;1;1;0"
                        keyTimes="0;0.45;0.5;0.72;0.78"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                  <text x="202" y={y + 4} className="fill-ink2 font-mono text-[10.5px]">
                    robot-{i + 1}
                  </text>
                  <rect x="262" y={y - 2} width="96" height="4" rx="2" className="fill-rule" />
                  <rect
                    x="262"
                    y={y - 2}
                    width="96"
                    height="4"
                    rx="2"
                    className={`packet ${retry ? "fill-warn" : "fill-signal"}`}
                  >
                    <animate
                      attributeName="width"
                      values="0;96;96"
                      keyTimes="0;0.92;1"
                      dur={`${laneDur[i]}s`}
                      begin={`${(i * 0.37).toFixed(2)}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>
              );
            })}
          </g>

          {/* Portals */}
          {portalY.map((y, i) => (
            <g key={i}>
              <rect x="420" y={y - 24} width="104" height="48" rx="10" className="fill-bg stroke-ink/70" strokeWidth="1.25" />
              <text x="472" y={y - 3} textAnchor="middle" className="fill-ink text-[12px] font-medium">{s.portal}</text>
              <text x="472" y={y + 13} textAnchor="middle" className="fill-ink3 text-[10.5px]">{s.thirdParty}</text>
            </g>
          ))}

          {/* Storage and observability */}
          <g>
            <rect x="180" y="366" width="100" height="42" rx="10" className="fill-bg stroke-ink/70" strokeWidth="1.25" />
            <text x="230" y="384" textAnchor="middle" className="fill-ink text-[12px] font-medium">S3</text>
            <text x="230" y="399" textAnchor="middle" className="fill-ink3 text-[10.5px]">{s.results}</text>
            <rect x="290" y="366" width="120" height="42" rx="10" className="fill-bg stroke-ink/70" strokeWidth="1.25" />
            <text x="350" y="384" textAnchor="middle" className="fill-ink text-[12px] font-medium">CloudWatch</text>
            <text x="350" y="399" textAnchor="middle" className="fill-ink3 text-[10.5px]">{s.observability}</text>
          </g>

          {/* Packets travelling the wires */}
          <g className="packet">
            {[0, 0.8, 1.6].map((b) => (
              <circle key={`in-${b}`} r="3" className="fill-signal">
                <animateMotion dur="2.4s" begin={`${b}s`} repeatCount="indefinite">
                  <mpath href="#w-in" />
                </animateMotion>
              </circle>
            ))}
            {Array.from({ length: LANES }, (_, i) => (
              <circle key={`out-${i}`} r="2.6" className="fill-signal">
                <animateMotion dur="1.8s" begin={`${(i * 0.53).toFixed(2)}s`} repeatCount="indefinite">
                  <mpath href={`#w-out-${i}`} />
                </animateMotion>
              </circle>
            ))}
            <circle r="2.6" className="fill-ok">
              <animateMotion dur="1.6s" begin="0.4s" repeatCount="indefinite">
                <mpath href="#w-s3" />
              </animateMotion>
            </circle>
            <circle r="2.6" className="fill-ok">
              <animateMotion dur="1.3s" begin="0.9s" repeatCount="indefinite">
                <mpath href="#w-cw" />
              </animateMotion>
            </circle>
          </g>
        </svg>

        <div className="border-t border-rule">
          <LogTicker running={inView} label={s.logLabel} />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-ink3">
        {s.caption}
      </figcaption>
    </figure>
  );
};

export default FleetSchematic;
