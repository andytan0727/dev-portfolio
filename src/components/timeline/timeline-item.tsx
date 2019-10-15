import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Box, Flex, Text } from "rebass";
import { useThemeUI } from "theme-ui";

import styled from "@emotion/styled";

interface TimelineItemProps {
  title?: string;
  subtitle?: string;
  duration: Duration;
  children?: React.ReactNode;
  lineColor?: string;
  durationColor?: string;
  durationSeparator?: string;
  durationBackground?: string;
  iconFill?: string;
  iconOutline?: string;
}

interface StyledBulletProps {
  lineColor?: string;
  iconFill?: string;
}

interface StyledTimelineDurationProps {
  background: string;
  color: string;
}

type Duration = {
  start?: string | number;
  end?: string | number;
};

type Separator = string | React.ReactElement;

interface TimeDurationProps {
  duration: Duration;
  separator: Separator;
}

const StyledTimelineDuration = styled.p<StyledTimelineDurationProps>`
  margin: 0 0 0 1em;
  padding: 0.25em 1em;
  background: ${props => props.background};
  color: ${props => props.color};
  border-radius: 1em;
`;

const StyledContent = styled(Box)<{ lineColor: string }>`
  position: relative;
  margin-left: 2.5em;

  :before {
    background-color: ${props => props.lineColor};
    content: "";
    margin-left: 1px;
    position: absolute;
    top: 0;
    left: -2em;
    width: 2px;
    height: 100%;
  }
`;

const StyledItem = styled.li<{ isVisible: boolean }>`
  position: relative;
  transition: opacity 500ms ease-in-out;
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;

const StyledBullet = styled(Box)<StyledBulletProps>`
  border: ${props =>
    props.lineColor ? "2px solid " + props.lineColor : "none"};
  padding: ${props => (props.lineColor ? "0" : "2px")};
  background: ${props => props.iconFill};
  border-radius: 10px;
  display: block;
  width: 1em;
  height: 1em;
`;

const TimeDuration: React.FunctionComponent<TimeDurationProps> = (
  props: TimeDurationProps
) => {
  const { duration, separator } = props;

  if (!duration.start && !duration.end)
    throw new Error("Please provide start or end date or both.");

  if (duration.start && !duration.end) {
    return (
      <span>
        {duration.start}
        {separator} present
      </span>
    );
  }

  if (!duration.start && duration.end) {
    return (
      <span>
        present{separator} {duration.end}
      </span>
    );
  }

  return (
    <span>
      {duration.start}
      {separator} {duration.end}
    </span>
  );
};

const TimelineItem: React.FunctionComponent<TimelineItemProps> = (
  props: TimelineItemProps
) => {
  const {
    title,
    subtitle = "",
    duration,
    children,
    lineColor,
    durationColor = "#000",
    durationSeparator = <>&nbsp;&mdash;</>,
    durationBackground,
    iconFill = "transparent",
    iconOutline,
  } = props;

  const {
    theme: {
      colors: { text: textColor, secondary: secondaryColor },
    },
  } = useThemeUI();

  return (
    <VisibilitySensor partialVisibility scrollCheck intervalDelay={550}>
      {({ isVisible }) => (
        <StyledItem isVisible={isVisible}>
          <Flex alignItems="center" mt={4}>
            <StyledBullet
              lineColor={iconOutline || textColor}
              iconFill={iconFill}
            />

            <StyledTimelineDuration
              color={durationColor}
              background={durationBackground || secondaryColor}
            >
              <TimeDuration duration={duration} separator={durationSeparator} />
            </StyledTimelineDuration>
          </Flex>

          <StyledContent lineColor={lineColor || textColor}>
            <Text as="h3" my={3}>
              {title}
            </Text>
            {subtitle && (
              <Text as="h4" my={2}>
                {subtitle}
              </Text>
            )}
            <Box>{children}</Box>
          </StyledContent>
        </StyledItem>
      )}
    </VisibilitySensor>
  );
};

export default TimelineItem;
