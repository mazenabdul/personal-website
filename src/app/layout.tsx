import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Barlow } from "next/font/google";
import StyledRegistry from "./components/theme/StyledRegistry";
import { GlobalStyle } from "./components/theme/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <GlobalStyle />
          <MantineProvider>
            <ToastContainer />
            {children}
          </MantineProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
