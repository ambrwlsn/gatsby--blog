import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ContentWrapper from '@components/content-wrapper'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Arrow from '@components/img/back-to-top'

const Content = styled.article`
  padding-bottom: 1em;
`

const Hashtag = styled.a`
  text-decoration: none;
  color: var(--linkColor);
  font-size: 1.2rem;
`
const ContentStyles = styled.div`
  line-height: 1.6;
  font-size: 1rem;
`
const Title = styled.h1`
  font-family: 'Courgette', cursive;
  text-align: center;
`
const TitleStyles = styled.span`
  font-size: 1rem;
`

const PostTitle = styled.h2`
  font-family: 'Courgette', cursive;
`

const PostDate = styled.time`
  color: grey;
  font-family: 'Quattrocento', sans-serif;
  font-size: 0.9rem;
`

const BackToTop = styled(Arrow)`
  width: 22px;
`

const KnowledgeNuggets = props => {
  const posts = props.data.allMarkdownRemark.edges

  const NuggetDropdown = () => {
    return (
      <Fragment>
        {posts.map(({ node }) => {
          const { subject } = node.frontmatter
          return (
            <li key={subject}>
              <a href={`/learn#${subject.replace(/\s+/g, '')}`}>{subject}</a>
            </li>
          )
        })}
      </Fragment>
    )
  }

  return (
    <Layout>
      <ContentWrapper>
        <SEO
          title="Knowledge Nuggets"
          keywords={['learning', 'fun', 'javascript', 'react']}
          description="Small snippets of learnings from the web world"
        />
        <TitleStyles>
          <Title>Knowledge Nuggets 💛</Title>
        </TitleStyles>

        <ContentStyles>
          <details className="learnDetails">
            <summary className="learnSummary">Select</summary>
            <ul className="dropdown_menu">
              <NuggetDropdown />
            </ul>
          </details>

          <p>
            Here I will document handy nuggets of knowledge on what I{' '}
            <strong>learn</strong> in my journey as a developer. Enjoy!
          </p>

          {posts.map(({ node }) => {
            const { subject, postdate, number } = node.frontmatter
            return (
              <Fragment key={number}>
                <PostTitle id={subject.replace(/\s+/g, '')}>
                  {subject} <PostDate>{postdate}</PostDate>
                  &nbsp;
                  <Hashtag href={`#${subject.replace(/\s+/g, '')}`}>#</Hashtag>
                  &nbsp;
                  <a href="#">
                    <BackToTop className="back-to-the-top" />
                  </a>
                </PostTitle>
                <Content
                  className="e-content"
                  dangerouslySetInnerHTML={{ __html: node.html }}
                />
              </Fragment>
            )
          })}
        </ContentStyles>
      </ContentWrapper>
    </Layout>
  )
}

export default KnowledgeNuggets

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___number], order: DESC }
      filter: { frontmatter: { posttype: { eq: "nugget" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            subject
            posttype
            number
            postdate
          }
        }
      }
    }
  }
`
