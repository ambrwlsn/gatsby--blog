import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import everythingInside from './img/everything_inside.jpg'

const EverythingInside = () => {
  return (
    <BookReview
      title="Everything Inside by Edwidge Danticat"
      review="Each story in this book is different although most are focused around either Miami, Florida, Haiti, or both. The stories focus subtly on relatable but difficult topics. The topics seem to be ones that nobody talks about much, but rather tend to stay within families. There is something incredibly human about each story. I feel like some stories moved quite slowly, where many actions and reactions are described in detail. Perhaps some readers would like the point of each story to arrive more quickly. But, I found something calming about being brought through each story day-by-day rather than all at once. This aspect added to the human feeling of each story for me. The stories are must less 'here is an action movie of someone's life' and rather 'here is this person's real life, boring parts and all'. This is something I really appreciate, because I feel like so few authors (and so few people) tell such relatable stories that validate you and make you feel like you are a normal, okay human after all."
      picture={everythingInside}
      picAlt="Everything Inside book cover"
      methodAlt="Kindle"
      method={<Book width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />}
      length="220 pages"
      type="Insightful, human, relatable."
      reviewColour="#EAEAF0"
      buttonColour="#B2B3B9"
      lengthColour="#77C77F"
      methodColour="#0DB3A1"
      typeColour="#B1E9FF"
    />
  )
}

export default EverythingInside
