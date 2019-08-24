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
  breakpoints: ["480px", "624px", "768px"],
  buttons: {
    outline: {
      color: "text",
      bg: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "text",
      cursor: "pointer",
    },
  },
};
