module.exports = {
  siteMetadata: {
    title: `Andy Tan Dev Portfolio`,
    description: `A simple portfolio website created by using GatsbyJS`,
    author: `Andy Tan`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Fira Sans",
            subsets: ["latin"],
            variants: ["400", "700"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_TOKEN,
        graphQLQuery: `
        query($author: String = "", $userFirst: Int = 0) {
          user(login: $author) {
            repositories(first: $userFirst,  isFork: false, isLocked: false, privacy: PUBLIC, orderBy: { field: PUSHED_AT, direction: DESC }) {
              edges {
                node {
                  name
                  url
                  description
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          author: "andytan0727",
          userFirst: 10,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-theme-ui",
  ],
};
