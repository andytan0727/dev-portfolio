import { Link } from "gatsby";
import React from "react";
import { Box } from "rebass";

import Layout from "@components/layout";
import SEO from "@components/seo";
import Image from "@src/components/image";

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <Box>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Box>
  </Layout>
);

export default IndexPage;
