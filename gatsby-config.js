module.exports = {
  siteMetadata: {
    title: `Lebrande`,
    author: `Jakub Pusiak`,
    description: `JavaScript Developer`,
    siteUrl: `http://lebrande.pl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Hind`,
            variants: [`700`],
            subsets: [`latin-ext`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              noIframeBorder: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lebrande JavaScript Developer`,
        short_name: `Lebrande`,
        start_url: `/`,
        background_color: `#1976d2`,
        theme_color: `#1976d2`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
};
