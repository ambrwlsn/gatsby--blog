import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
// Utilities
import kebabCase from 'lodash/kebabCase'

function Tags() {
  return (
    <StaticQuery
      // eslint-disable-next-line
      query={tagQuery}
      render={data => (
        <p>
          {data.allMarkdownRemark.group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})&nbsp;&nbsp;
            </Link>
          ))}
        </p>
      )}
    />
  )
}

export const tagQuery = graphql`
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

export default Tags
