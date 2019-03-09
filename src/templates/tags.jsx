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
      />
      <Layout>
        <div>
          <h1>{tagHeader}</h1>
          <ul>
            {edges.map(({ node }) => {
              const { title } = node.frontmatter
              const { slug } = node.fields
              const blogPostUrl = `blog${slug}`
              return (
                <li key={slug}>
                  <Link to={blogPostUrl}>{title}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="/tags">All tags</Link>
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
