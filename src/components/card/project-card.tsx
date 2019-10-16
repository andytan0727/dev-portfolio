import React from "react";
import { FaJs, FaLinux, FaPhp, FaPython } from "react-icons/fa";
import { Box, Card, Flex, Link, LinkProps, Text } from "rebass";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";
import { GithubDataRepositoriesNode } from "@src/types/github-data-query";

import { TypescriptSvg } from "../image";

type Lang = "javascript" | "typescript" | "php" | "python" | "shell";

interface LangIconProps {
  lang: Lang;
  color: string;
}

type ProjectCardProps = GithubDataRepositoriesNode;

interface StyledLinkProps extends LinkProps {
  color: string;
}

const iconSize = 20;

/**
 * Icon that represents specific language
 * Supports 5 languages
 *
 * @param props
 */
const LangIcon: React.FC<LangIconProps> = (props: LangIconProps) => {
  const { color, lang } = props;

  switch (lang) {
    case "javascript":
      return <FaJs color={color} size={iconSize} />;

    case "typescript":
      return <TypescriptSvg fill={color} size={iconSize} />;

    case "php":
      return <FaPhp color={color} size={iconSize} />;

    case "python":
      return <FaPython color={color} size={iconSize} />;

    case "shell":
      return <FaLinux color={color} size={iconSize} />;

    default:
      return null;
  }
};

const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 1.7rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.color};
`;

/**
 * Project card used in project section
 *
 * @param props
 */
const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const {
    node: {
      name,
      url,
      description,
      primaryLanguage: { color, name: langName },
    },
  } = props;

  const { theme } = useThemeUI();

  return (
    <Card
      p={3}
      sx={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0, 0.2)",
        transition: "0.3s",

        "&:hover": {
          boxShadow: "0 8px 16px 0 rgba(0,0,0, 0.2)",
        },
      }}
    >
      <StyledLink
        target="_blank"
        rel="noreferrer noopener"
        href={url}
        color={theme.colors.text}
      >
        {name}
      </StyledLink>
      <Flex mt={2}>
        <Box mr={2}>
          <LangIcon lang={langName.toLowerCase() as Lang} color={color} />
        </Box>
        <Text color={color}>{langName}</Text>
      </Flex>

      <Text mt={4}>{description}</Text>
    </Card>
  );
};

export default ProjectCard;
