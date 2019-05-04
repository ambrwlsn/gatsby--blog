import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'
import BookReview from '@components/book-review'

import becoming from '@pages/img/read/becoming.jpg'
import upAndGoing from '@pages/img/read/up_and_going.jpg'
import myThoughtsExactly from '@pages/img/read/my_thoughts_exactly.jpg'

import Headphones from '@pages/img/read/headphones'
import Kindle from '@pages/img/read/kindle'
// import Book from '@pages/img/read/book'

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
        review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with."
        picture={becoming}
        picAlt="Michelle Obama on her book cover"
        methodAlt="headphones"
        length="1143 minutes"
        method={
          <Headphones
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        type="Autobiography, strong, real."
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        review=""
        picture={upAndGoing}
        picAlt="Up and Going Book Cover"
        methodAlt="Kindle"
        method={
          <Kindle
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        length="68 pages"
        type="Autobiography, strong, real."
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        review=""
        picture={myThoughtsExactly}
        picAlt="Lily Allen on her book cover"
        methodAlt="Kindle"
        method={
          <Kindle
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        length="344 pages"
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
