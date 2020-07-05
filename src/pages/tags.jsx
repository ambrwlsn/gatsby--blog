import React, { useContext, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Tags from '../components/tags'
import ThemeContext from '../context/theme-context'

const TagsPage = () => {
  const context = useContext(ThemeContext)

  return (
    <Fragment>
      <Helmet
        title="Tags"
        htmlAttributes={{
          class: context.isDarkTheme ? 'darkMode' : '',
        }}
        description="Easily find the type of blog post you are looking for"
      />
      <Layout>
        <Fragment>
          <h1
            style={{
              fontFamily: 'Quattrocento, sans-serif',
              paddingBottom: '.5em',
              textAlign: 'center',
            }}
          >
            Tags
          </h1>
          <div style={{ maxWidth: '900px', margin: 'auto' }}>
            <Tags />
          </div>
        </Fragment>
      </Layout>
    </Fragment>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
