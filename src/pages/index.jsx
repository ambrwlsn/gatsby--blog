import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bear from '../components/bear'
import Twitter from './img/twitter.svg'
import Github from './img/github.svg'
import Linkedin from './img/linkedin.svg'

const Image = styled.img`
  width: 2.5em;
  padding-right: 1em;
`

const HomePageLinks = styled.div`
  font-size: 5em;
  font-family: Open Sans;
`

const Index = () => (
  <Layout>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <HomePageLinks>
      <Link
        to="/blog/"
        style={{
          textDecoration: 'none',
          color: '#CCC',
        }}
      >
        Blog
      </Link>
      <Link
        to="/blog/wilt100days/"
        style={{
          textDecoration: 'none',
          color: '#CCC',
        }}
      >
        Learn
      </Link>
      <Link
        to="/reading/"
        style={{
          textDecoration: 'none',
          color: '#CCC',
        }}
      >
        Read
      </Link>
    </HomePageLinks>
    <Bear />
    <Image src={Twitter} alt="twitter" />
    <Image src={Github} alt="github" />
    <Image src={Linkedin} alt="linkedin" />
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
