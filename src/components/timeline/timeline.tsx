import React from "react";
import { Flex } from "rebass";

import styled from "@emotion/styled";

interface TimelineProps {
  lineColor?: string;
  durationSeparator?: React.ReactNode;
  children: React.ReactElement[];
}

const StyledTimelineList = styled.ul`
  max-width: 95%;
  list-style: none;
  padding: 0px;
`;

export const Timeline: React.FunctionComponent<TimelineProps> = (
  props: TimelineProps
) => {
  const { lineColor, durationSeparator, children } = props;

  // assign parent (Timeline) props to child (TimelineItem)
  // if child's props absent
  const ChildrenWithProps = React.Children.map(children, child => {
    if (child) {
      return React.cloneElement(child, {
        lineColor: child.props.lineColor || lineColor,
        intervalSeparator: child.props.intervalSeparator || durationSeparator,
      });
    }
  });

  return (
    <Flex alignItems="center" justifyContent="center" px={3}>
      <StyledTimelineList>{ChildrenWithProps}</StyledTimelineList>
    </Flex>
  );
};

export default Timeline;
