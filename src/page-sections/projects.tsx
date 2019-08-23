import React from "react";
import { Element } from "react-scroll";
import { Flex, Text } from "rebass";

const Projects = () => {
  return (
    <Element name="projects">
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Projects</Text>
      </Flex>
    </Element>
  );
};

export default Projects;
