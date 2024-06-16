"use client";
import { ROUTES } from "@/lib/links";
import { BREAKPOINTS } from "@/lib/screen";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import AboutMeModal from "./AboutMeModal";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 24px 32px;

  @media (max-width: ${BREAKPOINTS.Mobile}) {
    justify-content: center;
  }

  a,
  a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default function Navigation() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <StyledNav className="nav-container">
      <AboutMeModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      <Link href={ROUTES.Projects}>
        <p>Projects</p>
      </Link>
      <Link href={ROUTES.Contact}>
        <p>Contact</p>
      </Link>
      <Link href={""} onClick={() => setOpenModal(true)}>
        <p>About</p>
      </Link>
    </StyledNav>
  );
}
