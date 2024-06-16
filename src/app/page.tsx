"use client";

import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navigation from "./components/nav/Navigation";
import { Section } from "./components/Section";

export default function Main() {
  return (
    <>
      <section id="nav">
        <Navigation />
      </section>
      <section id="hero" style={{ height: "100%" }}>
        <Hero />
      </section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}
