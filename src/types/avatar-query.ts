import { FluidObject } from "gatsby-image";

export interface AvatarQuery {
  placeholderImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
