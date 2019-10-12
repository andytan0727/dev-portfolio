import { deep, swiss } from "@theme-ui/presets";

const theme = {
  ...deep,
  initialColorMode: "dark",
  useCustomProperties: true,
  breakpoints: ["40em", "52em", "64em"],
  colors: {
    purple1: "#dbd8e3",
    purple2: "#5c5470",
    purple3: "#352f44",
    purple4: "#2a2438",
    modes: {
      light: {
        ...swiss.colors,
      },
      dark: {
        ...deep.colors,
      },
    },
  },
  buttons: {
    outline: {
      color: "text",
      bg: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "text",
      cursor: "pointer",
    },
    default: {
      color: "text",
      bg: "transparent",
      cursor: "pointer",
    },
  },
};

export default theme;
