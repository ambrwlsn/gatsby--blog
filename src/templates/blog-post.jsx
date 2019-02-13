import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

// Utilities
import format from 'date-fns/format'
import '../utils/global.css'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.main`
  padding: 0 8em;
`
const Title = styled.h1`
  font-family: 'Courgette', cursive;
  font-size: 3em;
`
const Content = styled.div`
  font-family: 'Quattrocento', sans-serif;
  line-height: 1.7;
  font-size: 1.25em;
`

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  // const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const nicelyFormattedDate = format(new Date(post.frontmatter.date), 'Do MMMM YYYY')
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={post.frontmatter.keywords}
        slug={post.fields.slug}
        tags={post.frontmatter.tags}
      />
      <Link to="/blog" rel="prev">
        {/* ← {previous.frontmatter.title} */}← blog home
      </Link>
      <Wrapper>
        <article>
          <header>
            <Title className="p-name">{post.frontmatter.title}</Title>
          </header>
          <time className="dt-published" dateTime={post.frontmatter.date}>
            {nicelyFormattedDate}
          </time>
          <section className="h-entry">
            <p>Time to read: {post.timeToRead}&nbsp;minutes</p>
            {post.wordCount.words ? <p>Wordcount: {post.wordCount.words}</p> : null}
            <Content className="e-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </section>
          <hr />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`blog/${previous.fields.slug}`} rel="prev">
                  {/* ← {previous.frontmatter.title} */}← previous
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`blog/${next.fields.slug}`} rel="next">
                  {/* {next.frontmatter.title} → */}
                  next →
                </Link>
              )}
            </li>
          </ul>
        </article>
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

/* https://github.com/gatsbyjs/gatsby/tree/master/packages/
 * gatsby-transformer-remark
 *
 * Each Markdown file is parsed into a node of type MarkdownRemark.
 */

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        date
        keywords
        tags
      }
    }
  }
`
