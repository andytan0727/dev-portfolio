import React, { useCallback, useEffect } from "react";
import { animateScroll, Link, scrollSpy } from "react-scroll";
import { Box, Button, Flex, Text } from "rebass";
import { useColorMode } from "theme-ui";

import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  margin: 0 1.2rem;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  cursor: pointer;
`;

const scrollOptions = {
  smooth: "easeInOutQuart",
  spy: true,
  hashSpy: true,
  duration: 700,
  offset: -75, // offset height of navbar
  activeClass: "activeLink",

  // a hack around bug on react-scroll
  // Clicking on link doesn't scroll fully into container.
  // This handler is to scroll some more pixels to
  // get the active class being activated
  onClick: () => {
    setTimeout(() => {
      animateScroll.scrollMore(10);
    }, 600);
  },
};

const Header: React.FunctionComponent = () => {
  const [mode, setMode] = useColorMode();

  const handleChangeMode = useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  }, [mode, setMode]);

  // update border bottom of logo on page load
  // delay execution to make the update successfully
  useEffect(() => {
    setTimeout(() => {
      scrollSpy.update();
    }, 100);
  }, []);

  return (
    // TODO: responsive nav
    <Flex
      px={4}
      py={3}
      width={1}
      alignItems="center"
      sx={{
        position: "fixed",
        backgroundColor: "background",
        zIndex: 2,

        "& .activeLink": {
          borderBottomWidth: "5px",
          borderBottomStyle: "solid",
          borderBottomColor: "primary",
        },
      }}
    >
      <StyledLink to="landing" {...scrollOptions}>
        <Text fontWeight="bold" as="h2">
          Andy Tan
        </Text>
      </StyledLink>
      <Box mx="auto" />
      <StyledLink to="about-me" {...scrollOptions}>
        About Me
      </StyledLink>
      <StyledLink to="skills" {...scrollOptions}>
        Skills
      </StyledLink>
      <StyledLink to="projects" {...scrollOptions}>
        Projects
      </StyledLink>
      <Button variant="outline" ml={3} onClick={handleChangeMode}>
        {mode}
      </Button>
    </Flex>
  );
};

export default Header;
