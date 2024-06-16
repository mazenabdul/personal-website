import { BREAKPOINTS } from "@/lib/screen";
import { Button, Paper, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";

const REQUIRED_FIELD = "This field is required";

const StyledContactContainer = styled.div`
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
      padding: 16px;

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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setFormValues({ name: null, email: null, details: null });
    toast(`Your request has been submitted. I'll be in touch!`, {
      type: "success",
      position: "bottom-right",
      theme: "colored",
      style: {
        background: "#6c63ff",
      },
    });
  };

  return (
    <form
      onSubmit={submitForm}
      method="post"
      data-netlify="true"
      name="contact-form"
    >
      <input type="hidden" name="contact-form" value="contact-form" />
      <StyledContactContainer>
        <SectionTitle title="Contact" />
        <div className="contact-container">
          <Paper className="form-card" shadow="md" radius="md">
            <div className="input-container">
              <p style={{ textAlign: "center" }}>Want to get in touch?</p>
              <TextInput
                name="name"
                label="Name"
                style={{ width: "90%" }}
                size="md"
                radius="md"
                error={getErrorMessage("name")}
                onChange={({ target: { value } }) =>
                  setFormValues({ ...formValues, name: value })
                }
                value={formValues.name || ""}
              />
              <TextInput
                name="email"
                label="Email"
                style={{ width: "90%" }}
                size="md"
                radius="md"
                error={getErrorMessage("email")}
                onChange={({ target: { value } }) =>
                  setFormValues({ ...formValues, email: value })
                }
                value={formValues.email || ""}
              />
              <Textarea
                name="details"
                minRows={3}
                style={{ width: "90%" }}
                placeholder="Enter any additional details you'd like for me to know"
                onChange={({ target: { value } }) =>
                  setFormValues({ ...formValues, details: value })
                }
                value={formValues.details || ""}
              />
              <Button
                style={{ width: "90%" }}
                variant="filled"
                color="#6c63ff"
                fullWidth
                disabled={isDisabled}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Paper>
        </div>
      </StyledContactContainer>
    </form>
  );
}
