import React from "react";
import { Element } from "react-scroll";
import { Flex, Text } from "rebass";

const AboutMe = () => {
  return (
    <Element name="about-me">
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>About me</Text>
      </Flex>
    </Element>
  );
};

export default AboutMe;
