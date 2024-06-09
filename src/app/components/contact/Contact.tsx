import { BREAKPOINTS } from "@/lib/screen";
import { Button, Paper, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import styled from "styled-components";

const REQUIRED_FIELD = "This field is required";

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
      height: 500px;
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

type TFormData = Record<"name" | "email" | "details", string | null>;

export default function Contact() {
  const [formValues, setFormValues] = useState<TFormData>({
    name: null,
    email: null,
    details: null,
  });
  const isDisabled = !(!!formValues.name && !!formValues.email);

  const getErrorMessage = (field: keyof TFormData) =>
    formValues[field] !== null && formValues[field]?.length === 0
      ? REQUIRED_FIELD
      : false;

  return (
    <StyledContactContainer>
      <h1>Contact me -</h1>
      <div className="contact-container">
        <Paper className="form-card" shadow="md" radius="md">
          <div className="input-container">
            <p style={{ textAlign: "center" }}>Want to get in touch?</p>
            <TextInput
              label="Name"
              style={{ width: "90%" }}
              size="md"
              radius="md"
              error={getErrorMessage("name")}
              onChange={({ target: { value } }) =>
                setFormValues({ ...formValues, name: value })
              }
            />
            <TextInput
              label="Email"
              style={{ width: "90%" }}
              size="md"
              radius="md"
              error={getErrorMessage("email")}
              onChange={({ target: { value } }) =>
                setFormValues({ ...formValues, email: value })
              }
            />
            <Textarea
              minRows={3}
              style={{ width: "90%" }}
              placeholder="Enter any additional details you'd like for me to know :)"
              onChange={({ target: { value } }) =>
                setFormValues({ ...formValues, details: value })
              }
            />
            <Button
              style={{ width: "90%" }}
              variant="filled"
              color="#6c63ff"
              fullWidth
              disabled={isDisabled}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    </StyledContactContainer>
  );
}
