import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Learning = props => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
      <p>Here are my learning achievements.</p>
      <Bio />
    </Layout>
  )
}

export default Learning

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
