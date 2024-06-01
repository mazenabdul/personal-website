import { type TProject } from "../types";

export const PROJECTS: TProject[] = [
  {
    title: "Github Finder",
    description:
      "A web app allowing you to search, find & display Github profiles & their stats.",
    tech: ["React", "JavaScript", "Axios", "Netflify"],
    repoUrl: "https://github.com/mazenabdul/GithubFinder",
    demoUrl: "https://youthful-austin-44ecaf.netlify.app/",
  },
  {
    title: "Admin Panel",
    description: "A React/Redux admin panel with CRUD functionality.",
    tech: ["React", "Redux", "JavaScript", "Materialize CSS"],
    repoUrl: "https://github.com/mazenabdul/AdminPanel",
    demoUrl: "",
  },
  {
    title: "Sample React/Docker App",
    description:
      "An example of a React app, built with Docker and deployed onto AWS using Github Actions.",
    tech: ["React", "JavaScript", "Docker", "AWS"],
    repoUrl: "https://github.com/mazenabdul/react-docker-aws",
    demoUrl: "",
  },
  {
    title: "Smart ECG (Back end)",
    description:
      "A Node JS, Express & MongoDB back end to power the Smart ECG mobile app.",
    tech: ["Node.js", "JavaScript", "Express", "MongoDB"],
    repoUrl: "https://github.com/mazenabdul/SmartECG-server",
    demoUrl: "",
  },
  {
    title: "Facial Recogition (Front end)",
    description:
      "A full-stack React app allowing you to sign up, upload a picture and automatically detects where the face is.",
    tech: ["React", "Node.js", "Javascript"],
    repoUrl: "https://github.com/mazenabdul/facerecognition",
    demoUrl: "https://mazenabdul.github.io/facerecognition/",
  },
  {
    title: "Facial Recogition (Back end)",
    description:
      "A Node.Js, Express & MySQL back end powering the Facial Recognition web app.",
    tech: ["Node.js", "Express", "MySQL"],
    repoUrl: "https://github.com/mazenabdul/FaceBackEnd",
    demoUrl: "",
  },
];
