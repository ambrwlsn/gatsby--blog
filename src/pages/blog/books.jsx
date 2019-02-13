import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../../components/bio'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const Reading = () => (
  <Layout>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <p>
      See <a href="">here</a> my reading achievements from last year.
    </p>
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
