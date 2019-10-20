import React from "react";
import { Element } from "react-scroll";
import { Box, Text, TextProps } from "rebass";
import { useThemeUI } from "theme-ui";

import { HighlightText, SectionTitle } from "@src/components/text";
import Timeline from "@src/components/timeline/timeline";
import TimelineItem from "@src/components/timeline/timeline-item";

const AboutMeParagraphText: React.FC<TextProps> = (props: TextProps) => {
  const { children, ...rest } = props;

  const textLineHeight = 1.5;
  const textFontSize = 2;

  return (
    <Text {...rest} fontSize={textFontSize} lineHeight={textLineHeight}>
      {children}
    </Text>
  );
};

const AboutMe: React.FC = () => {
  const { colorMode } = useThemeUI();

  return (
    <Element name="about-me">
      <Box
        px={[1, 4]}
        py={[4, 3]}
        sx={{
          minHeight: "100vh",
          display: "grid",

          gridTemplateColumns: "repeat(auto-fit, minmax(23rem, max-content))",

          "@media screen and (max-width: 40em)": {
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
          },

          gap: 4, // row gap on mobile, column gap on large screen
          gridTemplateRows: "auto",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: colorMode === "dark" ? "purple3" : "purple1",
        }}
      >
        <Box
          height="100%"
          sx={{
            width: ["90%", "100%"],
            alignSelf: ["start", "start", "center"],
            justifySelf: ["center", "center", "start"],
          }}
        >
          <SectionTitle width="9rem">About Me</SectionTitle>
          <AboutMeParagraphText mt={3}>
            I am Andy Tan Boon Ping, currently pursuing a degree of Bachelor of
            Science With Honours (Business Mathematics) [B.Sc. (Hons) Business
            Mathematics] in Universiti Utara Malaysia (UUM). I have learned web
            development skills alongside with my primary study in university.
            Brief summary of my past experiences as below:
          </AboutMeParagraphText>
          <Timeline>
            <TimelineItem duration={{ start: "August 2019" }} title="Newster">
              <AboutMeParagraphText>
                After Shuffler, I get my hands on some other projects by using
                other tech/languages as well, for example Newster, which built
                with <HighlightText text="Go" /> &amp;{" "}
                <HighlightText text="Vuejs" />. Newster is a simple app that
                catches fresh hot tech news from various websites such as CSDN,
                CSS-Tricks, dev-to and so on.
              </AboutMeParagraphText>
            </TimelineItem>

            <TimelineItem duration={{ start: "March 2019" }} title="Shuffler">
              <AboutMeParagraphText>
                In the same year, I started my hobby project, Shuffler,
                requested by my friend. Shuffler is an app that randomizes user
                existing YouTube playlist and play it. It starts simple with
                React, then refactored into TypeScript in July 2019 for better
                maintainability.
              </AboutMeParagraphText>
            </TimelineItem>
            <TimelineItem
              duration={{ start: "January 2019", end: "March 2019" }}
              title="Maths Camp 2019 Boardgame"
            >
              <AboutMeParagraphText>
                Developed my second project for UUM Math Camp, which the project
                required me to make a board game in conjunction with other games
                in the event.
              </AboutMeParagraphText>
            </TimelineItem>
            <TimelineItem
              duration={{
                start: 2018,
                end: 2019,
              }}
              title="Maths Camp 2018 Game"
            >
              <AboutMeParagraphText>
                Dive deeper into web development. During this period, I
                developed my first project with <HighlightText text="Vuejs" />,
                which is a game for primary school kids in UUM Math Camp 2018
                event.
              </AboutMeParagraphText>
            </TimelineItem>
            <TimelineItem
              duration={{
                start: 2017,
                end: 2018,
              }}
              title="Java"
            >
              <AboutMeParagraphText>
                First learnt programming with Java. Learnt about Object-Oriented
                Programming (OOP) and some computer science theoretical
                knowledge.
              </AboutMeParagraphText>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
    </Element>
  );
};

export default AboutMe;
