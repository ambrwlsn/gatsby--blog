import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Splodge from '@components/img/splodge'
import Layout from '@components/layout'
import SEO from '@components/seo'

const Headline = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
`
const Fullstop = styled(Splodge)`
  margin-left: 0.3em;
`

const Reading = () => (
  <Layout>
    <SEO
      title="All posts"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    <Headline>
      Reading <Fullstop fill="currentColor" />
    </Headline>
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
