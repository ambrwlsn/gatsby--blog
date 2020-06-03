import React from 'react'
import { Link, graphql } from 'gatsby'
import ContentWrapper from '@components/content-wrapper'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PlantNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const Title = styled.h1`
  font-family: 'Courgette', cursive;
  font-size: 2.3rem;
  @media (max-width: 800px) {
    margin: 0;
    margin-bottom: 0.8em;
  }
`

const Content = styled.div`
  line-height: 1.7;
  font-size: 1rem;
`

const PlantPostTemplate = props => {
  const plantPost = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout>
      <ContentWrapper>
        <SEO
          title={plantPost.frontmatter.subject}
          description=""
          keywords=""
          slug={plantPost.fields.slug}
        />
        <main>
          <Title className="p-name">{plantPost.frontmatter.subject}</Title>
          <p
            style={{ fontWeight: '600' }}
          >{`Updated: ${plantPost.frontmatter.updated}`}</p>
          <Content dangerouslySetInnerHTML={{ __html: plantPost.html }} />
        </main>
        <hr />
        <PlantNavigation>
          <li>
            {previous && (
              <Link
                to={`/plants${previous.fields.slug}`}
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
                to={`/plants${next.fields.slug}`}
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
        </PlantNavigation>
      </ContentWrapper>
    </Layout>
  )
}

export default PlantPostTemplate

/* https://github.com/gatsbyjs/gatsby/tree/master/packages/
 * gatsby-transformer-remark
 *
 * Each Markdown file is parsed into a node of type MarkdownRemark.
 */

export const pageQuery = graphql`
  query PlantPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        subject
        updated
      }
    }
  }
`
