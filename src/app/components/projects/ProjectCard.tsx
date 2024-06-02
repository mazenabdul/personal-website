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
  min-height: 510px;
  max-width: 400px;
  padding: 32px;
  height: fit-content;

  @media (max-width: ${BREAKPOINTS.Mobile}) {
    width: 90%;
    max-width: 90%;
  }

  .card-image {
    display: flex;
    justify-content: center;
    height: 65%;
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
        <Image
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "5px",
          }}
          src={image ?? heroImage}
          alt="hero"
        />
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
        <Card.Section style={{ textAlign: "center", minHeight: "65px" }}>
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