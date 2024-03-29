import React from "react";
import {
  DiAngularSimple,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiSass,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { Box, Text } from "rebass";

import { TypescriptSvg } from "@components/image";
import { SkillPanel } from "@components/panel";

const FrontEndSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Front-end Tech Stacks
      </Text>
      <SkillPanel
        tooltip="TypeScript"
        icon={<TypescriptSvg size={50} />}
        progressPercent={60}
        skillExperienceDesc="Nothing better than typed JavaScript ❤️. Used it since January 2019, first on my UUM Math Camp project."
      />
      <SkillPanel
        tooltip="JavaScript"
        icon={<DiJavascript1 size={50} />}
        progressPercent={70}
        skillExperienceDesc="My primary language before switching to TypeScript. Using it since 2018, with HTML and CSS"
      />
      <SkillPanel
        tooltip="HTML"
        icon={<DiHtml5 size={50} />}
        progressPercent={65}
        skillExperienceDesc="Using it since 2018, with JavaScript and CSS."
      />
      <SkillPanel
        tooltip="CSS"
        icon={<DiCss3 size={50} />}
        progressPercent={60}
        skillExperienceDesc="Using it since 2018, with JavaScript and HTML. But now for me Sass/Scss is preferred over CSS."
      />

      <SkillPanel
        tooltip="React"
        icon={<DiReact size={50} />}
        progressPercent={70}
        skillExperienceDesc="My go-to JavaScript library when building web app. Used it since 2018. First used for serious project in Jan 2019."
      />
      <SkillPanel
        tooltip="Vue"
        icon={<FaVuejs size={50} />}
        progressPercent={30}
        skillExperienceDesc="Used in once my first project in UUM Math Camp. Not very proficient with it compared to React."
      />
      <SkillPanel
        tooltip="Angular"
        icon={<DiAngularSimple size={50} />}
        progressPercent={40}
        skillExperienceDesc="Used in my archived project for UUM in April 2019."
      />
      <SkillPanel
        tooltip="JQuery"
        icon={<DiJqueryLogo size={50} />}
        progressPercent={15}
        skillExperienceDesc="Experiencing it once in July 2019, in my core PHP project."
      />

      <SkillPanel
        tooltip="Sass/Scss"
        icon={<DiSass size={50} />}
        progressPercent={60}
        skillExperienceDesc="Using it since March 2019, first in my project yt_random_player"
      />
      <SkillPanel
        tooltip="Bootstrap"
        icon={<DiBootstrap size={50} />}
        progressPercent={65}
        skillExperienceDesc="Using it since April 2019 as my main CSS framework for fast UI prototyping."
      />
    </Box>
  );
};

export default FrontEndSection;
