import React from "react";
import { Box } from "rebass";

interface ProgressBarProps {
  trackHeight?: number;
  percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props: ProgressBarProps) => {
  const { trackHeight, percent } = props;

  if (percent > 100 || percent < 0)
    throw new Error("Percentage must be in between 0 and 100");

  const barWidth = percent / 100;
  const height = trackHeight || 20;

  return (
    <Box
      className="progress-bar"
      height={height}
      sx={{
        backgroundColor: "text",
      }}
    >
      <Box
        width={barWidth}
        height={height}
        className="progress-track"
        sx={{
          backgroundColor: "primary",
        }}
      ></Box>
    </Box>
  );
};

export default ProgressBar;
