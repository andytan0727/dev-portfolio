import React from "react";
import { Element } from "react-scroll";
import { Box, Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";

import { Avatar } from "@components/image";
import { HighlightText, SectionTitle } from "@src/components/text";

const AboutMe: React.FunctionComponent = () => {
  const { colorMode } = useThemeUI();

  return (
    <Element name="about-me">
      <Box
        px={3}
        py={4}
        sx={{
          minHeight: "100vh",
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit, minmax(23rem, max-content))",

          "@media screen and (max-width: 480px)": {
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          },

          gap: 4, // row gap on mobile, column gap on large screen
          gridTemplateRows: "auto",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: colorMode === "dark" ? "purple3" : "purple1",
        }}
      >
        <Flex
          width={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <SectionTitle mt={[0, 0]}>About Me</SectionTitle>
          <Box width={[0.8, 0.5, 0.85]} mt={4}>
            <Avatar />
          </Box>
        </Flex>
        <Box
          height="100%"
          sx={{
            alignSelf: ["start", "start", "center"],
            justifySelf: ["center", "center", "start"],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <Text width={[1]} mt={3} fontSize={3} lineHeight={1.7}>
            I am Andy, with the full name Tan Boon Ping, currently pursuing a
            degree of Bachelor of Science With Honours (Business Mathematics)
            [B.Sc. (Hons) Business Mathematics] in Universiti Utara Malaysia
            (UUM). During my university years, I have stumbled upon computer
            programming in Introduction to Programming course, with{" "}
            <HighlightText text="Java" /> as my first computer language. After
            that, I developed much interest and devoted most of my time into
            this deep field.
            <br />
            <br />
            {""}After going through almost a year of using Java for some basic
            programming stuffs, at early 2018, I started to dive into the field
            of <HighlightText text="data science and machine learning" />. At
            the same time, my passion with previously not so interested{" "}
            <HighlightText text="linux" /> operating system is burning hot{" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
            . During that period, I am using{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="Python"
            />{" "}
            and learning{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="shell scripting"
            />{" "}
            on a daily basis.
            <br />
            <br />
            {""}And then, around March 2018, I was requested by my friend to
            lend a helping hand on a game organized by UUM Math Camp. From that
            time, I started to dig into the world of front-end web technologies;
            the world of <HighlightText text="HTML, CSS, JavaScript" />. For my
            first JS project, I choose to use{" "}
            <HighlightText color="muted" backgroundColor="primary" text="Vue" />{" "}
            as it is my first framework learnt in front-end web development.
            After the project ended, I started to dive into another view library
            by Facebook,{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="React"
            />
            . Fast forward to February 2019, after possessing certain
            proficiency in React, I choose it over Vue as a base for my second
            project in UUM Math Camp.
            <br />
            <br />
            After accomplished Math Camp project, I started my second project
            with React, <HighlightText text="Shuffler" />. It is a project made
            by using React with Google&apos;s view library{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="Material UI"
            />{" "}
            . It is written in JavaScript at first, but then I decided to
            refactor it into React +{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="TypeScript"
            />
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            at July 2019 as it scales big. Besides React, I have also tried{" "}
            <HighlightText
              color="muted"
              backgroundColor="primary"
              text="Angular"
            />{" "}
            for an event page with UUM SQS college, but the idea is then
            rejected due to some problems on back-end side.
            <br />
            <br />
            Apart from front-end technologies, I have also several experiences
            with back-end technologies as well. For example,{" "}
            <HighlightText text="NodeJs with express framework" />,{" "}
            <HighlightText text="Python Django" />, and lastly{" "}
            <HighlightText text="PHP with Laravel" />. Even though I am not as
            competent as what I am in front-end side, but I am still confident
            that I have possessed at least basic but not so beginner level of
            proficiency in back-end field. I am learning back-end technologies
            mostly due to my interest.
          </Text>
        </Box>
      </Box>
    </Element>
  );
};

export default AboutMe;
