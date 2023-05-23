import { DefaultTheme } from "styled-components";

const size = {
  desktop: "1024px",
  tablet: "950px",
  mobile: "500px",
};

const responsive = {
  desktop: `(max-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
};

const colors = {
  yellow: "#ffc700",
  backgroundBlack: "#2b2835",
};

const theme: DefaultTheme = {
  responsive,
  colors,
};

export default theme;
