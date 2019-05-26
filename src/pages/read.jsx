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
  line-height: 1.7;
  margin-bottom: 2rem;
  width: 55%;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    width: 90%;
  }
`

const IntroStyles = styled.span`
  font-size: 1.25rem;
`

const Reading = () => (
  <Layout>
    <SEO title="All posts" keywords={['gatsby', 'javascript', 'react']} />
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
        review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with. I find that quite often, people will speak of those they admire but not go into details. Michelle gave enough details about key people in her life that I almost felt I could feel them sitting next to me in the same room. 
        I was impressed to hear about her incredibly hard work ethic. I was also intrigued at how her parents raised her - to not be afraid of hard work, to be kind to others, and to be open to people and possibilities. I like how hers and Barack Obama's personalities seem to compliment as much as clash with each other. While I may not be a parent, I share her concerns over her children's protection while living at the white house, and admire the strength she displayed in the face of so much bad and unfair press coverage."
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
        review="I want to begin reading a lot more programming material and a lot of people told me this was a good place to start. The author clearly knows his stuff because he's able to explain fairly complex things in relatively few words. By the end of the book I was keen to learn more from his other books. As a fairly experiened developer, I was aware of the main concepts of JS already. However, I found out why these concepts came to be and learnt some more intricate details about them. There are a few comprehensive practical exercises to try out by yourself, and I did these in no time. I won't remember all the tips in the book, but I know it'll be easy to come back when I need to and find the information I need."
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
        type="Informative, practical, introductory."
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
        review="I heard of this book after seeing it quoted on an Instagram story. The quote was about Lily losing her baby, which was a difficult thing I felt she wrote about with grace and poignancy. After beginning the book, I found it to be a whirlwind - an honest, vivid and intense account of Lily's life from early beginnings to the present. Before this book I'd known that being famous was often a difficult thing to be. This book confirmed that and does a good job of explaining why. It made me feel grateful for my relatively low level of anonymity and for the people I can trust in my life. I admit that some experiences Lily described got to me quite a lot and triggered some unpleasant feelings, but I'm sure this wouldn't happen for everyone. I'm really glad I picked the book up (well, downloaded it). In the end, it was very interesting to hear about things how Lily experienced them and not from the page of a tabloid paper."
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
        type="Real, intense, triggering."
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
        review="I don't want to give away too many spoilers. The story is about a husband and wife who decide to split, and the events that follow this split. The book switches the conversations and experiences of the main characters between first and third person, which is an engrossing method I haven't come across before. The book is fairly long but an easy read - it had me yearning to read more at times when I'd have put other novels down. I don't know that much about what makes really good character development, but to me the characters seemed to be quite well-developed. There are some elements of the book that seem quite unrealistic, but this is just my opinion. Despite this, the book is an enjoyable read with plenty of emotions, deceit, and misfortune packed in. It's also worth it to read to the very end to see how everyone's separate deeds and doings come together."
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
        type="Descriptive, thrilling, unpredictable."
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
        review="Review coming soon..."
        picture={whenBreathBecomesAir}
        picAlt="When Breath Becomes Air book cover"
        methodAlt="Kindle"
        method={
          <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
        }
        length="229 pages"
        type="Reflective, haunting, real."
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
        review="Review coming soon..."
        picture={theDollsAlphabet}
        picAlt="The Dolls Alphabet book cover"
        methodAlt="Kindle"
        method={
          <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
        }
        length="160 pages"
        type="Mesmerising, skewed, absurd."
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
        review="Reading in progress..."
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
        type="Silly, satirical, surreal."
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
