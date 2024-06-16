"use client";

import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Navigation from "./components/nav/Navigation";
import styled from "styled-components";
import { BREAKPOINTS } from "./lib/screen";

const StyledHeroSection = styled.section`
  height: 100%;
  @media (max-width: ${BREAKPOINTS.Mobile}) {
    height: auto;
  }
`;
export default function Main() {
  return (
    <>
      <section id="nav">
        <Navigation />
      </section>
      <StyledHeroSection id="hero">
        <Hero />
      </StyledHeroSection>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
