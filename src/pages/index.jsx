import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Twitter from './img/twitter.svg'
import Github from './img/github.svg'
import Linkedin from './img/linkedin.svg'

const Index = props => (
  // const siteTitle = props.data.site.siteMetadata.title

  <Layout location={props.location}>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <p>
      See my blog posts <Link to="/blog/">here</Link>.
    </p>
    <img src={Twitter} alt="twitter" />
    <img src={Github} alt="github" />
    <img src={Linkedin} alt="linkedin" />

    <Bio />
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
