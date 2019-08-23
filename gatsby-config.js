module.exports = {
  siteMetadata: {
    title: `Lebrande`,
    author: `Jakub Pusiak`,
    description: `JavaScript Developer`,
    siteUrl: `http://lebrande.pl`,
  },
  plugins: [
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
