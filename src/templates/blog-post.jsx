import React from 'react'
import { Link, graphql } from 'gatsby'

// Utilities
import format from 'date-fns/format'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  const nicelyFormattedDate = format(new Date(post.frontmatter.date), 'Do MMMM YYYY')
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={[post.frontmatter.keywords]}
        slug={post.fields.slug}
      />
      <h1 className="p-name">{post.frontmatter.title}</h1>
      <time className="dt-published" dateTime={post.frontmatter.date}>
        {nicelyFormattedDate}
      </time>
      <section className="h-entry">
        <p>Time to read: {post.timeToRead}&nbsp;minutes</p>
        <p>Wordcount: {post.wordCount.words}</p>
        <div className="e-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <hr />
      <Bio />

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
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`blog/${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
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
        published
        keywords
      }
    }
  }
`
