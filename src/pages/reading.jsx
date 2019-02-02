import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Reading = () => (
  <Layout>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <p>Here are my reading achievements.</p>
    <Bio />
  </Layout>
)

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
