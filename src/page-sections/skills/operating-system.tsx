import React from "react";
import { DiDebian, DiUbuntu } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const OperatingSystemSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Operating System
      </Text>

      <SkillPanel
        tooltip="Ubuntu"
        icon={<DiUbuntu size={50} />}
        progressPercent={40}
        skillExperienceDesc="My main Linux distro right now (WSL). I am using Linux for years before going back to Windows during lower half of 2018."
      />
      <SkillPanel
        tooltip="Debian"
        icon={<DiDebian size={50} />}
        progressPercent={40}
        skillExperienceDesc="My preferred Linux distro before Ubuntu."
      />
    </Box>
  );
};

export default OperatingSystemSection;
