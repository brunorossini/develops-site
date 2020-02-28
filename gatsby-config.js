const siteMetadata = require('./config/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7159c1`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Develops`,
        short_name: `Develops`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#7159c1`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // 512x512,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.(js)`],
        options: { nocase: true },
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
    `gatsby-plugin-react-helmet`, //pesquisar sobre
    `gatsby-plugin-sitemap`, //configurar depois
    `gatsby-plugin-offline`,
  ],
}
