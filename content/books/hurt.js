import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import theHurt from './img/this_is_going_to_hurt.jpg'

const Hurt = () => (
  <BookReview
    title="This Is Going to Hurt: Secret Diaries of a Junior Doctor by Adam Kay"
    review="I got into this book right away and could hardly put it down. Adam Kay's sense of humour made me feel nostalgic for the UK, which felt great by itself. But, the most amazing thing about this book is that it gives a valuable insight into what it's like to be a doctor. Even if some of it seems a little scripted, the majority served to grow my empathy and thankfulness towards doctors, especially those who work where life and death is involved. It reminded me of my time working in a resthome for the elderly. Adam describes to us humanity at its most vulnerable, scared, angry and exhausted. This is something you can't grasp from newspapers or quotes from politicians. The book ends with a call to do something to make people aware of the plight of employees within the NHS. How we should treasure everyone who works there for being there to help us when we need it the most. Adam's dry sense of humour and realness spill forth from every page of his book and I am so, so glad I read it. I miss it already!"
    picture={theHurt}
    picAlt="This Is Going to Hurt book cover"
    methodAlt="Kindle"
    method={
      <Kindle
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="285 pages"
    type="Funny, shocking, revealing."
    reviewColour="#CED6E1"
    buttonColour="#ADBAC3"
    lengthColour="#F6FB5B"
    methodColour="#32B2DF"
    typeColour="#B894A1"
  />
)

export default Hurt
