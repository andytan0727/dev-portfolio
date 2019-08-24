import React from "react";
import {
  DiAngularSimple,
  DiBootstrap,
  DiJqueryLogo,
  DiReact,
  DiSass,
} from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const FrontEndSection: React.FunctionComponent = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Front-end Tech Stacks
      </Text>
      <SkillPanel
        tooltip="React"
        icon={<DiReact size={50} />}
        progressPercent={70}
        skillExperienceDesc="My go-to JavaScript library when building web app. Used it since 2018. First used for serious project in Jan 2019."
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
