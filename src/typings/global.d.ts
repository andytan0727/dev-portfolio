declare module "@theme-ui/presets" {
  export const deep: any = {
    styles: {},
  };

  export const swiss: any = {
    styles: {},
  };
}

declare module "theme-ui" {
  export { ThemeProvider } from "theme-ui";

  export const jsx: any;
  export const useColorMode: any;
  export const useThemeUI: any;
}
