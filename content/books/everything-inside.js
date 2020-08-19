import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import everythingInside from './img/everything_inside.jpg'

const EverythingInside = () => {
  return (
    <BookReview
      title="Everything Inside by Edwidge Danticat"
      review="80% through"
      picture={everythingInside}
      picAlt="Everything Inside book cover"
      methodAlt="Kindle"
      method={<Book width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />}
      length="220 pages"
      type=""
      reviewColour="#EAEAF0"
      buttonColour="#B2B3B9"
      lengthColour="#77C77F"
      methodColour="#0DB3A1"
      typeColour="#B1E9FF"
    />
  )
}

export default EverythingInside
