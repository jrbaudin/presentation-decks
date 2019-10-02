module.exports = {
  siteMetadata: {
    title: `Presentation Decks`,
    description: `Awesome presentations by @jrbaudin`,
    author: `@jrbaudin`,
  },
  plugins: [
    `gatsby-theme-mdx-deck`,
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
        name: `jrbaudin-presentations`,
        short_name: `jrbaudin-presentations`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
