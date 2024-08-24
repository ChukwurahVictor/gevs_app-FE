import { extendTheme, theme } from "@chakra-ui/react";

const colors = Object.freeze({
  bg: {
    white: "#fff",
  },
  brand: {
    main: "#9C0D38",
    green: "#34D1BF",
    white: "#fff",
    gray: "#9FA2B4",
  },
  typography: {
    black: "#000",
    wine: "#9C0D38",
    lightGray: "#474747",
    gray: "#9FA2B4",
    neutral: "#414141",
    red: "#FF0000",
    darkGray: "#757575",
    green: "#34D1BF",
    blue: "#178CD0",
    lightBlue: "#0F63FF14",
    darkBlue: "#0F63FF",
  },
});

const fontSizes = Object.freeze({
  ...theme.fontSizes,
  small: "1.2rem",
  label: "1.4rem",
  paragraph: "1.6rem",
  heading6: "1.6rem",
  heading5: "1.9rem",
  heading4: "2.4rem",
  heading3: "2.9rem",
  heading2: "4rem",
  heading1: "5rem",
});

const fontWeights = Object.freeze({
  ...theme.fontWeights,
  regular: 400,
  medium: 550,
  semiBold: 600,
  bold: 700,
  bolder: 800,
  extraBold: 900,
});

const breakpoints = Object.freeze({
  "2xs": "320px", //@media(min-width:320px)
  xs: "375px", //@media(min-width:375px)
  sm: "530px", //@media(min-width:480px)
  md: "840px", //@media(min-width:770px)
  lg: "1024px", //@media(min-width:1024px)
  xl: "1200px", //@media(min-width:1200px)
  "2xl": "1600px", //@media(min-width:1600px)
  "3xl": "1900px", //@media(min-width:1900px)
});

const styles = Object.freeze({
  global: {
    html: {
      fontSize: "62.5%",
    },
    body: {
      fontFamily: "'Montserrat', sans-serif",
      color: "#000",
      backgroundColor: "#fff",
      fontSize: "1.6rem",
      lineHeight: "1.6",
      fontWeight: "500",
    },
    "*, *::before, *::after": {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
    },
  },
});

export default extendTheme({
  breakpoints,
  colors,
  styles,
  fontWeights,
  fontSizes,
});
