import React from "react";
import { FaFacebook, FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Flex, Text } from "rebass";

import Layout from "@components/layout";
import IconLink from "@components/link/icon-link";
import SEO from "@components/seo";

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <Flex
        height="80vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text as="h1">Hello, I&apos;m Andy, a web developer</Text>
        <Flex mt={5} alignItems="center" justifyContent="space-around">
          <IconLink
            tooltip="facebook"
            url="https://facebook.com/andytan"
            aria-label="facebook"
          >
            <FaFacebook size={48} />
          </IconLink>
          <IconLink
            tooltip="github"
            url="https://github.com/andytan0727"
            aria-label="github"
          >
            <FaGithub size={48} />
          </IconLink>
          <IconLink tooltip="twitter" url="https://twitter.com/andy_x_tan07">
            <FaTwitter size={48} />
          </IconLink>
          <IconLink tooltip="email me" url="https://gmail.com">
            <FaMailBulk size={48} />
          </IconLink>
        </Flex>
      </Flex>
    </>
  </Layout>
);

export default IndexPage;
