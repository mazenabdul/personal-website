import styled from "styled-components";
import { Button } from "@mantine/core";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

type TProjectButtonsProps = {
  showDemo: boolean;
  repoUrl: string;
  demoUrl: string;
};

export default function ProjectButtons({
  showDemo,
  repoUrl,
  demoUrl,
}: TProjectButtonsProps) {
  return (
    <StyledButtonContainer>
      <Button
        component="a"
        href={repoUrl}
        variant="filled"
        color="#6c63ff"
        fullWidth
        target="_blank"
      >
        View on Github
      </Button>
      <Button
        component="a"
        disabled={!showDemo}
        href={demoUrl}
        variant="outline"
        color="#6c63ff"
        fullWidth
        target="_blank"
      >
        View Demo
      </Button>
    </StyledButtonContainer>
  );
}
