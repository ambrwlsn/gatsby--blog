import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Splodge from '@components/img/splodge'
import Layout from '@components/layout'
import SEO from '@components/seo'
import Paper from '@components/img/paper.svg'
import BookReview from '@components/book-review'
import becoming from '@pages/img/read/becoming.jpg'
import Github from './img/github'

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

const Githubb = styled(Github)``

const ReviewContainer = styled.div`
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
    <ReviewContainer>
      <BookReview
        review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with."
        picture={becoming}
        picAlt="Michelle Obama on her book cover"
        methodAlt="headphones"
        length="19h 3m"
        method={<Githubb />}
        type="Autobiography, strong, real."
      />
    </ReviewContainer>
    <ReviewContainer>
      <BookReview
        review="A good book."
        picture={becoming}
        picAlt="Michelle Obama on her book cover"
        methodAlt="headphones"
        length="19h 3m"
        method={<Githubb />}
        type="Autobiography, strong, real."
      />
    </ReviewContainer>
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
