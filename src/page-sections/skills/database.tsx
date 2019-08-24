import React from "react";
import { DiMysql } from "react-icons/di";
import { Box, Text } from "rebass";

import { SkillPanel } from "@src/components/panel";

const DatabaseSection: React.FunctionComponent = () => {
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
    </Box>
  );
};

export default DatabaseSection;
