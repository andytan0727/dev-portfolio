import React from "react";
import { Element } from "react-scroll";
import Typed from "react-typed";
import { Flex, Text, TextProps } from "rebass";
import { useThemeUI } from "theme-ui";

import ScrollButton from "@components/button/scroll-button";

const TextCenter = (props: TextProps) => {
  const { children, ...rest } = props;

  return (
    <Text as="h1" textAlign="center" {...rest}>
      {children}
    </Text>
  );
};

const scrollOptions = {
  smooth: "easeInOutQuart",
  duration: 500,
  offset: -75, // offset height of navbar
};

const Landing: React.FunctionComponent = () => {
  const {
    theme: {
      colors: { text: color },
    },
  } = useThemeUI();

  return (
    <Element name="landing">
      <Flex
        px={[3, 0]}
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextCenter>Hi, I&apos;m Andy. I do</TextCenter>
        <TextCenter mt={2} as="h1" fontSize={[5, 6]} color="primary">
          <Typed
            strings={["web development", "data analysis", "machine learning"]}
            typeSpeed={80}
            backSpeed={75}
            loop
          />
        </TextCenter>
        <ScrollButton to="about-me" color={color} {...scrollOptions} />
      </Flex>
    </Element>
  );
};

export default Landing;
