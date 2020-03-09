import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import ContentWrapper from '../components/content-wrapper'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Tags from '../components/tags'
import styled, { keyframes } from 'styled-components'
// Utilities
import excerpt from '@helpers/excerpt'
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

const BlogPostLink = styled.a`
  font-family: 'Courgette', cursive;
  @media (min-width: 800px) {
    text-decoration-skip: ink;
    background: linear-gradient(270deg, #5ceaf6, #be1fbb);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    padding-right: 10px;
    &:hover {
      color: transparent;
      animation: ${colours} 3.5s ease;
    }
  }
`

const PostTag = styled(Link)`
  text-decoration: none;
  font-family: 'Quattrocento', sans-serif;
`

const PostTitle = styled.h1`
  font-size: 2.5em;
`

const Teaser = styled.p`
  line-height: 1.7;
  font-size: 1.25em;
`

const Wrapper = styled.article`
  padding-bottom: 1em;
  position: relative;
  margin-left: 3rem;
  max-width: 100%;
`

const Date = styled.time`
  font-family: 'Quattrocento', sans-serif;
  position: absolute;
  right: 100%;
  top: 0;
  width: 3em;
  text-align: center;
  padding-right: 1em;

  @media (max-width: 800px) {
    top: 10px;
    padding-right: 0.4em;
  }
  span {
    font-size: 2em;
    display: block;
    @media (max-width: 800px) {
      font-size: 1.5em;
    }
    &:first-child {
      font-size: 1.3em;
      @media (max-width: 800px) {
        font-size: 0.8em;
      }
    }
  }
`

const Blog = props => {
  const posts = props.data.allMarkdownRemark.edges
  const siteUrl = props.data.site.siteMetadata.siteUrl
  return (
    <Layout>
      <ContentWrapper>
        <SEO
          title="All posts"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Tags minCount={5} className="hideOnMobile" />
        <div>
          Add my RSS feed <a href={`${siteUrl}/rss.xml`}>here</a>!
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags
          const [month, day] = node.frontmatter.date.split(' ')
          // Remove HTML tags from the output for plain text, and
          // encode HTML entities.
          const postExcerpt = excerpt(node.html)
          return (
            <Wrapper key={node.fields.slug}>
              <PostTitle>
                <BlogPostLink href={`blog${node.fields.slug}`} title={title}>
                  {title}
                </BlogPostLink>
              </PostTitle>
              <Date>
                <span>{month}</span>
                <span>{day}</span>
              </Date>
              <Teaser>{postExcerpt}</Teaser>
              {tags.map((tag, i) => {
                const isLast = i === tags.length - 1
                return (
                  <PostTag
                    title={`A tag leading to more articles about ${tag}`}
                    key={tag}
                    to={`/tags/${kebabCase(tag)}/`}
                  >
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
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          html
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
