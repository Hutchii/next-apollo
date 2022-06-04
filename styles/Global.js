import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --black: ${({ theme }) => theme.black};
  --white: ${({ theme }) => theme.white};
  --green: #178142;
  --ibm: 'IBM Plex Sans', sans-serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--ibm);
  background-color: var(--white);
  color: var(--black);
  transition: background-color 0.08s ease;
}

html {
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  color: transparent;
}
:after,
:before {
  content: "";
  position: absolute;
}
.spacer {
  padding: 0 3.2rem 0;
  max-width: 76.2rem;
  margin: 0 auto;
}
`;

export const lightTheme = {
  black: "#111111",
  white: "#f9fafb",
};
export const darkTheme = {
  black: "#f9fafb",
  white: "#111111",
};
