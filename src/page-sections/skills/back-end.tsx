import React from "react";
import { DiLaravel, DiNodejsSmall, DiPhp } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const BackEndSection: React.FunctionComponent = () => {
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
        progressPercent={45}
        skillExperienceDesc="Using it since June 2019, when learning Laravel."
      />

      <SkillPanel
        tooltip="Laravel"
        icon={<DiLaravel size={50} />}
        progressPercent={45}
        skillExperienceDesc="My main go-to backend framework for PHP. Using it since June 2019."
      />
    </Box>
  );
};

export default BackEndSection;
