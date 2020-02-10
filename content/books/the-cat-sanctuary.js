import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import catSanctuary from './img/the-cat-sanctuary.jpg'

const TheCatSanctuary = () => (
  <BookReview
    title="The Cat Sanctuary by Patrick Gale"
    review="This is a book that I read, or rather skim-read many years ago. I have it in paperback somewhere but was reminded of it and bought it again on Kindle for a trip. The setting of the book is mostly rural Cornwall, which I like very much. The setting alone sets half the atmosphere for the book, and the interactions and relationships of the characters does the rest. I feel like some people may find the book a bit tedious because of the amount of conversation in there, but I liked how even the smallest interactions were carefully described. The revelations in the book also came as a surprise to me, and were not predictable in my opinion. This book gave me food for thought and also transported me to a beautiful place. Thumbs up!"
    picture={catSanctuary}
    picAlt="The cat sanctuary book cover"
    methodAlt="Kindle"
    method={
      <Kindle
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="304 pages"
    type="Emotional, blunt, triggering."
    reviewColour="#D7DCE0"
    buttonColour="#a7acb0"
    lengthColour="#AEBCAB"
    methodColour="#B695AA"
    typeColour="#D3D5D8"
  />
)

export default TheCatSanctuary
