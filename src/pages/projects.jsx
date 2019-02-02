import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
    <p>Here are my projects.</p>
    <Bio />
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
