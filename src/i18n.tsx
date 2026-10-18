import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import {
  about,
  certifications,
  cvFiles,
  education,
  experience,
  metrics,
  profile,
  skillGroups,
} from "./content/profile";
import { projects } from "./content/projects";
import {
  aboutPt,
  certificationsPt,
  educationPt,
  experiencePt,
  locationPt,
  metricsPt,
  projectsPt,
  rolePt,
  skillGroupsPt,
  summaryPt,
} from "./content/pt";
import { ui } from "./content/ui";

export type Lang = "en" | "pt";

const cvUrl = (lang: Lang) => {
  const file = __CV__[lang] ? cvFiles[lang] : __CV__.en ? cvFiles.en : null;
  return file ? `${import.meta.env.BASE_URL}${file}` : null;
};

const content = {
  en: {
    lang: "en" as Lang,
    t: ui.en,
    profile,
    metrics,
    about,
    skillGroups,
    experience,
    education,
    certifications,
    projects,
    cvUrl: cvUrl("en"),
  },
  pt: {
    lang: "pt" as Lang,
    t: ui.pt,
    profile: { ...profile, role: rolePt, location: locationPt, summary: summaryPt },
    metrics: metricsPt,
    about: aboutPt,
    skillGroups: skillGroupsPt,
    experience: experiencePt,
    education: educationPt,
    certifications: certificationsPt,
    projects: projectsPt,
    cvUrl: cvUrl("pt"),
  },
};

export type Content = (typeof content)["en"];

type LangState = Content & { setLang: (lang: Lang) => void };

const LangContext = createContext<LangState | null>(null);

// Prerendered HTML is English; a saved choice is applied after hydration.
export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "pt" || saved === "en") setLangState(saved);
    } catch {
      /* storage blocked: stay in English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<LangState>(
    () => ({
      ...content[lang],
      setLang: (next) => {
        setLangState(next);
        try {
          localStorage.setItem("lang", next);
        } catch {
          /* the choice just won't persist */
        }
      },
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useContent = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useContent must be used inside <LangProvider>");
  return ctx;
};

export const getProjectFor = (list: Content["projects"], id: string | undefined) =>
  list.find((p) => p.id === id);
