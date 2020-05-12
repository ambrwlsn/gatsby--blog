import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import abolish from './img/abolish_silicon_valley.jpg'

const AngryPlanet = () => {
  return (
    <BookReview
      title="Abolish Silicon Valley by Wendy Liu"
      review="50% through"
      picture={abolish}
      picAlt="Abolish Silicon Valley book cover"
      methodAlt="Kindle"
      method={
        <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
      }
      length="244 pages"
      type="Sobering."
      reviewColour="#FFE8CE"
      buttonColour="#D2AE9A"
      lengthColour="#DAF3FF"
      methodColour="#2F3C73"
      typeColour="#E48C66"
    />
  )
}

export default AngryPlanet
