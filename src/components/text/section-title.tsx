import React from "react";
import { Text, TextProps } from "rebass";

const SectionTitle: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const { children, ...rest } = props;

  return (
    <Text
      as="h1"
      sx={{
        borderBottomWidth: "5px",
        borderBottomStyle: "solid",
        borderBottomColor: "text",
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SectionTitle;
