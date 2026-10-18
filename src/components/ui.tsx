import { ReactNode } from "react";
import { motion } from "motion/react";

/** Route-level wrapper: one quick cross-fade between pages. */
export const Page = ({ children }: { children: ReactNode }) => (
  <motion.main
    id="content"
    className="flex-grow"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.main>
);

/**
 * Display heading. It enters wide and settles into the condensed width,
 * the same move the hero name makes on load.
 */
export const DisplayHeading = ({
  children,
  as: Tag = "h2",
  className = "section-title",
  id,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) => {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ "--wdth": 100, opacity: 0.4 } as never}
      whileInView={{ "--wdth": 75, opacity: 1 } as never}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontVariationSettings: '"wdth" var(--wdth)' }}
    >
      {children}
    </MotionTag>
  );
};

/** Left rail title, right column content. The title sticks on wide screens. */
export const Section = ({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="scroll-mt-20 border-t border-rule"
  >
    <div className="page grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <DisplayHeading id={`${id}-title`}>{title}</DisplayHeading>
          {intro && (
            <p className="mt-4 max-w-[32ch] text-ink2">{intro}</p>
          )}
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  </section>
);
