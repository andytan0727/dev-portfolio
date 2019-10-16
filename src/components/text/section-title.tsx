import React from "react";
import { Text, TextProps } from "rebass";

const SectionTitle: React.FC<TextProps> = (props: TextProps) => {
  const { children, ...rest } = props;

  return (
    <Text
      {...rest}
      as="h1"
      sx={{
        borderBottomWidth: "5px",
        borderBottomStyle: "solid",
        borderBottomColor: "text",
      }}
    >
      {children}
    </Text>
  );
};

export default SectionTitle;
