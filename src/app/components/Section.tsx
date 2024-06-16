import { BREAKPOINTS } from "@/lib/screen";
import styled from "styled-components";

export const Section = styled.section`
  padding: 32px 48px;
  @media (max-width: ${BREAKPOINTS.Mobile}) {
    padding: 32px 16px;
  }
`;
