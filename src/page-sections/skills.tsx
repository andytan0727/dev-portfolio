import React from "react";
import { Element } from "react-scroll";
import { Flex, Text } from "rebass";

const Skills = () => {
  return (
    <Element name="skills">
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Skills</Text>
      </Flex>
    </Element>
  );
};

export default Skills;
