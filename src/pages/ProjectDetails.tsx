import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { DisplayHeading, Page } from "../components/ui";
import { getProjectFor, useContent } from "../i18n";
import NotFound from "./NotFound";

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="grid gap-4 border-t border-rule py-10 md:grid-cols-12 md:gap-10">
    <h2 className="text-[1.25rem] font-semibold md:col-span-4">{title}</h2>
    <div className="md:col-span-8">{children}</div>
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="max-w-[64ch] space-y-3 text-ink2">
    {items.map((item) => (
      <li key={item} className="relative pl-5">
        <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-ink3" />
        {item}
      </li>
    ))}
  </ul>
);

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { projects, t } = useContent();
  const project = getProjectFor(projects, id);

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <Page>
      <article className="page pb-24 pt-28 md:pt-32">
        <Link
          to={{ pathname: "/", hash: "#projects" }}
          className="inline-flex items-center gap-2 text-ink2 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.project.all}
        </Link>

        <header className="mt-10 pb-12">
          <p className="text-ink3">{project.kind}</p>
          <DisplayHeading as="h1" className="display mt-2 text-[clamp(3rem,9vw,7rem)]">
            {project.title}
          </DisplayHeading>
          <p className="mt-6 max-w-[40ch] text-[1.4rem] leading-snug">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="h-4 w-4" />
              {t.project.code}
            </a>
            <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.stack}>
              {project.stack.map((t) => (
                <li key={t} className="chip text-[0.82rem]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <Block title={t.project.problem}>
          <p className="max-w-[64ch] text-[1.1rem] text-ink">{project.problem}</p>
        </Block>
        <Block title={t.project.solution}>
          <p className="max-w-[64ch] text-ink2">{project.solution}</p>
        </Block>
        <Block title={t.project.challenges}>
          <Bullets items={project.challenges} />
        </Block>
        <Block title={t.project.architecture}>
          <dl className="grid gap-8 sm:grid-cols-2">
            {Object.entries(project.architecture).map(([layer, items]) => (
              <div key={layer}>
                <dt className="font-semibold">{layer}</dt>
                <dd className="mt-2">
                  <ul className="space-y-1.5 text-ink2">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Block>
        <Block title={t.project.security}>
          <Bullets items={project.security} />
        </Block>
        <Block title={t.project.takeaway}>
          <p className="max-w-[64ch] text-ink2">{project.takeaway}</p>
        </Block>

        {next !== project && (
          <Link
            to={`/project/${next.id}`}
            className="group mt-6 flex items-center justify-between gap-6 rounded-3xl border border-rule bg-surface p-7 transition-colors hover:border-ink/40 md:p-10"
          >
            <span>
              <span className="block text-ink3">{t.project.next}</span>
              <span className="display mt-1 block text-[clamp(2rem,5vw,3.5rem)]">{next.title}</span>
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-bg transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        )}
      </article>
    </Page>
  );
};

export default ProjectDetails;
