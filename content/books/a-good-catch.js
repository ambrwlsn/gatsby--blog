import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import goodCatch from './img/a-good-catch.jpg'

const AGoodCatch = () => {
  return (
    <BookReview
      title="A Good Catch by Fern Britton"
      review="I bought this because I quite fancied reading a book that was given an award for being a good story to read while on holiday. However, on the whole I was disappointed with a number of aspects in the book. I felt most characters are good by themselves, with lots of potential. But I think they didn't go well together. The relationship between them doesn't seem realistic at all. The storyline seemed a bit chaotic as well, and no part of it seemed to be given time to develop in a more meaningful way. I feel like the author threw together lots of parts of the story just to see if they'd stick. The book is an easy read though with some twists and turns that aren't too predictable, and some of the dialogue is quite enjoyable."
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
      type="Incohesive, under-developed, emotional"
      reviewColour="#fcd4d8"
      buttonColour="#c3a3a7"
      lengthColour="#f5e6be"
      methodColour="#9ed8f2"
      typeColour="#deeeeb"
    />
  )
}

export default AGoodCatch
