import { Link as GatsbyLink } from "gatsby";
import React, { useCallback } from "react";
import { Box, Button, Flex, Link, Text } from "rebass";
import { useColorMode, useThemeUI } from "theme-ui";

import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  margin: 0.5rem 1.2rem;
`;

const Header: React.FunctionComponent = () => {
  const { theme } = useThemeUI();
  const [mode, setMode] = useColorMode();
  const linkColor = theme.colors.text;

  const handleChangeMode = useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  }, [mode, setMode]);

  return (
    // TODO: responsive nav
    <Flex px={4} py={3} alignItems="center">
      <Text p={2} fontWeight="bold" as="h2">
        Andy Tan
      </Text>
      <Box mx="auto" />
      <StyledLink
        as={GatsbyLink}
        color={linkColor}
        variant="nav"
        {...{ to: "/about" }}
      >
        About
      </StyledLink>
      <StyledLink
        as={GatsbyLink}
        color={linkColor}
        variant="nav"
        {...{ to: "/skills" }}
      >
        Skills
      </StyledLink>
      <StyledLink
        as={GatsbyLink}
        color={linkColor}
        variant="nav"
        {...{ to: "/projects" }}
      >
        Projects
      </StyledLink>
      <Button variant="outline" ml={3} onClick={handleChangeMode}>
        {mode}
      </Button>
    </Flex>
  );
};

export default Header;
