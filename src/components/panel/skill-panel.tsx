import React from "react";
import { IconType } from "react-icons/lib/cjs";
import { Box, Text } from "rebass";

import ProgressBar from "@components/progress";
import Tooltip from "@components/tooltip";
import styled from "@emotion/styled";

interface SkillPanelProps {
  tooltip: string;
  icon: ReturnType<IconType>;
  progressPercent: number;
  skillExperienceDesc: string;
}

const StyledSkillPanel = styled(Box)`
  width: 100%;
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: min-content 100%;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  align-items: center;
`;

const SkillPanel: React.FunctionComponent<SkillPanelProps> = (
  props: SkillPanelProps
) => {
  const { icon, progressPercent, skillExperienceDesc, tooltip } = props;

  return (
    <StyledSkillPanel>
      <Tooltip direction="right" tooltipTitle={tooltip}>
        {icon}
      </Tooltip>
      <Box width={[0.78, 0.75]}>
        <ProgressBar percent={progressPercent} />
        <Text as="sub">{skillExperienceDesc}</Text>
      </Box>
    </StyledSkillPanel>
  );
};

export default SkillPanel;
