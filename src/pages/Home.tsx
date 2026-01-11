import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="pt-16">
      <section id="home">
        <Hero />
      </section>
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      <section id="education" className="scroll-mt-20">
        <Education />
      </section>
      <section id="certifications" className="scroll-mt-20">
        <Certifications />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  )
}

export default Home

