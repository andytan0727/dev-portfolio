import React from "react";
import { DiGo, DiLaravel, DiNodejsSmall, DiPhp } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const BackEndSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Back-end Tech Stacks
      </Text>
      <SkillPanel
        tooltip="NodeJs"
        icon={<DiNodejsSmall size={50} />}
        progressPercent={40}
        skillExperienceDesc="Using it to experience some backend stuffs with express frameworks."
      />

      <SkillPanel
        tooltip="Core PHP"
        icon={<DiPhp size={50} />}
        progressPercent={25}
        skillExperienceDesc="Using it since June 2019, when learning Laravel."
      />

      <SkillPanel
        tooltip="Laravel"
        icon={<DiLaravel size={50} />}
        progressPercent={25}
        skillExperienceDesc="My main go-to backend framework for PHP. Using it since June 2019."
      />

      <SkillPanel
        tooltip="Go"
        icon={<DiGo size={50} />}
        progressPercent={35}
        skillExperienceDesc="Learning to use Go starting from August 2019. First on Newster"
      />
    </Box>
  );
};

export default BackEndSection;
