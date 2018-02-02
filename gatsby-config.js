module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: `Halil İbrahim Şener`,
    title: `Halil İbrahim Şener`,
    siteUrl: `https://halilsener.com`,
    description: `I'm Halil. I'm a part-time software engineer at OpsGenie, and also a computer science student that will graduate in June.`,
    tags: "software development"
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true
            }
          },
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-91454609-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Halil İbrahim Şener",
        short_name: "hisener",
        start_url: "/",
        theme_color: "#2c3e50",
        display: "minimal-ui",
        icons: [
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://halilsener.com`,
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
              .filter(post => !post.node.frontmatter.draft)
              .map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            setup: ({ query: { site: { siteMetadata } } }) => {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                feed_url: siteMetadata.siteUrl + `/blog/rss.xml`,
                site_url: siteMetadata.siteUrl,
                generator: `GatsbyJS`,
              }
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      path
                      draft
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml'
          }
        ]
      }
    }
  ],
}
