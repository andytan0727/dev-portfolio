import React from "react";
import { DiJava } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const MiscSection: React.FunctionComponent = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Misc
      </Text>

      <SkillPanel
        tooltip="Java"
        icon={<DiJava size={50} />}
        progressPercent={40}
        skillExperienceDesc="Used during early junior year."
      />
    </Box>
  );
};

export default MiscSection;
