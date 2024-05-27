"use client";

import Image from "next/image";
import styled from "styled-components";
import githubIcon from "@/public/Github.svg";
import linkedinIcon from "@/public/Linkedin.svg";
import coverImage from "@/public/Hero.svg";
import { SOCIAL_LINKS } from "@/lib/links";
import { BREAKPOINTS } from "@/lib/screen";
import SocialLink from "@/components/SocialLink";

const StyledHeroContainer = styled.div`
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(108, 99, 255, 1) 0%,
    rgba(245, 245, 245, 1) 40%
  );
  @media (max-width: ${BREAKPOINTS.Mobile}) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${BREAKPOINTS.Mobile}) {
      position: absolute;
      top: 25%;
      left: 15%;
      z-index: 2;
    }

    .hero-greeting {
      font-size: 3rem;
    }

    .name {
      color: #6c63ff;
      font-size: 5rem;
      text-align: center;
      text-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);

      .last-name {
        color: black;
      }
    }
  }

  .hero-image {
    margin-top: 16px;
    width: fit-content;
    height: fit-content;
    @media (max-width: ${BREAKPOINTS.Mobile}) {
      width: 70%;
    }
    @media (min-width: ${BREAKPOINTS.Mobile}) {
      position: absolute;
      top: 12%;
      left: 45%;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHeroContainer>
      <div className="text-container">
        <p className="hero-greeting">Hello! 👋🏻 I&apos;m</p>
        <p className="name">
          Mazen <span className="last-name">Abdul</span>
        </p>
        <p>👨🏻‍💻 Full Stack Software Engineer</p>
        <p>🌎 Chicago, IL</p>
        <SocialLink
          name="Github"
          imageSrc={githubIcon}
          linkSrc={SOCIAL_LINKS.Github}
          width={24}
          height={24}
        />
        <SocialLink
          name="LinkedIn"
          imageSrc={linkedinIcon}
          width={28}
          height={28}
          linkSrc={SOCIAL_LINKS.Linkedin}
        />
      </div>
      <div className="hero-image">
        <Image
          priority
          style={{ width: "100%", height: "100%" }}
          alt="hero-image"
          src={coverImage}
        />
      </div>
    </StyledHeroContainer>
  );
}
