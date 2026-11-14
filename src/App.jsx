import { useMemo } from "react";
import { useTheme } from "./hooks/useTheme.js";
import { useActiveSection } from "./hooks/useActiveSection.js";
import { sections } from "./data.js";
import CodeBackdrop from "./components/CodeBackdrop.jsx";
import LineGutter from "./components/LineGutter.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { theme, toggle } = useTheme();
  const ids = useMemo(() => sections.map((s) => s.id), []);
  const active = useActiveSection(ids);

  return (
    <>
      <CodeBackdrop />
      <LineGutter />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
