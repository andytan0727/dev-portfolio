import React from "react";
import { DiMongodb, DiMysql } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const DatabaseSection: React.FC = () => {
  return (
    <Box>
      <Text as="h2" pb={3}>
        Databases
      </Text>
      <SkillPanel
        tooltip="MySQL"
        icon={<DiMysql size={50} />}
        progressPercent={35}
        skillExperienceDesc="Using it mostly (without ORM) when setting up backend services. E.g. core PHP &amp; Laravel"
      />

      <SkillPanel
        tooltip="MongoDB"
        icon={<DiMongodb size={50} />}
        progressPercent={20}
        skillExperienceDesc="Touched it once in my JS hobby project with mongoose ORM."
      />
    </Box>
  );
};

export default DatabaseSection;
