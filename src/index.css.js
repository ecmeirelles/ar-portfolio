import { createGlobalStyle } from "styled-components";
import { colors } from './shared/variables';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6,
p, span, div, a {
  font-family: 'Inter', sans-serif;
  color: ${colors.charcoal};
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

a {
  text-decoration: none;
}
`;
