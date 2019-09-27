import React from "react";
import { Element } from "react-scroll";
import { Box, Text, TextProps } from "rebass";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";
import { HighlightText, SectionTitle } from "@src/components/text";

// rebass components styles
// to ensure styles consistency across different components
const textVerticalSpacing = [4, 4];
const textLineHeight = 2;
const textFontSize = 3;

const StyledUl = styled.ul`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: 100%;
  grid-row-gap: 1rem;
`;

const AboutMeParagraphText: React.FunctionComponent<TextProps> = (
  props: TextProps
) => {
  const { children, ...rest } = props;

  return (
    <Text
      {...rest}
      fontSize={textFontSize}
      lineHeight={textLineHeight}
      mt={textVerticalSpacing}
    >
      {children}
    </Text>
  );
};

const AboutMe: React.FunctionComponent = () => {
  const { colorMode } = useThemeUI();

  return (
    <Element name="about-me">
      <Box
        px={[0, 4]}
        // py={4}
        py={textVerticalSpacing}
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

          <AboutMeParagraphText>
            I am Andy Tan Boon Ping, currently pursuing a degree of Bachelor of
            Science With Honours (Business Mathematics) [B.Sc. (Hons) Business
            Mathematics] in Universiti Utara Malaysia (UUM). I have learned
            programming and web development skills alongside with my primary
            study in university. Below is some brief summary of my past
            experiences:
          </AboutMeParagraphText>
          <AboutMeParagraphText>
            <StyledUl>
              <li>
                First learnt programming in the year 2017. Get to know about web
                development in the lower half of the year.
              </li>
              <li>
                Dive deeper into web development starting from the year 2018.
                During the period, I developed my first project with{" "}
                <HighlightText text="Vue" />, which is a game for primary school
                kids in UUM Math Camp 2018 event.
              </li>
              <li>
                Fast forward to the year 2019, I developed my second project
                with UUM Math Camp 2019, which the project required me to make a
                board game in conjunction with other games in the event. The
                board game is created by using <HighlightText text="React" />{" "}
                and <HighlightText text="TypeScript" />
              </li>
              <li>
                In the same year, I started my hobby project, Shuffler,
                requested by my friend. Shuffler is an app that randomizes user
                existing YouTube playlist and play it. It starts simple with
                React, then refactored into TypeScript in July for better
                maintainability.
              </li>
              <li>
                After Shuffler, I get my hands on some other projects by using
                other tech/languages as well, such as notes-gallery (
                <HighlightText text="PHP" />
                ), Newster (
                <HighlightText text="Go" /> &amp; <HighlightText text="Vue" />)
                and so on. More projects are shown in my github repository.
              </li>
            </StyledUl>
          </AboutMeParagraphText>

          <AboutMeParagraphText>
            During my free time, I am constantly keeping myself updated with the
            latest technology in front-end world as well. Besides front-end app,
            I started to dive into the backend world for a better understanding
            on the overall working mechanism of the web.
          </AboutMeParagraphText>
        </Box>
      </Box>
    </Element>
  );
};

export default AboutMe;
