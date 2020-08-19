import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import tooMuchAndNeverEnough from './img/too-much-and-never-enough.jpg'

const TooMuchAndNeverEnough = () => {
  return (
    <BookReview
      title="Too Much and Never Enough by Mary Trump"
      review="As soon as I heard this book was coming out, I wanted to read it. I am someone who has lived among emotional abuse and I know the huge power it can hold over anyone unlucky enough to be involved in it. To me the behaviour displayed by Trump is odd enough to make me curious about his upbringing. This book is told from the perspective of his niece Mary, the daughter of his older brother. Mary delves deep into the dynamic of the Trump family and describes how its members treated each other. The horrible effects of highly conditional love seems to have driven the Trump children to self-destruction, meekness, warped self-esteem, massive disregard for others, bullying, and more things besides. I definitely think this book gave me a much clearer understanding of why Trump behaves as he does, and makes me think he will never change. If his self-esteem is wrapped up in bigging himself up and calling everyone else a loser at every opportunity, this is what he's gonna keep doing. It's too uncomfortable for him to learn to take criticism, not lie about everything, be fair, or not throw regular child-like tantrums. I'm glad Mary decided to write this book and I hope people from both sides read it and gain an important insight."
      picture={tooMuchAndNeverEnough}
      picAlt="Too Much and Never Enough book cover"
      methodAlt="Kindle"
      method={
        <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
      }
      length="240 pages"
      type="Sad, frustrating, clarifying."
      reviewColour="#D1D1D1"
      buttonColour="#7F7F7F"
      lengthColour="#C2C2C6"
      methodColour="#292929"
      typeColour="#D87682"
    />
  )
}

export default TooMuchAndNeverEnough
