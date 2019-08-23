import React from "react";
import { Flex, Link, Text } from "rebass";

import styled from "@emotion/styled";

const BoldText = styled(Text)`
  font-weight: bold;
`;

const Footer: React.FunctionComponent = () => {
  return (
    <Flex as="footer" justifyContent="center" alignItems="center">
      <BoldText>&copy; {new Date().getFullYear()} | Built with &nbsp;</BoldText>
      <Link
        href="https://www.gatsbyjs.org"
        sx={{
          color: "primary",
          textDecoration: "none",
        }}
      >
        <BoldText>Gatsby</BoldText>
      </Link>
      <BoldText>&nbsp; by Andy Tan</BoldText>
    </Flex>
  );
};

export default Footer;
