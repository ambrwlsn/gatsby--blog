import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Kitty from '@components/img/cat'

// import Twitter from './img/twitter.svg'
// import Github from './img/github.svg'
// import Linkedin from './img/linkedin.svg'

// const HomePage = styled.div`
//   font-size: 5em;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

// const HomepageLink = styled(Link)`
//   text-decoration: none;
//   font-weight: 600;
//   margin-top: 1em;
// `

const Cat = styled(Kitty)`
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
  border-top: 15px solid var(--linkColor);
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
`

const Index = () => (
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
      {/* <HomePage>
      <HomepageLink to="/blog/">Blog</HomepageLink>
      <HomepageLink to="/learn/">Learn</HomepageLink>
      <HomepageLink to="/read/">Read</HomepageLink>
    </HomePage> */}
      {/* <Image src={Twitter} alt="twitter" />
    <Image src={Github} alt="github" />
    <Image src={Linkedin} alt="linkedin" /> */}
    </Layout>
    <Cat eye="var(--catEyeColor)" />
    <Block />
  </Fragment>
)

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
