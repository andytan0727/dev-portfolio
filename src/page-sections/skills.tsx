import React from "react";
import { Element } from "react-scroll";
import { Box, Text } from "rebass";

import BackEndSection from "@src/page-sections/skills/back-end";
import DataScienceAndMLSection from "@src/page-sections/skills/data-science-and-ml";
import DatabaseSection from "@src/page-sections/skills/database";
import DesignSection from "@src/page-sections/skills/design";
import EditorsSection from "@src/page-sections/skills/editors";
import FrontEndSection from "@src/page-sections/skills/front-end";
import MiscSection from "@src/page-sections/skills/misc";
import OperatingSystemSection from "@src/page-sections/skills/operating-system";

const Skills: React.FunctionComponent = () => {
  return (
    <Element name="skills">
      <Box backgroundColor="muted">
        <Text
          as="h1"
          width="5rem"
          ml={[3, 4]}
          pt={4}
          pb={1}
          sx={{
            borderBottomWidth: "5px",
            borderBottomStyle: "solid",
            borderBottomColor: "text",
          }}
        >
          Skills
        </Text>

        <Box
          pl={[3, 4]}
          pr={[3, 0]}
          py={4}
          sx={{
            display: "grid",
            gridGap: 5,

            gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",

            "@media (min-width: 480px)": {
              gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
            },

            gridAutoRows: "min-content",
          }}
        >
          <FrontEndSection />
          <BackEndSection />
          <DatabaseSection />
          <DataScienceAndMLSection />
          <OperatingSystemSection />
          <EditorsSection />
          <DesignSection />
          <MiscSection />
        </Box>
      </Box>
    </Element>
  );
};

export default Skills;
