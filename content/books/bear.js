import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import theBear from './img/the_bear.jpg'

const Bear = () => (
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
)

export default Bear
