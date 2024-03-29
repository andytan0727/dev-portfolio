import "normalize.css";

import React from "react";
import { Box } from "rebass";
import { ThemeProvider, useThemeUI } from "theme-ui";

import Footer from "@components/footer";
import Header from "@components/header";
import SEO from "@components/seo";
import { css, Global } from "@emotion/core";
import theme from "@src/gatsby-plugin-theme-ui";

interface LayoutProps {
  children: React.ReactChildren | React.ReactElement;
}

const GlobalStyles = () => {
  const {
    theme: {
      colors: { primary, text },
    },
  } = useThemeUI();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: "Fira Sans", sans-serif !important;
        }

        body {
          &,
          & * {
            &::-webkit-scrollbar {
              width: 10px;
            }

            &::-webkit-scrollbar-thumb {
              background: ${primary};
            }

            &::-webkit-scrollbar-track {
              background-color: ${text};
            }
          }
        }
      `}
    />
  );
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Box as="main" width={1}>
          <SEO />
          <GlobalStyles />
          {children}
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Layout;
