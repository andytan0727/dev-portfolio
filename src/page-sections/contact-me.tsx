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
import { useWindowResize } from "@src/lib/hooks";
import { matchMediaMobile } from "@src/lib/mediaQuery";

const largeIconSize = 48;
const smallIconSize = 30;

const ContactMe: React.FunctionComponent = () => {
  const [iconSize, setIconSize] = useState(largeIconSize);

  const handleSetIconSize = useCallback(() => {
    setIconSize(matchMediaMobile() ? smallIconSize : largeIconSize);
  }, []);

  useEffect(() => {
    // set initial icon size on mount
    // put in useEffect because window object is absent
    // in nodejs
    handleSetIconSize();
  }, [handleSetIconSize]);

  useWindowResize(handleSetIconSize);

  return (
    <Element name="contact-me">
      <Flex
        height="80vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="muted"
      >
        <Text as="h1" textAlign="center">
          Contact Me?
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

export default ContactMe;
