import { Badge, Card } from "@mantine/core";
import Image from "next/image";
import heroImage from "@/public/Hero.svg";
import styled from "styled-components";

type TStyledProps = {
  className?: string;
  children: React.ReactNode;
  shadow: string;
  radius: string;
  withBorder: boolean;
};

const StyledProjectCard = styled(Card)<TStyledProps>`
  width: 35%;
  padding: 32px;

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
    }

    .card-tech-label {
      margin-right: 8px;
    }
  }
`;

const StyledBadge = styled(Badge)<{
  color: string;
  children: string;
  variant: string;
}>`
  margin-right: 4px;
  margin-left: 4px;
`;

export default function ProjectCard() {
  return (
    <StyledProjectCard shadow="lg" radius="lg" withBorder>
      <Card.Section className="card-image">
        <Image width={200} height={200} src={heroImage} alt="hero" />
      </Card.Section>
      <div className="card-description">
        <p className="card-title">My Project Title</p>
        <Card.Section className="card-tech">
          <div className="card-tech-badge-container">
            <StyledBadge color="#6c63ff" variant="filled">
              TypeScript
            </StyledBadge>
            <StyledBadge color="#6c63ff" variant="filled">
              React
            </StyledBadge>
            <StyledBadge color="#6c63ff" variant="filled">
              Node
            </StyledBadge>
          </div>
        </Card.Section>
        <Card.Section>
          This is a project that builds a website. It uses Next JS and Node.
        </Card.Section>
        <Card.Section>Button CTA here</Card.Section>
      </div>
    </StyledProjectCard>
  );
}
