import { BREAKPOINTS } from "@/lib/screen";
import { Button, Paper, TextInput, Textarea } from "@mantine/core";
import styled from "styled-components";

const StyledContactContainer = styled.div`
  padding: 32px 48px;
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .form-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 400px;
      width: 50%;
      padding: 32px;

      @media (max-width: ${BREAKPOINTS.Mobile}) {
        width: 100%;
      }

      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
      }
    }
  }
`;

export default function Contact() {
  return (
    <StyledContactContainer>
      <h1>Contact me -</h1>
      <div className="contact-container">
        <Paper className="form-card" shadow="md" radius="md">
          <div className="input-container">
            <p style={{ textAlign: "center" }}>Want to get in touch?</p>
            <TextInput
              style={{ width: "90%" }}
              size="md"
              radius="md"
              placeholder="Name"
            />
            <TextInput
              style={{ width: "90%" }}
              size="md"
              radius="md"
              placeholder="Email"
            />
            <Textarea
              minRows={3}
              style={{ width: "90%" }}
              placeholder="Enter any additional details you'd like for me to know :)"
            />
            <Button
              style={{ width: "90%" }}
              variant="filled"
              color="#6c63ff"
              fullWidth
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    </StyledContactContainer>
  );
}
