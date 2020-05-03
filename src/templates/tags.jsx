import React, { Fragment, useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import styled from 'styled-components'
import Layout from '../components/layout'
import ThemeContext from '../context/theme-context'

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 500px;
  margin: auto;
  margin-bottom: 3em;
  text-align: center;
`

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
        <Wrapper>
          <h1
            style={{
              paddingBottom: '.5em',
              fontSize: '1.5rem',
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
              paddingBottom: '1.5em',
              margin: '0 auto',
            }}
          >
            All tags
          </Link>
        </Wrapper>
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
