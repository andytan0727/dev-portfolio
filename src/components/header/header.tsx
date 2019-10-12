import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, scrollSpy } from "react-scroll";
import { Box, Button, Flex, Text } from "rebass";
import { useColorMode } from "theme-ui";

import styled from "@emotion/styled";
import { useWindowResize } from "@src/lib/hooks";
import { matchMediaTablet } from "@src/lib/mediaQuery";

type SectionLinks = { to: string; name: string }[];

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
  duration: 500,
  offset: -75, // offset height of navbar
  activeClass: "activeLink",
};

const sectionLinks: SectionLinks = [
  {
    to: "about-me",
    name: "About Me",
  },
  {
    to: "skills",
    name: "Skills",
  },
  {
    to: "projects",
    name: "Projects",
  },
  {
    to: "contact-me",
    name: "Contact Me",
  },
];

const Header: React.FunctionComponent = () => {
  const [mode, setMode] = useColorMode();
  const [isTablet, setIsTablet] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const flexDirection = isTablet ? "column" : "row";
  const navItemFontSize = [2, 3];

  const handleChangeMode = useCallback(() => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
  }, [mode, setMode]);

  const handleResize = useCallback(() => {
    setIsTablet(matchMediaTablet());
  }, []);

  useEffect(() => {
    // update border bottom of logo on page load
    // delay execution to make the update successfully
    setTimeout(() => {
      scrollSpy.update();
    }, 100);

    // check screen size and resize accordingly once on mount
    handleResize();
  }, [handleResize]);

  const handleToggleShowNav = useCallback(() => {
    setShowNav(prevShowNav => !prevShowNav);
  }, [setShowNav]);

  useWindowResize(handleResize);

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

        // disable border bottom on tablet size and below
        "& .activeLink": !isTablet
          ? {
              borderBottomWidth: "5px",
              borderBottomStyle: "solid",
              borderBottomColor: "primary",
            }
          : "",
      }}
    >
      <StyledLink to="landing" {...scrollOptions}>
        <Text fontWeight="bold" as="h2" fontSize={navItemFontSize}>
          Andy Tan
        </Text>
      </StyledLink>
      <Box mx="auto" />
      {isTablet && (
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

      {(!isTablet || showNav) && (
        <Flex
          width={isTablet ? 1 : ""}
          flexDirection={flexDirection}
          alignItems="center"
        >
          {sectionLinks.map(({ to, name }) => (
            <StyledLink key={to} to={to} {...scrollOptions}>
              <Text fontSize={navItemFontSize}>{name}</Text>
            </StyledLink>
          ))}
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
