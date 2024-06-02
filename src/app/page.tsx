"use client";

import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function Main() {
  return (
    <>
      <section id="#hero" style={{ height: "100%" }}>
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
