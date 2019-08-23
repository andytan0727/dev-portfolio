import React from "react";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";

interface TooltipProps {
  highlight?: string;
  tooltipTitle: string;
  children: JSX.Element;
}

type StyledTooltipProps = Required<
  Pick<TooltipProps, "highlight" | "tooltipTitle">
>;

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: relative;

  &::after {
    content: '${props => props.tooltipTitle}';
    min-width: 4rem;
    padding: .25rem .5rem;
    position: absolute;
    top: 120%;
    left: 10%;
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
  const { highlight, tooltipTitle, children } = props;
  const { theme } = useThemeUI();
  const highlightBg: string = highlight || theme.colors.highlight;

  return (
    <StyledTooltip tooltipTitle={tooltipTitle} highlight={highlightBg}>
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
