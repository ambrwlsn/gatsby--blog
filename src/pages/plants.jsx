import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'

const PhotoGrid = styled.div`
  display: grid;
  margin: 0 auto;
  width: 90%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(auto, 100px);

  @media (min-width: 800px) {
    width: 55%;
    margin-bottom: 1rem;
  }
`

const Title = styled.h1`
  text-align: center;
  font-family: 'Courgette', sans-serif;
`

const Intro = styled.p`
  margin: 0 auto;
  line-height: 1.7;
  margin-bottom: 2rem;
  width: 55%;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    width: 90%;
  }
`

const IntroStyles = styled.span`
  font-size: 1rem;
`

const Plants = props => {
  const plantPosts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Plants I Own" keywords={['plants', 'plant collection']} />
      <Title>Plants</Title>
      <IntroStyles>
        <Intro>
          Here are the plants I've collected in my flat - there is care info,
          pictures, progress statuses and more! This page is in progress{' '}
          <span role="img" aria-label="seedling emoji">
            &#x1f331;
          </span>
        </Intro>
        <PhotoGrid>
          {plantPosts.map(({ node }) => {
            const { subject, number } = node.frontmatter
            return (
              <React.Fragment key={number}>
                <Link to={`/plants/${node.fields.slug}`}>{subject}</Link>
              </React.Fragment>
            )
          })}
        </PhotoGrid>
      </IntroStyles>
    </Layout>
  )
}

export default Plants

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___subject], order: ASC }
      filter: { fileAbsolutePath: { regex: "/content/plants/" } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            subject
            posttype
            number
            updated
          }
        }
      }
    }
  }
`
