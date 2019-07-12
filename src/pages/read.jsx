import React from 'react'
import { graphql, Link } from 'gatsby'
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
// import theBear from '@pages/img/read/the_bear.jpg'
import theHurt from '@pages/img/read/this_is_going_to_hurt.jpg'
import angryPlanet from '@pages/img/read/angry-planet.jpg'

import Headphones from '@pages/img/read/headphones'
import Kindle from '@pages/img/read/kindle'
// import Book from '@pages/img/read/book'

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
        kindle, paperback), and summary of characteristics. See the books I read
        last year <Link to="/blog/books/">here</Link> :)
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
        review="I heard of this book after seeing it quoted on an Instagram story. The quote was about Lily losing her baby, which was a difficult thing I felt she wrote about with grace and poignancy. After beginning the book, I found it to be a whirlwind - an honest, vivid and intense account of Lily's life from early beginnings to the present. Before this book I'd known that being famous was often a difficult thing to be. This book confirmed that and does a good job of explaining why. It made me feel grateful for my relatively high level of anonymity and for the people I can trust in my life. I admit that some experiences Lily described got to me quite a lot and triggered some unpleasant feelings, but I'm sure this wouldn't happen for everyone. I'm really glad I picked the book up (well, downloaded it). In the end, it was very interesting to hear about things how Lily experienced them and not from the page of a tabloid paper."
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
        review="This is one of the most poignant and thoughtful books I've read. Paul documented his journey with a terribly illness that sprang upon him very early in life. We get to hear about his early life, his time working as a young doctor and the strains it put on his relationship. Getting a glimpse into someone else's life - not only the shiny, polished parts - is quite an honour. Paul explained that he'd always loved writing and would write if he was not a doctor. I really like how he was able to enjoy writing even though his illness was slowly taking away the most important part of his life - his work as brain surgeon. I enjoyed Paul's wisdom throughout the book - in particular how he explained that a job isn't something you do for the monetary compensation. It's something you do because it brings you meaning. Otherwise - why would anyone make holes in people's brains? A haunting thing is that Paul never got to finish his book, which shows that nothing in life is certain and you should treat each day as a gift."
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
        review="I knew that book is a little something different before I'd even read the first page. I like that. I think it's good to read unusual things sometimes. The book is an entirely fictional (I hope) collection of short stories that I believe are designed to make you think. Although, to be honest, they could be written for no reason other than the author liked them. There are similarities between the stories, mainly in the use of props and descriptions of people. Not all of the stories were enjoyable for me, but they were worth getting through so that I could reach the ones that were. I particularly enjoyed two or three of them very much. The author writes about dystopian worlds with different social rules, and I find that very interesting. I think we get used to the cultural rules of our society and they end up as background noise. Hearing about a different set of rules is unnerving but can be refreshing. The stories dealing with these rules are ones that I still think of from time to time. It's nice that the contents of a book stay with me like that."
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
    {/* <ReviewSection>
      <BookReview
        title="The Bear Went Over The Mountain by William Kotzwinkle"
        review="Reading in progress - 50 pages to go."
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
    </ReviewSection> */}
    <ReviewSection>
      <BookReview
        title="This Is Going to Hurt: Secret Diaries of a Junior Doctor by Adam Kay"
        review="I got into this book right away and could hardly put it down. Adam Kay's sense of humour made me feel nostalgic for the UK, which felt great by itself. But, the most amazing thing about this book is that it gives a valuable insight into what it's like to be a doctor. Even if some of it seems a little scripted, the majority served to grow my empathy and thankfulness towards doctors, especially those who work where life and death is involved. It reminded me of my time working in a resthome for the elderly. Adam describes to us humanity at its most vulnerable, scared, angry and exhausted. This is something you can't grasp from newspapers or quotes from politicians. The book ends with a call to do something to make people aware of the plight of employees within the NHS. How we should treasure everyone who works there for being there to help us when we need it the most. Adam's dry sense of humour and realness spill forth from every page of his book and I am so, so glad I read it. I miss it already!"
        picture={theHurt}
        picAlt="This Is Going to Hurt book cover"
        methodAlt="Kindle"
        method={
          <Kindle
            width={110}
            height={110}
            fill="var(--readText)"
            stroke="var(--readText)"
          />
        }
        length="285 pages"
        type="Funny, shocking, revealing."
        reviewColour="#CED6E1"
        buttonColour="#ADBAC3"
        lengthColour="#F6FB5B"
        methodColour="#32B2DF"
        typeColour="#B894A1"
      />
    </ReviewSection>
    <ReviewSection>
      <BookReview
        title="The Long Way to a Small, Angry Planet by Becky Chambers"
        review="Oh I loved this one - the characters, the dialogue, and the imagery. I found myself feeling multiple emotions throughout - from anger to sadness to fear. I don't even generally like science fiction books but this one is so down-to-earth (not literally), and so full of feeling and beautiful ideas that I never wanted to put it down. This book made me examine myself, and humanity. It put into perspective that while humans can be great, they can also be flawed. You should read it to properly understand what I mean ;) Also, the different alien characters in this book are simply delightful. We get to hear about their histories, their peculiarities, their cultures. They are all so endearing and the author makes them seem so plausible and real! I found this really incredible. Another thing I love is that there are gay and non-binary characters - I think it's important for mainstream books to have more of these. The feelings and beautiful perspectives I got from this book will stay with me for a long time - I feel lucky to have found this one (through a friend's recommendation) :)"
        picture={angryPlanet}
        picAlt="The Long Way to a Small, Angry Planet book cover"
        methodAlt="Kindle"
        method={
          <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
        }
        length="432 pages"
        type="Enlightening, funny, surprising."
        reviewColour="#E8D4BC"
        buttonColour="#C7AD8E"
        lengthColour="#4E76AF"
        methodColour="#2C2D28"
        typeColour="#B7BDD0"
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
