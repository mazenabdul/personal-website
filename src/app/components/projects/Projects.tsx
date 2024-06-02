import { PROJECTS } from "@/lib/projects";
import { BREAKPOINTS } from "@/lib/screen";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledProjects = styled.div`
  padding: 32px 48px;
  .cards-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (max-width: ${BREAKPOINTS.Mobile}) {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      height: auto;
    }
  }
`;

export default function Projects() {
  return (
    <StyledProjects>
      <h1>My Projects - </h1>
      <div className="cards-container">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </StyledProjects>
  );
}
