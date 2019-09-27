import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Element } from "react-scroll";
import { Box } from "rebass";

import ProjectCard from "@src/components/card/project-card";
import { SectionTitle } from "@src/components/text";
import { GithubDataQuery } from "@src/types/github-data-query";

const Projects: React.FunctionComponent = () => {
  const data = useStaticQuery<GithubDataQuery>(graphql`
    query {
      githubData {
        data {
          user {
            repositories {
              edges {
                node {
                  name
                  url
                  description
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const repos = data.githubData.data.user.repositories.edges;

  // ignore portfolio website that consists of only generated production files
  const filteredRepos = repos.filter(
    ({ node: repo }) => !repo.name.match("andytan0727.github.io")
  );

  return (
    <Element name="projects">
      <Box px={[3, 4]} py={[4, 4]}>
        <SectionTitle width="8rem">Projects</SectionTitle>
        <Box
          mx={[3, 3]}
          my={[3, 4]}
          minHeight="55vh"
          sx={{
            display: "grid",
            gridGap: 4,

            gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",

            "@media (min-width: 480px)": {
              gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
            },

            gridAutoRows: "min-content",
          }}
        >
          {filteredRepos.map(({ node: repo }) => (
            <ProjectCard key={repo.name} node={repo}></ProjectCard>
          ))}
        </Box>
      </Box>
    </Element>
  );
};

export default Projects;
