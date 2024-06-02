import styled from "styled-components";
import { Badge } from "@mantine/core";

const StyledBadge = styled(Badge)<{
  color: string;
  children: string;
  variant: string;
}>`
  margin-right: 4px;
  margin-left: 4px;
`;

export default function TechBadge({ name }: { name: string }) {
  return (
    <StyledBadge color="#6c63ff" variant="filled">
      {name}
    </StyledBadge>
  );
}
