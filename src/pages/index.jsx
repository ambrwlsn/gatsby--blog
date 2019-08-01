import React, { Fragment } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CatController from '@components/cat-controller'
import Github from './img/github'
import Twitter from './img/twitter'

const Cat = styled(CatController)`
  stroke: black;
  fill: #565252;
  position: absolute;
  bottom: 5em;
  right: 3em;
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
  font-size: 1.25rem;
  line-height: 1.6;
  @media (max-width: 800px) {
    max-width: 80%;
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
              Hi, my name's Amber and I am a web developer. I recently
              refurbished my site and it's in beta mode. This means I've
              achieved a bunch of things I want to do, and need some more time
              to finish the rest. See{' '}
              <Link to="/projects">the list of things</Link> here.
            </p>
            <p>
              <a
                style={{ marginRight: '1rem' }}
                href="https://github.com/ambrwlsn"
              >
                <Github width="25" height="25" className="social-icon" />
              </a>
              <a href="https://twitter.com/ambrwlsn90">
                <Twitter width="25" height="25" className="social-icon" />
              </a>
            </p>
          </Introduction>
        </IntroductionBox>
      </Layout>
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

// <Social>
// <Github width="25" height="25" fill="var(--textColor)" />
// <Github width="25" height="25" fill="var(--textColor)" />
// <Github width="25" height="25" fill="var(--textColor)" />
// </Social>
