import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

// Utilities
import kebabCase from 'lodash/kebabCase'

const Tag = styled(Link)`
  color: #000;
  border-radius: 3px;
  padding: 1em;
  margin: 0.2em;
  background: orange;
  display: inline-block;
  text-decoration: none;
`

function Tags() {
  return (
    <StaticQuery
      // eslint-disable-next-line
      query={tagQuery}
      render={data => (
        <p>
          {data.allMarkdownRemark.group.map(tag => (
            <Tag to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})&nbsp;&nbsp;
            </Tag>
          ))}
        </p>
      )}
    />
  )
}

export default Tags

const tagQuery = graphql`
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
