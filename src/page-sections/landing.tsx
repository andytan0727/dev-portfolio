import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import { Element } from "react-scroll";
import { Flex, Text } from "rebass";

import IconLink from "@src/components/link/icon-link";
import { matchMediaMobile } from "@src/lib/mediaQuery";

const largeIconSize = 48;
const smallIconSize = 30;

const Landing: React.FunctionComponent = () => {
  const [iconSize, setIconSize] = useState(largeIconSize);
  const [matchMobile, setMatchMobile] = useState(matchMediaMobile());

  const handleSetMatchMobile = useCallback(
    debounce(() => {
      setMatchMobile(matchMediaMobile());
    }, 50),
    []
  );

  // resize social media icons if viewport is resized
  useEffect(() => {
    if (matchMobile) setIconSize(smallIconSize);
    else setIconSize(largeIconSize);
  }, [matchMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleSetMatchMobile);

    return () => {
      window.removeEventListener("resize", handleSetMatchMobile);
    };
  }, [handleSetMatchMobile]);

  return (
    <Element name="landing">
      <Flex
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text as="h1" textAlign="center">
          Hello, I&apos;m Andy, a web developer
        </Text>
        <Flex mt={5} alignItems="center" justifyContent="space-around">
          <IconLink
            tooltip="facebook"
            url="https://www.facebook.com/andy.tan.710"
            aria-label="facebook"
          >
            <FaFacebook size={iconSize} />
          </IconLink>
          <IconLink
            tooltip="github"
            url="https://github.com/andytan0727"
            aria-label="github"
          >
            <FaGithub size={iconSize} />
          </IconLink>
          <IconLink tooltip="twitter" url="https://twitter.com/andy_bptan">
            <FaTwitter size={iconSize} />
          </IconLink>
          <IconLink
            tooltip="linkedin"
            url="https://www.linkedin.com/in/andy-tan-7489b4132/"
          >
            <FaLinkedin size={iconSize} />
          </IconLink>
          <IconLink tooltip="email me" url="mailto:andytan0727@gmail.com">
            <FaMailBulk size={iconSize} />
          </IconLink>
        </Flex>
      </Flex>
    </Element>
  );
};

export default Landing;
