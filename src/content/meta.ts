import { SITE_URL, profile } from "./profile";
import { getProject, projects } from "./projects";

export type PageMeta = {
  title: string;
  description: string;
  /** Path relative to the site root, with leading and trailing slash. */
  path: string;
};

const homeMeta: PageMeta = {
  title: `${profile.name}, Backend Engineer`,
  description: profile.summary,
  path: "/",
};

export const notFoundMeta: PageMeta = {
  title: `Page not found | ${profile.name}`,
  description: profile.summary,
  path: "/404/",
};

export const metaForPath = (pathname: string, lang: "en" | "pt" = "en"): PageMeta => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/")
    return lang === "pt" ? { ...homeMeta, title: `${profile.name}, Engenheiro Backend` } : homeMeta;
  const match = clean.match(/^\/project\/([^/]+)$/);
  const project = match ? getProject(match[1]) : undefined;
  if (!project)
    return lang === "pt" ? { ...notFoundMeta, title: `Página não encontrada | ${profile.name}` } : notFoundMeta;
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
    path: `/project/${project.id}/`,
  };
};

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;

/** Every page written to disk by scripts/prerender.mjs. */
export const prerenderRoutes = [
  { url: "/", file: "index.html", meta: homeMeta },
  ...projects.map((p) => ({
    url: `/project/${p.id}/`,
    file: `project/${p.id}/index.html`,
    meta: metaForPath(`/project/${p.id}`),
  })),
  { url: "/404/", file: "404.html", meta: notFoundMeta },
];
