import { RESUME_LINK } from "@/lib/links";
import { Button, Modal } from "@mantine/core";
import styled from "styled-components";

const INTRO = `Hey there! 👋🏻 Thanks for checking out my website! 
My name's Mazen Abdul & I'm a Software Engineer from Chicago, IL
I'm currently working over at Mailgun by Sinch as a Front end Software Engineer. 
`;
const BODY = `Overall, 
I enjoy working on building user-friendly interfaces and web apps,
along with learning the evolving landscape of web
development.`;

const RESUME = `
  Need a full look at my previous work & skills? Take a look at my resume by clicking the button below:
`;

const StyledModal = styled(Modal)`
  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    padding: 16px;
  }

  p {
    text-align: center;
    font-size: 16px;
  }
`;

type TAboutMeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutMeModal({ isOpen, onClose }: TAboutMeModalProps) {
  return (
    <StyledModal centered opened={isOpen} title="About me" onClose={onClose}>
      <div className="modal-container">
        <div>
          <p>{INTRO}</p>
        </div>
        <div>
          <p>{BODY}</p>
        </div>
        <div>
          <p>{RESUME}</p>
        </div>
        <div>
          <Button
            color="#6c63ff"
            onClick={() => window.open(RESUME_LINK, "_blank")}
          >
            View resume
          </Button>
        </div>
      </div>
    </StyledModal>
  );
}
