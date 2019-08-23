import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface SEOProps {
  description?: string;
  lang?: "en";
  meta?: {
    name: string;
    content: string;
  }[];
  title?: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  title,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription: string = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author as string,
        },
        {
          name: `twitter:title`,
          content: title || site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ``,
};

export default SEO;