"use client";

import Image from "next/image";
import styled from "styled-components";

type TSocialLinkProps = {
  name: string;
  width: number;
  height: number;
  linkSrc: string;
  imageSrc: string;
};

const StyledSocialLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 310px;

  p {
    margin-left: 10px;
  }
`;
export default function SocialLink({
  name,
  height,
  linkSrc,
  imageSrc,
  width,
}: TSocialLinkProps) {
  return (
    <StyledSocialLink>
      <a rel="noopener noreferrer" href={linkSrc} target="_blank">
        <Image
          width={width}
          height={height}
          src={imageSrc}
          alt={`${name}-social-link`}
        />
      </a>
      <p>{name}</p>
    </StyledSocialLink>
  );
}
