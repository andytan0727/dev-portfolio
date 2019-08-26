import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";
import React from "react";

import { AvatarQuery } from "@src/types/avatar-query";

import Image from "./image";

const Avatar: React.FunctionComponent = () => {
  const data = useStaticQuery<AvatarQuery>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-600x600.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    fluid,
  }: { fluid: FluidObject } = data.placeholderImage.childImageSharp;

  return (
    <Image
      imageStyles={{
        borderRadius: 9999,
      }}
      fluid={fluid}
      alt="my-avatar"
    />
  );
};

export default Avatar;
