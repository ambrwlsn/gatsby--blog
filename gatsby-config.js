module.exports = {
  siteMetadata: {
    title: "Amber's Website",
    author: 'Amber Wilson',
    description: "Amber's blog for thoughts and things.",
    siteUrl: 'https://gatsbytastic.netlify.com',
    social: {
      twitter: 'ambrwlsn90',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@content': './content',
          '@pages': './src/pages',
          '@hooks': './src/hooks',
          '@style': './src/style',
          '@templates': './src/templates',
          '@utils': './src/utils',
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/wilt100days`,
        name: 'wilt100days',
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },

    `gatsby-plugin-react-helmet`,
  ],
}
