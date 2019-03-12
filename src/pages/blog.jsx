import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import ContentWrapper from '../components/content-wrapper'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'
import styled, { keyframes } from 'styled-components'
// Utilities
import kebabCase from 'lodash/kebabCase'

const colours = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const BlogPostLink = styled(Link)`
  font-family: 'Courgette', cursive;
  text-decoration-skip: ink;
  background: linear-gradient(270deg, #5ceaf6, #be1fbb);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  padding-right: 10px;
  &:hover {
    color: transparent;
    animation: ${colours} 3.5s ease;
  }
`

const PostTag = styled(Link)`
  text-decoration: none;
  font-family: 'Quattrocento', sans-serif;
`

const Teaser = styled.p`
  font-family: 'Quattrocento', sans-serif;
  line-height: 1.7;
  font-size: 1.25em;
`

const Wrapper = styled.article`
  padding-bottom: 1em;
  position: relative;
  margin-left: 3em;
`

const Date = styled.time`
  font-family: 'Quattrocento', sans-serif;
  position: absolute;
  right: 100%;
  top: 0;
  width: 3em;
  text-align: center;
  padding-right: 1em;
  span {
    font-size: 2em;
    display: block;
  }
`

const Blog = props => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <ContentWrapper>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Tags minCount={3} />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags
          const [month, day] = node.frontmatter.date.split(' ')
          return (
            <Wrapper key={node.fields.slug}>
              <h1 style={{ fontSize: '2.5em' }}>
                <BlogPostLink to={`blog${node.fields.slug}`} title={title}>
                  {title}
                </BlogPostLink>
              </h1>
              <Date>
                {month}
                <span>{day}</span>
              </Date>
              <Teaser dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              {tags.map((tag, i) => {
                const isLast = i === tags.length - 1
                return (
                  <PostTag key={tag} to={`/tags/${kebabCase(tag)}/`}>
                    {tag}
                    {!isLast && <Fragment> &middot; </Fragment>}
                  </PostTag>
                )
              })}
            </Wrapper>
          )
        })}
      </ContentWrapper>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            title
            tags
          }
        }
      }
    }
  }
`
