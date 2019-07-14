import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import upAndGoing from './img/up_and_going.jpg'

const UpAndGoing = () => (
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
)

export default UpAndGoing
