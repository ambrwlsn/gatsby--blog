import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import abolish from './img/abolish_silicon_valley.jpg'

const AngryPlanet = () => {
  return (
    <BookReview
      title="Abolish Silicon Valley by Wendy Liu"
      review="This book seems to be divided into two parts and the second half is totally worth waiting for. One thing I like the most about it is you can tell the author is very well-read on and has plenty of first-hand experience with the failings of our current tech industry. Whether those failings are obvious to people, or not very obvious at all. The last part of the book is a densely-packed treasure trove of suggestions on how we can in fact use tech for the good of everyone (i.e. the working class) and not just shareholders and billionare founders. It made me wonder more than ever whether the 'old' ways of doing things that have got us to where we are today are actually outdated, and doing more harm in the present than good. The strikingly obvious lack of regard for certain human beings we have seen in the past years, and the voracious global protests that have recently taken place provide stark evidence that this is so. The author recognises and describes her own biases towards certain things and people and explains how hard it has been for her personally to think in a fairer way, even if she is a long way from (or may never) overcoming them. So I believe as she does that people need to allow themselves to feel uncomfortable in order to allow fairness to everyone. Because every single person deserves to lead a good life free of hardship and judgement."
      picture={abolish}
      picAlt="Abolish Silicon Valley book cover"
      methodAlt="Kindle"
      method={
        <Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />
      }
      length="244 pages"
      type="Sobering, scary, motivating."
      reviewColour="#FFE8CE"
      buttonColour="#D2AE9A"
      lengthColour="#DAF3FF"
      methodColour="#2F3C73"
      typeColour="#E48C66"
    />
  )
}

export default AngryPlanet
