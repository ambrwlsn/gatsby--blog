import React, { Fragment, useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import ThemeContext from '../context/theme-context'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  const context = useContext(ThemeContext)

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          class: context.isDarkTheme ? 'darkMode' : '',
        }}
        title="Tagged with"
      />

      <Layout>
        <Link to="/blog" rel="prev">
          {/* ← {previous.frontmatter.title} */}← blog home
        </Link>
        <div style={{ maxWidth: '500px', margin: 'auto', marginBottom: '3em' }}>
          <h1
            style={{
              fontFamily: 'Quattrocento, sans-serif',
              paddingBottom: '.5em',
            }}
          >
            {tagHeader}
          </h1>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter
              const { slug } = node.fields
              const blogPostUrl = `blog${slug}`
              return (
                <li key={slug} style={{ paddingBottom: '1.5em' }}>
                  <Link
                    to={blogPostUrl}
                    style={{
                      textDecoration: 'none',
                      lineHeight: '1.7',
                      fontSize: '1.5em',
                      fontFamily: 'Courgette, cursive',
                    }}
                  >
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            to="/tags"
            style={{
              textDecoration: 'none',
              fontFamily: 'Quattrocento, sans-serif',
              paddingBottom: '1.5em',
            }}
          >
            All tags
          </Link>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
