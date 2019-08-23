import "normalize.css";

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Box } from "rebass";
import { ThemeProvider } from "theme-ui";

import theme from "@src/gatsby-plugin-theme-ui";

import Header from "../header";

interface LayoutProps {
  children: React.ReactChildren | React.ReactElement;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <Box
        px={1}
        sx={{
          fontSize: 2,
        }}
      >
        <ThemeProvider theme={theme}>
          <main>{children}</main>
        </ThemeProvider>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </>
  );
};

export default Layout;
