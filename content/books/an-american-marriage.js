import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import americanMarriage from './img/an-american-marriage.jpg'

const AngryPlanet = () => {
  return (
    <BookReview
      title="An American Marriage by Tayari Jones"
      review="The format of this story is one that I haven't always enjoyed in other books, but I did in this one. Each chapter is from the perspective of one person. My very favourite thing about the book is that the characters seemed to pop out and take a seat right next to you. I really liked how the characters interacted and how there was little predictability to the storyline. The emotions portrayed were believable and thought-provoking. It taught me a bit about African American culture, which I am grateful for. It's one of the books I am glad I picked up and whose contents I know I'll be reminded of from time to time."
      picture={americanMarriage}
      picAlt="An American Marriage book cover"
      methodAlt="Kindle"
      method={
        <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
      }
      length="321 pages"
      type="Eye-opening, emotional, raw."
      reviewColour="#FEE7CC"
      buttonColour="#E4CFBB"
      lengthColour="#7DB5CE"
      methodColour="#0B0F13"
      typeColour="#ED9044"
    />
  )
}

export default AngryPlanet
