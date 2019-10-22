// theme colors
type Colors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  highlight: string;
  purple: string;
  muted: string;
  gray: string;
};

declare module "@theme-ui/presets" {
  export const deep: {
    styles: {};
    colors: Colors;
  };

  export const swiss: {
    styles: {};
    colors: Colors;
  };
}

declare module "react-typed" {
  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    attr?: string;
    loop?: boolean;
    typedRef?: import("react").RefObject;
    className?: string;
    style: import("react").CSSProperties;
  }

  const Typed: React.FC<TypedProps>;

  export default Typed;
}

declare module "*.svg" {
  const SVGNode: React.FC<{
    style?: React.CSSProperties;
  }>;

  export default SVGNode;
}

declare module "theme-ui" {
  export { ThemeProvider } from "theme-ui";
  type ColorMode = "dark" | "light";
  type SetColorMode = (colorMode: ColorMode) => void;

  export const jsx: any;

  export function useColorMode(): [ColorMode, SetColorMode];

  export function useThemeUI(): {
    colorMode: ColorMode;
    setColorMode: SetColorMode;
    theme: typeof import("@src/gatsby-plugin-theme-ui").default & {
      colors: Colors;
    };
  };
}

// fix the incompatibility between @emotion/core and rebass css attr
declare namespace JSX {
  interface IntrinsicAttributes {
    // css attr type same with @types/rebass BaseProps css
    css?:
      | import("styled-components").CSSObject
      | import("styled-components").FlattenSimpleInterpolation
      | string;
  }
}
