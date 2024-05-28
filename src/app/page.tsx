"use client";

import Hero from "./components/Hero";
import styled from "styled-components";
import ProjectCard from "./components/ProjectCard";

const StyledProjects = styled.div`
  padding: 32px 48px;
  height: 85%;

  .cards-container {
    width: 100%;
    height: 85%;
  }
`;

export default function Main() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <section id="#hero" style={{ height: "100%" }}>
          <Hero />
        </section>
      </div>
      <StyledProjects>
        <h1>My Projects - </h1>
        <div className="cards-container">
          <ProjectCard />
        </div>
      </StyledProjects>
    </>
  );
}
