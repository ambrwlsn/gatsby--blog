import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import ourHouse from './img/our_house.jpg'

const OurHouse = () => (
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
)

export default OurHouse
