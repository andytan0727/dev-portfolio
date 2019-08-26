import React from "react";
import { Text, TextProps } from "rebass";

interface HighlightTextProps extends TextProps {
  text: string;
}

const HighlightText: React.FunctionComponent<HighlightTextProps> = (
  props: HighlightTextProps
) => {
  const { text, ...rest } = props;

  return (
    <Text
      {...rest}
      as="span"
      fontWeight="bold"
      py={1}
      px={1}
      sx={{
        backgroundColor: "highlight",
      }}
    >
      {text}
    </Text>
  );
};

export default HighlightText;
