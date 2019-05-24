import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import JsonLd from '@components/jsonld'
import ContentWrapper from '../components/content-wrapper'
import Clock from '../components/img/clock'

// Utilities
import format from 'date-fns/format'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.main``
const Title = styled.h1`
  font-family: 'Courgette', cursive;
  font-size: 2.5rem;
  @media (max-width: 800px) {
    margin-left: 3rem;
    max-width: 80%;
  }
`
const BlogPostDate = styled.time`
  margin-right: 0.5rem;
  @media (max-width: 800px) {
    margin: 0;
  }
`

const PostData = styled.div`
  font-weight: 600;
  font-size: 1.2em;
  display: flex;
  align-items: flex-end;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Content = styled.div`
  line-height: 1.7;
  font-size: 1.25em;
`

const ClockIcon = styled(Clock)`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  @media (max-width: 800px) {
    &:first-child {
      margin-left: 0;
    }
  }
`

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext
  const nicelyFormattedDate = format(
    new Date(post.frontmatter.date),
    'MMMM Do, YYYY'
  )
  const clocks = post.timeToRead / 2
  return (
    <Layout>
      <ContentWrapper>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          keywords={post.frontmatter.keywords}
          slug={post.fields.slug}
          tags={post.frontmatter.tags}
        />
        <Wrapper>
          <main>
            <article>
              <header>
                <Title className="p-name">{post.frontmatter.title}</Title>
              </header>
              <PostData>
                <BlogPostDate
                  className="dt-published"
                  dateDate={post.frontmatter.date}
                >
                  {nicelyFormattedDate}
                </BlogPostDate>
                <div style={{ marginTop: '.5rem' }}>
                  {Array.apply(null, { length: clocks }).map(i => (
                    <ClockIcon key={i} color="currentColor" />
                  ))}
                </div>
              </PostData>
              <section className="h-entry">
                <Content
                  className="e-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
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
                    <Link
                      to={`blog/${previous.fields.slug}`}
                      rel="prev"
                      style={{
                        textDecoration: 'none',
                        fontWeight: '900',
                      }}
                    >
                      ← previous
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link
                      to={`blog/${next.fields.slug}`}
                      rel="next"
                      style={{
                        textDecoration: 'none',
                        fontWeight: '900',
                      }}
                    >
                      next →
                    </Link>
                  )}
                </li>
              </ul>
            </article>
          </main>
        </Wrapper>
      </ContentWrapper>
      <JsonLd
        title={post.frontmatter.title}
        keywords={`${post.frontmatter.keywords}, ${post.frontmatter.tags}`}
        name={props.data.site.siteMetadata.author}
        url={props.data.site.siteMetadata.siteUrl}
        date={post.frontmatter.date}
      />
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
        siteUrl
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
