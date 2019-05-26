import React, { Fragment } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

// import useEventListener from '@hooks/use-event-listener'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CatController from '@components/cat-controller'

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
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Introduction = styled.p`
  margin: 0 auto;
  max-width: 60%;
  font-size: 1.25rem;
  line-height: 1.6;
  @media (max-width: 800px) {
    max-width: 90%;
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
            Hi, my name's Amber and I am a web developer. I recently refurbished
            my site and it's in beta mode. This means I've achieved a bunch of
            things I want to do, and need some more time to finish the rest. See
            the list <Link to="/projects">here</Link>.
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
