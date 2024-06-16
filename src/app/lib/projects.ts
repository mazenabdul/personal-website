import { type TProject } from "../types";
import GithubFinder from "@/public/GithubFinder.png";
import AdminPanel from "@/public/AdminPanel.png";
import FacialRecongition from "@/public/SmartBrainFront.png";
import ReactDocker from "@/public/ReactDocker.png";
import SmartEcgBackend from "@/public/SmartEcgBackend.jpg";
import FacialRecognitionBackend from "@/public/SmartBrainBackEnd.jpg";

export const PROJECTS: TProject[] = [
  {
    title: "This website!",
    description:
      "My personal website designed to showcase an overview of my work.",
    tech: ["Next.js", "Typescript", "Styled Components"],
    repoUrl: "https://github.com/mazenabdul/personal-website",
    demoUrl: "",
    image: undefined,
  },
  {
    title: "Github Finder",
    description:
      "A web app allowing you to search, find & display Github profiles & their stats.",
    tech: ["React", "JavaScript", "Axios"],
    repoUrl: "https://github.com/mazenabdul/GithubFinder",
    demoUrl: "https://youthful-austin-44ecaf.netlify.app/",
    image: GithubFinder,
  },
  {
    title: "Admin Panel",
    description:
      "A React/Redux IT logging admin panel with CRUD functionality.",
    tech: ["React", "Redux", "JavaScript"],
    repoUrl: "https://github.com/mazenabdul/AdminPanel",
    demoUrl: "",
    image: AdminPanel,
  },
  {
    title: "Facial Recogition",
    description:
      "A full-stack React app allowing you to sign up, upload a picture and automatically detects where the face is.",
    tech: ["React", "Node.js", "Javascript"],
    repoUrl: "https://github.com/mazenabdul/facerecognition",
    demoUrl: "https://mazenabdul.github.io/facerecognition/",
    image: FacialRecongition,
  },
  {
    title: "Sample React/Docker App",
    description:
      "An example React app built with Docker and deployed onto AWS using Github Actions.",
    tech: ["React", "Docker", "AWS"],
    repoUrl: "https://github.com/mazenabdul/react-docker-aws",
    demoUrl: "",
    image: ReactDocker,
  },
  {
    title: "Smart ECG",
    description:
      "A Node JS, Express & MongoDB back end to power the Smart ECG mobile app.",
    tech: ["Node.js", "Express", "MongoDB"],
    repoUrl: "https://github.com/mazenabdul/SmartECG-server",
    demoUrl: "",
    image: SmartEcgBackend,
  },
];
