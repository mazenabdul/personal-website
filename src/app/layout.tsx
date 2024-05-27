import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./globals.css";
import { Delicious_Handrawn } from "next/font/google";
import StyledRegistry from "./components/StyledRegistry";

const font = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "👋🏻 I'm Mazen!",
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
          <MantineProvider>{children}</MantineProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
