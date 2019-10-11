import React from "react";
import { Element } from "react-scroll";
import { Flex, Text } from "rebass";

const Landing: React.FunctionComponent = () => {
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
      </Flex>
    </Element>
  );
};

export default Landing;
