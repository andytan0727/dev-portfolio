import React from "react";

import Layout from "@components/layout";
import SEO from "@components/seo";
import AboutMe from "@src/page-sections/about-me";
import ContactMe from "@src/page-sections/contact-me";
import Landing from "@src/page-sections/landing";
import Projects from "@src/page-sections/projects";
import Skills from "@src/page-sections/skills";

const IndexPage: React.FC = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  </Layout>
);

export default IndexPage;
