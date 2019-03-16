import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
// import Twitter from './img/twitter.svg'
// import Github from './img/github.svg'
// import Linkedin from './img/linkedin.svg'

const HomePage = styled.div`
  font-size: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomepageLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin-top: 1em;
`

const Index = () => (
  <Layout>
    <SEO
      title="All posts"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    <HomePage>
      <HomepageLink to="/blog/">Blog</HomepageLink>
      <HomepageLink to="/learn/">Learn</HomepageLink>
      <HomepageLink to="/read/">Read</HomepageLink>
    </HomePage>
    {/* <Image src={Twitter} alt="twitter" />
    <Image src={Github} alt="github" />
    <Image src={Linkedin} alt="linkedin" /> */}
  </Layout>
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
