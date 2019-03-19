import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Splodge from '@components/img/splodge'
import Layout from '@components/layout'
import SEO from '@components/seo'
import Paper from '@components/img/paper.svg'

const Headline = styled.h1`
  font-size: 7em;
  background: url(${Paper}) no-repeat;
  -webkit-background-clip: text;
  color: transparent;
`
const Fullstop = styled(Splodge)`
  margin-left: 0.7em;
  margin-top: 1.3em;
`
const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Reading = () => (
  <Layout>
    <SEO
      title="All posts"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    <A>
      <Headline>Reading</Headline>

      <Fullstop fill="currentColor" />
    </A>
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
