import React from "react";
import { FaPython, FaRProject } from "react-icons/fa";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const DataScienceAndMLSection: React.FunctionComponent = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Data Science &amp; Machine Learning
      </Text>
      <SkillPanel
        tooltip="Python"
        icon={<FaPython size={50} />}
        progressPercent={50}
        skillExperienceDesc="My main language before JavaScript. Using it mainly for machine learning stuffs, along side with R. (Preferred over R)"
      />
      <SkillPanel
        tooltip="R"
        icon={<FaRProject size={50} />}
        progressPercent={30}
        skillExperienceDesc="Using it during my statistics courses."
      />
    </Box>
  );
};

export default DataScienceAndMLSection;
