import React from "react";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";

interface TooltipProps {
  highlight?: string;
  direction?: "bottom" | "right";
  tooltipTitle: string;
  children: JSX.Element;
}

type StyledTooltipProps = Required<
  Pick<TooltipProps, "highlight" | "tooltipTitle" | "direction">
>;

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: relative;

  &::after {
    content: '${props => props.tooltipTitle}';
    min-width: 4rem;
    padding: .25rem .5rem;
    position: absolute;

    /* tooltip direction */
    top: ${props => (props.direction === "bottom" ? "120%" : "25%")};
    left: ${props => (props.direction === "bottom" ? "10%" : "120%")};

    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    background-color: ${props => props.highlight};
    opacity: 0;
    transition: 200ms ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(5px);
  }
`;

const Tooltip: React.FunctionComponent<TooltipProps> = (
  props: TooltipProps
) => {
  const { direction = "bottom", highlight, tooltipTitle, children } = props;
  const { theme } = useThemeUI();
  const highlightBg: string = highlight || theme.colors.highlight;

  return (
    <StyledTooltip
      direction={direction}
      highlight={highlightBg}
      tooltipTitle={tooltipTitle}
    >
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
