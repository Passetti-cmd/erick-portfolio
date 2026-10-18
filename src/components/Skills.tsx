import { Section } from "./ui";
import { useContent } from "../i18n";

const Skills = () => {
  const { skillGroups, t } = useContent();
  return (
  <Section id="skills" title={t.nav.skills} intro={t.sections.skillsIntro}>
    <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="border-t border-ink pt-4">
          <dt className="text-[1.35rem] font-semibold tracking-[-0.01em]">{group.title}</dt>
          <dd className="mt-4">
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
  );
};

export default Skills;
