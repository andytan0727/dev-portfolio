import React from "react";
import { DiVim, DiVisualstudio } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const EditorsSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Editors
      </Text>

      <SkillPanel
        tooltip="VS Code"
        icon={<DiVisualstudio size={50} />}
        progressPercent={60}
        skillExperienceDesc="My main text editor since 2018 (With Vim keybinding)."
      />
      <SkillPanel
        tooltip="Vim"
        icon={<DiVim size={50} />}
        progressPercent={40}
        skillExperienceDesc="Used mainly for editing system/app configuration files."
      />
    </Box>
  );
};

export default EditorsSection;
