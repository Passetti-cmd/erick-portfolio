import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./ui";
import type { Project } from "../content/projects";
import { useContent } from "../i18n";

const Stack = ({ items }: { items: string[] }) => {
  const { t } = useContent();
  return (
  <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.stack}>
    {items.map((tech) => (
      <li key={tech} className="chip text-[0.82rem]">
        {tech}
      </li>
    ))}
  </ul>
  );
};

const RepoLink = ({ project }: { project: Project }) => {
  const { t } = useContent();
  return (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={t.projects.onGithub(project.title)}
    className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-rule text-ink2 transition-colors hover:border-ink hover:text-ink"
  >
    <Github className="h-[18px] w-[18px]" />
  </a>
  );
};

/** Large slot for the lead project (browser-fleet, once it ships). */
const Featured = ({ project }: { project: Project }) => (
  <article className="group relative mb-6 overflow-hidden rounded-3xl border border-rule bg-surface p-7 transition-colors hover:border-ink/40 md:p-10">
    <p className="text-ink3">{project.kind}</p>
    <h3 className="display mt-2 text-[2.75rem] md:text-[3.5rem]">
      <Link to={`/project/${project.id}`} className="after:absolute after:inset-0">
        {project.title}
      </Link>
    </h3>
    <p className="mt-4 max-w-[52ch] text-[1.15rem] text-ink">{project.description}</p>
    <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
      <Stack items={project.stack} />
      <div className="flex items-center gap-2">
        <RepoLink project={project} />
        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bg transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </div>
  </article>
);

const Row = ({ project }: { project: Project }) => (
  <li className="group relative border-t border-rule last:border-b">
    <div className="relative -mx-4 grid gap-4 rounded-2xl px-4 py-8 transition-colors duration-300 group-hover:bg-surface sm:-mx-6 sm:px-6 md:grid-cols-[1fr_auto] md:gap-8">
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.015em]">
            <Link
              to={`/project/${project.id}`}
              className="after:absolute after:inset-0 after:rounded-2xl"
            >
              {project.title}
            </Link>
          </h3>
          <span className="text-[0.95rem] text-ink3">{project.kind}</span>
        </div>
        <p className="mt-2 max-w-[56ch] text-[1.1rem] text-ink">{project.tagline}</p>
        <p className="mt-2 max-w-[66ch] text-ink2">{project.description}</p>
        <div className="mt-5">
          <Stack items={project.stack} />
        </div>
      </div>
      <div className="flex items-start gap-2 md:flex-col md:items-end md:justify-between">
        <span
          aria-hidden
          className="grid h-10 w-10 place-items-center rounded-full border border-rule text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-bg"
        >
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
        </span>
        <RepoLink project={project} />
      </div>
    </div>
  </li>
);

const Projects = () => {
  const { projects, t } = useContent();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section
      id="projects"
      title={t.nav.projects}
      intro={t.sections.projectsIntro}
    >
      {featured && <Featured project={featured} />}
      <ul>
        {rest.map((p) => (
          <Row key={p.id} project={p} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
