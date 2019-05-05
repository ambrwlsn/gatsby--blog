import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'
import BookReview from '@components/book-review'

import becoming from '@pages/img/read/becoming.jpg'
import upAndGoing from '@pages/img/read/up_and_going.jpg'
import myThoughtsExactly from '@pages/img/read/my_thoughts_exactly.jpg'
import ourHouse from '@pages/img/read/our_house.jpg'
import whenBreathBecomesAir from '@pages/img/read/when_breath_becomes_air.jpg'
import theDollsAlphabet from '@pages/img/read/the_dolls_alphabet.jpg'
import theBear from '@pages/img/read/the_bear.jpg'

import Headphones from '@pages/img/read/headphones'
import Kindle from '@pages/img/read/kindle'
import Book from '@pages/img/read/book'

const ReviewSection = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-align: center;
  font-family: 'Courgette', sans-serif;
`

const TitleStyles = styled.span`
  font-size: 1.25rem;
`

const Intro = styled.p`
  margin: 0 auto;
  max-width: 80%;
  line-height: 1.7;
  margin-bottom: 1rem;
`

const IntroStyles = styled.span`
  font-size: 1.25rem;
`

const Reading = () => (
  <Layout>
    <SEO
      title="All posts"
      keywords={['blog', 'gatsby', 'javascript', 'react']}
    />
    <TitleStyles>
      <Title>Book Reviews</Title>
    </TitleStyles>
    <IntroStyles>
      <Intro>
        Here are the books I've read or listened to this year. Each block
        contains a review, a picture, the book's length, format (audiobook,
        kindle, paperback), and summary of characteristics.
      </Intro>
    </IntroStyles>
    <ReviewSection>
      <BookReview
        title="Becoming by Michelle Obama"
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
        reviewColour="#d6dcd8"
        buttonColour="#a7a7a7"
        lengthColour="#d4b7a7"
        methodColour="#f5f3e9"
        typeColour="#b4ccce"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="Up and Going by Kyle Simpson"
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
        type=""
        reviewColour="#e9e9e9"
        buttonColour="#adacac"
        lengthColour="#88878a"
        methodColour="#f7e032"
        typeColour="#e7e7e7"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="My Thoughts Exactly by Lily Allen"
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
        type=""
        reviewColour="#e9e58a"
        buttonColour="#a9a664"
        lengthColour="#f8e1e7"
        methodColour="#e4b7a8"
        typeColour="#eee4dc"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="Our House by Louise Candlish"
        review=""
        picture={ourHouse}
        picAlt="The Our House book cover"
        methodAlt="Kindle"
        method={
          <Kindle
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        length="442 pages"
        type=""
        reviewColour="#cac3bb"
        buttonColour="#8e8984"
        lengthColour="#f4b7ae"
        methodColour="#fbef01"
        typeColour="#7a9bba"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="When Breath Becomes Air by Paul Kalanithi"
        review=""
        picture={whenBreathBecomesAir}
        picAlt="When Breath Becomes Air book cover"
        methodAlt="Kindle"
        method={
          <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
        }
        length="229 pages"
        type=""
        reviewColour="#d4cccf"
        buttonColour="#908b8d"
        lengthColour="#b98f61"
        methodColour="#1f3444"
        typeColour="#b0c8e8"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="The Dolls Alphabet by Camilla Grudova"
        review=""
        picture={theDollsAlphabet}
        picAlt="The Dolls Alphabet book cover"
        methodAlt="Kindle"
        method={
          <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
        }
        length="160 pages"
        type=""
        reviewColour="#a6baf1"
        buttonColour="#7c8ebc"
        lengthColour="#7c8ebc"
        methodColour="#0033a0"
        typeColour="#7c8ebc"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="The Bear Went Over The Mountain by William Kotzwinkle"
        review=""
        picture={theBear}
        picAlt="The Bear Went Over The Mountain book cover"
        methodAlt="Book"
        method={
          <Book
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        length="252 pages"
        type=""
        reviewColour="#e5e8ed"
        buttonColour="#b3b4b5"
        lengthColour="#9a7f56"
        methodColour="#bbcae3"
        typeColour="#8e97b4"
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
