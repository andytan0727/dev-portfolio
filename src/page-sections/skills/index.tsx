import React from "react";
import { Element } from "react-scroll";
import { Box, Text } from "rebass";

import BackEndSection from "./back-end";
import DataScienceAndMLSection from "./data-science-and-ml";
import DatabaseSection from "./database";
import DesignSection from "./design";
import EditorsSection from "./editors";
import FrontEndSection from "./front-end";
import MiscSection from "./misc";
import OperatingSystemSection from "./operating-system";

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
