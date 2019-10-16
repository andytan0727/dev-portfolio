import React from "react";
import { DiIllustrator } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const DesignSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Design
      </Text>

      <SkillPanel
        tooltip="Adobe Illustrator"
        icon={<DiIllustrator size={50} />}
        progressPercent={15}
        skillExperienceDesc="Used to design logo &amp; several SVG."
      />
    </Box>
  );
};

export default DesignSection;
