import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

// Utilities
import kebabCase from 'lodash/kebabCase'

const Tag = styled(Link)`
  padding: 1em;
  margin: 0.2em;
  display: inline-block;
  text-decoration: none;
  font-family: 'Quattrocento', sans-serif;
`

const MoreLink = styled(Link)`
  padding-left: 10px;
`

const Tags = ({ minCount, className }) => {
  const data = useStaticQuery(
    graphql`
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
  )
  const tags = data.allMarkdownRemark.group
  const filteredTags = tags.filter(tag => tag.totalCount > minCount)
  const areTagsFiltered = tags.length > filteredTags.length

  return (
    <p className={className}>
      {filteredTags.map(tag => (
        <Tag key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          {tag.fieldValue} ({tag.totalCount})&nbsp;&nbsp;
        </Tag>
      ))}
      {areTagsFiltered && (
        <MoreLink
          to="/tags"
          title="This is a link to all of my created tags for my blog posts."
          style={{
            textDecoration: 'none',
            fontFamily: 'Quattrocento, sans-serif',
          }}
        >
          see more tags...
        </MoreLink>
      )}
    </p>
  )
}

export default Tags

Tags.propTypes = {
  minCount: PropTypes.number,
  className: PropTypes.string,
}

Tags.defaultProps = {
  minCount: 0,
}
