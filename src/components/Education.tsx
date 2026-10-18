import { Section } from "./ui";
import { useContent } from "../i18n";

const Education = () => {
  const { education, certifications, t } = useContent();
  return (
  <Section id="education" title={t.nav.education}>
    <ul className="space-y-10">
      {education.map((e) => (
        <li key={e.institution} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <p className="text-[0.95rem] text-ink3">{e.period}</p>
          <div>
            <h3 className="text-[1.35rem] font-semibold leading-tight">
              {e.field}
              {e.status && (
                <span className="ml-3 inline-block translate-y-[-0.15em] rounded-full bg-signal/10 px-2.5 py-0.5 align-middle text-[0.8rem] font-medium text-signal">
                  {e.status}
                </span>
              )}
            </h3>
            <p className="mt-1 text-ink2">
              {e.degree}, {e.institution}
              {e.location && `, ${e.location}`}
            </p>
            <p className="mt-3 max-w-[60ch] text-ink2">{e.note}</p>
          </div>
        </li>
      ))}
    </ul>

    <h3 className="mt-20 text-[1.35rem] font-semibold">{t.sections.certifications}</h3>
    <ul className="mt-4">
      {certifications.map((c) => (
        <li
          key={c.title}
          className="grid gap-1 border-t border-rule py-5 last:border-b sm:grid-cols-[11rem_1fr] sm:gap-8"
        >
          <p className="text-[0.95rem] text-ink3">{c.date}</p>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <div>
              <p className="text-[1.1rem] font-medium leading-snug">{c.title}</p>
              <p className="text-ink2">{c.issuer}</p>
            </div>
            <p className="text-[0.9rem] text-ink3">{c.skills.join(", ")}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
  );
};

export default Education;
