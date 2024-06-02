import { type StaticImageData } from "next/image";

export type TProject = {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  image?: StaticImageData;
};
