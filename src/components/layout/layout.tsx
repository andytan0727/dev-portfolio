import "normalize.css";

import React from "react";
import { Box } from "rebass";
import { ThemeProvider } from "theme-ui";

import Footer from "@components/footer";
import Header from "@components/header";
import SEO from "@components/seo";
import theme from "@src/gatsby-plugin-theme-ui";

interface LayoutProps {
  children: React.ReactChildren | React.ReactElement;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Box as="main" mt={2} px={4} width={1} height="100%">
          <SEO />
          {children}
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Layout;
