import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
      animateScroll.scrollMore(20);
    }, 600);
  },
};

const Header: React.FunctionComponent = () => {
  const [mode, setMode] = useColorMode();
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const flexDirection = isMobile ? "column" : "row";
  const navItemFontSize = [2, 3];

  const handleChangeMode = useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  }, [mode, setMode]);

  const handleResize = useCallback(() => {
    const { matches } = window.matchMedia("(max-width: 40em)");
    setIsMobile(matches);
  }, []);

  // update border bottom of logo on page load
  // delay execution to make the update successfully
  useEffect(() => {
    setTimeout(() => {
      scrollSpy.update();
    }, 100);

    // check screen size and resize accordingly once on mount
    handleResize();
  }, [handleResize]);

  const handleToggleShowNav = useCallback(() => {
    setShowNav(prevShowNav => !prevShowNav);
  }, [setShowNav]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <Flex
      px={[0, 4]}
      py={3}
      width={1}
      flexDirection={flexDirection}
      alignItems="start"
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
        <Text fontWeight="bold" as="h2" fontSize={navItemFontSize}>
          Andy Tan
        </Text>
      </StyledLink>
      <Box mx="auto" />
      {isMobile && (
        <Button
          variant="default"
          px={3}
          py={2}
          mr="1.2rem"
          sx={{
            position: "absolute",
            right: "0%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleToggleShowNav}
        >
          {!showNav ? <FaBars /> : <FaTimes />}
        </Button>
      )}
      {(!isMobile || showNav) && (
        <Flex
          width={isMobile ? 1 : ""}
          flexDirection={flexDirection}
          alignItems="center"
        >
          <StyledLink to="about-me" {...scrollOptions}>
            <Text fontSize={navItemFontSize}>About Me</Text>
          </StyledLink>
          <StyledLink to="skills" {...scrollOptions}>
            <Text fontSize={navItemFontSize}>Skills</Text>
          </StyledLink>
          <StyledLink to="projects" {...scrollOptions}>
            <Text fontSize={navItemFontSize}>Projects</Text>
          </StyledLink>
          <StyledLink to="contact-me" {...scrollOptions}>
            <Text fontSize={navItemFontSize}>Contact Me</Text>
          </StyledLink>
          <Button
            variant="outline"
            ml={[0, 3]}
            mt={[2, 0]}
            px={[2, 3]}
            py={[1, 2]}
            onClick={handleChangeMode}
          >
            {mode}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
