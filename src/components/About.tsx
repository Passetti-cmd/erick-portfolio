import { Section } from "./ui";
import { useContent } from "../i18n";

const About = () => {
  const { about, t } = useContent();
  const [lead, ...rest] = about;
  return (
    <Section id="about" title={t.nav.about}>
      <p className="max-w-[34ch] text-[1.6rem] leading-snug md:text-[1.9rem]">{lead}</p>
      <div className="mt-8 max-w-[64ch] space-y-5 text-[1.075rem] text-ink2">
        {rest.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
};

export default About;
