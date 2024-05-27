"use client";

import HeroImg from "@/public/Hero.svg";
import Hero from "./components/Hero";
import { Card } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";
import { Badge } from "@mantine/core";

const StyledProjects = styled.div`
  padding: 32px 48px;
  height: 85%;

  .cards-container {
    width: 100%;
    height: 85%;

    .card {
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
    }
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 4px;
  margin-left: 4px;
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
          <Card className="card" shadow="lg" radius="lg" withBorder>
            <Card.Section className="card-image">
              <Image width={200} height={200} src={HeroImg} alt="hero" />
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
                This is a project that builds a website. It uses Next JS and
                Node.
              </Card.Section>
              <Card.Section>Button CTA here</Card.Section>
            </div>
          </Card>
        </div>
      </StyledProjects>
    </>
  );
}
