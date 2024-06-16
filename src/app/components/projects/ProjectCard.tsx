import { Card } from "@mantine/core";
import Image from "next/image";
import heroImage from "@/public/Hero.svg";
import styled from "styled-components";
import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";
import { TProject } from "../../types";
import { BREAKPOINTS } from "@/lib/screen";

type TStyledProps = {
  className?: string;
  children: React.ReactNode;
  shadow: string;
  radius: string;
  withBorder: boolean;
};

const StyledProjectCard = styled(Card)<TStyledProps>`
  width: 35%;
  min-height: 520px;
  max-width: 400px;
  padding: 32px;

  @media (max-width: ${BREAKPOINTS.Mobile}) {
    width: 90%;
    max-width: 90%;
    min-height: 100%;
  }

  .card-image {
    display: flex;
    justify-content: center;
    height: 65%;

    img {
      width: 100%;
      height: 50%;
      min-height: 200px;
      max-height: 200px;
      border-radius: 5px;
    }
  }

  .card-description {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .card-title {
      text-align: center;
    }

    .card-tech {
      display: flex;
      justify-content: center;
      align-items: center;

      .badge-container {
        text-align: center;
      }
    }

    .card-tech-label {
      margin-right: 8px;
    }
  }
`;

export default function ProjectCard({
  project: { title, demoUrl, description, repoUrl, tech, image },
}: {
  project: TProject;
}) {
  return (
    <StyledProjectCard shadow="lg" radius="lg" withBorder>
      <Card.Section className="card-image">
        <Image src={image ?? heroImage} alt="project-preview" />
      </Card.Section>
      <div className="card-description">
        <p className="card-title">{title}</p>
        <Card.Section className="card-tech">
          <div className="badge-container">
            {tech.map((item) => (
              <TechBadge key={item} name={item} />
            ))}
          </div>
        </Card.Section>
        <Card.Section style={{ textAlign: "center", minHeight: "75px" }}>
          {description}
        </Card.Section>
        <Card.Section>
          <ProjectButtons
            repoUrl={repoUrl}
            demoUrl={demoUrl}
            showDemo={!!demoUrl}
          />
        </Card.Section>
      </div>
    </StyledProjectCard>
  );
}
