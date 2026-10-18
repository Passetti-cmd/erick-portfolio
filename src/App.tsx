import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "motion/react";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { metaForPath } from "./content/meta";
import { LangProvider, useContent } from "./i18n";

// Runs once the old page has faded out. Pages with a #section are scrolled
// by Home on mount; everything else starts at the top.
const scrollAfterRouteChange = () => {
  if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
};

const Shell = () => {
  const location = useLocation();
  const { lang, t } = useContent();

  useEffect(() => {
    document.title = metaForPath(location.pathname, lang).title;
  }, [location.pathname, lang]);

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.skip}
      </a>
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <AnimatePresence mode="wait" initial={false} onExitComplete={scrollAfterRouteChange}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LangProvider>
        <Shell />
      </LangProvider>
    </MotionConfig>
  );
}

export default App;
