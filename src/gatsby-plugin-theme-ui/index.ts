import { deep, swiss } from "@theme-ui/presets";

export default {
  ...deep,
  initialColorMode: "dark",
  colors: {
    modes: {
      light: {
        ...swiss.colors,
      },
      dark: {
        ...deep.colors,
      },
    },
  },
  breakpoints: ["40em", "52em", "64em"],
  buttons: {
    outline: {
      color: "text",
      bg: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "text",
    },
  },
};
