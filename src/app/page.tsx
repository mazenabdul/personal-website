"use client";

import Hero from "./components/Hero";
import { Card } from "@mantine/core";
import styled from "styled-components";

const StyledProjects = styled.div`
  padding: 48px;
  height: 85%;

  .cards-container {
    width: 100%;
    height: 85%;

    .card {
      width: 35%;
      height: 80%;

      .card-image {
        height: 65%;
        margin-bottom: 24px;
      }

      .card-description {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
  .

`;
export default function Main() {
  return (
    <>
      <div style={{ height: "85%" }}>
        <section id="#hero">
          <Hero />
        </section>
      </div>
      <StyledProjects style={{ padding: "48px" }}>
        <h1>My Projects - </h1>
        <div className="cards-container">
          <Card className="card" shadow="lg" radius="lg" withBorder>
            <Card.Section className="card-image">Image here</Card.Section>
            <div className="card-description">
              <Card.Section>List of pills for tech stack</Card.Section>
              <Card.Section>Description of project here</Card.Section>
              <Card.Section>Button CTA here</Card.Section>
            </div>
          </Card>
        </div>
      </StyledProjects>
    </>
  );
}
