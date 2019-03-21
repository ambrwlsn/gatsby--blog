import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '@content/assets/me.jpg'
import ThemeContext from '@context/theme-context'

function SEO({ description, lang, meta, keywords, title, slug, tags }) {
  const context = useContext(ThemeContext)

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaAuthor = data.site.siteMetadata.author
        const siteUrl = data.site.siteMetadata.siteUrl
        const blogPostUrl = `${siteUrl}/blog${slug}`
        const allKeywords = keywords || []
        const allTags = tags || []

        return (
          <Helmet
            htmlAttributes={{
              lang,
              class: context.isDarkTheme ? 'darkMode' : '',
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            link={[
              { rel: 'shortcut icon', type: 'image/jpg', href: `${favicon}` },
            ]}
          >
            <meta name="author" content={metaAuthor} />
            <meta name="publisher" content={metaAuthor} />
            <meta name="copyright" content={metaAuthor} />
            <meta name="description" content={metaDescription} />
            <meta
              name="keywords"
              content={allKeywords.concat(allTags).toString()}
            />
            <meta name="robots" content="index,follow" />
            <link rel="canonical" href={blogPostUrl} />
            <link rel="shortcut icon" href="/public/icon-48x48.png" />
            <link rel="me" href="mailto:ambrwlsn90@gmail.com" />
            <meta name="DC.Title" content={title} />
            <meta name="DC.Creator" content={metaAuthor} />
            <meta name="DC.Rights" content={metaAuthor} />
            <meta name="DC.Publisher" content={metaAuthor} />
            <meta name="DC.Description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={metaDescription} />
            {/* <meta property="og:image" content="/workspace.jpg/" /> */}
            <meta property="og:url" content={blogPostUrl} />

            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={metaDescription} />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:image"
              property="og:image"
              content="/content/assets/me.jpg"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:image"
              content={`${
                data.site.siteMetadata.siteUrl
              }${slug}twitter-card.jpg`}
            />
            <meta name="twitter:site" content="@ambrwlsn90" />
            <meta name="twitter:site:id" content="790735158" />
            <meta name="twitter:creator" content="@ambrwlsn90" />
            <meta name="twitter:creator:id" content="790735158" />
            <meta name="twitter:url" property="og:url" content={siteUrl} />
            <meta
              name="twitter:title"
              property="og:title"
              content={metaAuthor}
            />
            <meta
              name="twitter:description"
              property="og:description"
              content={metaDescription}
            />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  tags: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
