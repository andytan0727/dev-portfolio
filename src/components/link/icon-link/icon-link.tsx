import React from "react";
import { Link, LinkProps } from "rebass";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";
import Tooltip from "@src/components/tooltip";

interface IconLinkProps extends LinkProps {
  color?: string;
  hoverColor?: string;
  url: string;
  tooltip: string;
  children: JSX.Element;
}

type StyledIconLinkProps = Required<
  Pick<IconLinkProps, "color" | "hoverColor">
>;

const StyledIconLink = styled(Link)<StyledIconLinkProps>`
  transition: color 0.5s;
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

const IconLink = (props: IconLinkProps) => {
  const { color, hoverColor, url, tooltip, children } = props;
  const { theme } = useThemeUI();

  return (
    <Tooltip tooltipTitle={tooltip}>
      <StyledIconLink
        {...props}
        href={url}
        target="_blank"
        rel="noreferrer"
        color={color || theme.colors.text}
        hoverColor={hoverColor || theme.colors.secondary}
      >
        {children}
      </StyledIconLink>
    </Tooltip>
  );
};

export default IconLink;
