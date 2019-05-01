import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'

import BookReview from '@components/book-review'
import becoming from '@pages/img/read/becoming.jpg'
import upAndGoing from '@pages/img/read/up_and_going.jpg'
import Github from '@pages/img/github'

const ReviewSection = styled.section`
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
    <ReviewSection>
      <BookReview
        review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to BOO hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. boooo"
        picture={becoming}
        picAlt="Michelle Obama on her book cover"
        methodAlt="headphones"
        length="19h 3m"
        method={<Github width="100%" />}
        type="Autobiography, strong, real."
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed."
        picture={upAndGoing}
        picAlt="Michelle Obama on her book cover"
        methodAlt="headphones"
        length="19h 3m"
        method={<Github width="100%" />}
        type="Autobiography, strong, real."
      />
    </ReviewSection>
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
