import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Barlow } from "next/font/google";
import StyledRegistry from "./components/StyledRegistry";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const font = Barlow({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "⚡️ Mazen Abdul | Software Engineer",
  description: "Software Engineer Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledRegistry>
          <MantineProvider>
            <ToastContainer />
            {children}
          </MantineProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
