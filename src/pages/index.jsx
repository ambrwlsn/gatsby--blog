import React, { Fragment } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CatController from '@components/cat-controller'
import Plant from '@components/img/plant'
import GitHubSVG from './img/github'
import TwitterSVG from './img/twitter'

const Cat = styled(CatController)`
  stroke: black;
  fill: #565252;
  position: absolute;
  bottom: 5rem;
  right: 0;

  @media (min-width: 380px) {
    bottom: 5rem;
    right: 1rem;
  }

  @media (min-width: 500px) {
    bottom: 5rem;
    right: 3rem;
  }
`

const PlantContainer = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;

  @media (min-width: 380px) {
    left: 1rem;
  }

  @media (min-width: 500px) {
    left: 3rem;
  }
`

const PlantPicture = styled(Plant)`
  height: 8rem;
`

const Block = styled.div`
  width: 100vw;
  background-color: var(--backgroundColor);
  height: 90px;
  border-top: 12px solid var(--blockBorder);
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
`

const IntroductionBox = styled.main`
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Introduction = styled.div`
  margin: 0 auto;
  max-width: 60%;
  font-size: 1rem;
  line-height: 1.6;
  @media (max-width: 800px) {
    max-width: 80%;
  }
`

const GitHubLink = styled.a`
  margin-right: 1em;
`

const TwitterLink = styled.a``

const GitHubIcon = styled(GitHubSVG)`
  fill: var(--textColor);
  &:hover {
    fill: var(--linkColorHover);
  }
`

const TwitterIcon = styled(TwitterSVG)`
  fill: var(--textColor);
  &:hover {
    fill: var(--linkColorHover);
  }
`

function Index() {
  return (
    <Fragment>
      <Layout>
        <SEO
          title="Homepage"
          keywords={[
            'blog',
            'gatsby',
            'javascript',
            'developer',
            'junior developer',
          ]}
        />
        <IntroductionBox>
          <Introduction>
            <p>
              Hi, my name's Amber and I am a mid-level front end engineer. See{' '}
              <Link to="/projects">a list of things of my site to-do list</Link>{' '}
              here.
            </p>
            <p>
              <GitHubLink href="https://github.com/ambrwlsn">
                <GitHubIcon width="25" height="25" />
              </GitHubLink>
              <TwitterLink href="https://twitter.com/ambrwlsn90">
                <TwitterIcon width="25" height="25" />
              </TwitterLink>
            </p>
          </Introduction>
        </IntroductionBox>
      </Layout>
      <PlantContainer>
        <Link to="/plants">
          <PlantPicture />
        </Link>
      </PlantContainer>
      <Cat />

      <Block />
    </Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
