import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Speaking = () => (
  <Layout>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <p>Here are my speaking achievements.</p>
    <Bio />
  </Layout>
)

export default Speaking

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
