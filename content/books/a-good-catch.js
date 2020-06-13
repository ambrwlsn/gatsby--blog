import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import goodCatch from './img/a-good-catch.jpg'

const AGoodCatch = () => {
  return (
    <BookReview
      title="A Good Catch by Fern Britton"
      review="50% through"
      picture={goodCatch}
      picAlt="A Good Catch book cover"
      methodAlt="Kindle"
      method={
        <Kindle
          width={110}
          height={110}
          fill="var(--readText)"
          stroke="var(--readText)"
        />
      }
      length="434 pages"
      type=""
      reviewColour="#fcd4d8"
      buttonColour="#c3a3a7"
      lengthColour="#f5e6be"
      methodColour="#9ed8f2"
      typeColour="#deeeeb"
    />
  )
}

export default AGoodCatch
