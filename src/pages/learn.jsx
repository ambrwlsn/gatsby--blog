import React, { Fragment } from 'react'
import { graphql, navigate } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import ContentWrapper from '@components/content-wrapper'
import LeafyLogo from '@components/wilt-logo'
import wiltTwitterCardImage from './img/wilt.png'

import Layout from '@components/layout'
import SEO from '@components/seo'
import Arrow from '@components/img/back-to-top'

const SmoothScrollStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
`

const Content = styled.article`
  padding-bottom: 1em;
`

const Hashtag = styled.a`
  text-decoration: none;
  color: var(--linkColor);
`
const ContentStyles = styled.div`
  line-height: 1.6;
  font-size: 1.25rem;
`
const Title = styled.h1`
  font-family: 'Courgette', cursive;
  text-align: center;
`
const TitleStyles = styled.span`
  font-size: 1.25rem;
`

const PostTitle = styled.h2`
  font-family: 'Courgette', cursive;
`

const PostDate = styled.time`
  color: grey;
  font-family: 'Quattrocento', sans-serif;
  font-size: .8rem;
`

const WILT = styled(LeafyLogo)`
  display: block;
  margin: auto;
  max-width: 100%;
`

const BackToTop = styled(Arrow)``

class WiltPage extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    const fullLink = `/learn#${selectedOption.anchorName}`
    navigate(fullLink)
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const WiltDropdownNoJs = () => {
      return (
        <Fragment>
          {posts.map(({ node }) => {
            const { subject, day } = node.frontmatter
            return (
              <li key={day}>
                <a href={`/learn#${subject.replace(/\s+/g, '')}`}>
                  {`${day} - ${subject}`}
                </a>
              </li>
            )
          })}
        </Fragment>
      )
    }

    return (
      <Layout>
        <ContentWrapper>
          <SmoothScrollStyle />
          <SEO
            title="What I Learned Today"
            keywords={['wilt', 'learning', 'javascript', 'learn']}
            twitterImage={wiltTwitterCardImage}
          />
          <TitleStyles>
            <Title>What I Learned Today - 100 Days</Title>
          </TitleStyles>

          <ContentStyles>
            <WILT leafColor="green" textColor="currentColor" />

            <details className="learnDetails">
              <summary className="learnSummary">Select</summary>
              <ul className="dropdown_menu">
                <WiltDropdownNoJs />
              </ul>
            </details>
            <p>
              I loved writing <a href="../words">100 words for 100 days</a>{' '}
              &amp; now want to write 100 days of little HTML, CSS or JS (ES6)
              lessons. I&apos;m going to write about methods and techniques that
              I use often, either at work or on personal projects. The lessons
              will be written from a <strong>NEWBIE</strong> (i.e. my)
              perspective, and so may not be perfect, but they will offer a
              valuable insight into the thoughts of a new developer. My goal is
              to learn/document things for myself, and to show people,
              particularly other new developers, how someone like me approaches
              my work and hopefully give them something they can relate to :)
              Thanks to <a href="https:lottejackson.com">Charlotte</a> for the
              suggestion!
            </p>
            <blockquote>
              <p>
                Write about a different pseudo class every day? Or a different
                HTML element or JS lesson every day? Anything you want to learn
                more about? I had hoped to do something similar and never got
                round to it.
              </p>
              &mdash; Charlotte Jackson (@lottejackson){' '}
              <a href="https://twitter.com/lottejackson/status/991415549476270081?ref_src=twsrc%5Etfw">
                May 1, 2018
              </a>
            </blockquote>
            {posts.map(({ node }) => {
              const { day, subject, postdate } = node.frontmatter
              return (
                <Fragment key={day}>
                  <PostTitle id={subject.replace(/\s+/g, '')}>
                    {`${day} - ${subject}`}{' '}
                    <PostDate>{postdate}</PostDate>
                    &nbsp;
                    <Hashtag href={`#${subject.replace(/\s+/g, '')}`}>
                      #
                    </Hashtag>
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
}

export default WiltPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___number], order: DESC }
      filter: { frontmatter: { posttype: { eq: "wilt" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            day
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
