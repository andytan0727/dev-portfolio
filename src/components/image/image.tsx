import Img, { FluidObject } from "gatsby-image";
import React from "react";

interface ImageProps {
  alt: string;
  fluid: FluidObject | FluidObject[];
  imageStyles?: React.CSSProperties;
}

const Image: React.FunctionComponent<ImageProps> = (props: ImageProps) => {
  const { alt, fluid, imageStyles } = props;

  return <Img style={imageStyles} fluid={fluid} alt={alt} />;
};

export default Image;
