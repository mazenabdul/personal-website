"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		scroll-behavior: smooth !important;
	}
  body {
    height: 100vh;
    background-color: #f5f5f5;
  }
  p {
    font-size: 22px;
    margin-block-start: 0;
    margin-block-end: 0;
	}
`;
