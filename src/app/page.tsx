"use client";
import Image from "next/image";
import styled from "styled-components";
import coverImage from "../../public/Hero.svg";

const StyledHeroContainer = styled.div`
  margin-block-start: 0px;
  margin-block-end: 0px;

  .text-container {
    position: absolute;
    top: 25%;
    left: 15%;

    .hero-greeting {
      font-size: 2rem;
    }

    .name {
      color: #6c63ff;
      font-size: 4rem;
    }
  }

  .hero-image {
    position: absolute;
    top: 5%;
    left: 45%;
  }
`;

export default function Main() {
  return (
    <StyledHeroContainer>
      <div className="text-container">
        <p className="hero-greeting">Hi there! 👋🏻 I'm</p>
        <p className="name">Mazen</p>
        <p>Full Stack Software engineer</p>
      </div>
      <div className="hero-image">
        <Image style={{ width: "90%" }} alt="hero-image" src={coverImage} />
      </div>
    </StyledHeroContainer>
  );
}
