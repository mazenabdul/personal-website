import { PROJECTS } from "@/lib/projects";
import { BREAKPOINTS } from "@/lib/screen";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { SectionTitle } from "../SectionTitle";

const StyledProjects = styled.div`
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
      <SectionTitle title="Projects" />
      <div className="cards-container">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </StyledProjects>
  );
}
