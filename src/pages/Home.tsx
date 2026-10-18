import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Education from "../components/Education";
import Contact from "../components/Contact";
import { Page } from "../components/ui";

const Home = () => {
  const { hash } = useLocation();

  // Arriving at /#section, by direct load or from another page.
  useEffect(() => {
    if (hash)
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Page>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Contact />
    </Page>
  );
};

export default Home;
