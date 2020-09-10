import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import entangledLife from './img/entangled-life.jpg'

const EntangledLife = () => {
  return (
    <BookReview
      title="Entangled Life by Merlin Sheldrake"
      review="50% through"
      picture={entangledLife}
      picAlt="Entangled Life book cover"
      methodAlt="Kindle"
      method={
        <Kindle width={110} height={110} fill="#e0dcdc" stroke="#e0dcdc" />
      }
      length="368 pages"
      type=""
      reviewColour="#BDC1DC"
      buttonColour="#9295AC"
      lengthColour="#C6CD74"
      methodColour="#D01801"
      typeColour="#6891FA"
    />
  )
}

export default EntangledLife
