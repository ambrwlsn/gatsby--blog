import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import myThoughtsExactly from './img/my_thoughts_exactly.jpg'

const Thoughts = () => (
  <BookReview
    title="My Thoughts Exactly by Lily Allen"
    review="I heard of this book after seeing it quoted on an Instagram story. The quote was about Lily losing her baby, which was a difficult thing I felt she wrote about with grace and poignancy. After beginning the book, I found it to be a whirlwind - an honest, vivid and intense account of Lily's life from early beginnings to the present. Before this book I'd known that being famous was often a difficult thing to be. This book confirmed that and does a good job of explaining why. It made me feel grateful for my relatively high level of anonymity and for the people I can trust in my life. I admit that some experiences Lily described got to me quite a lot and triggered some unpleasant feelings, but I'm sure this wouldn't happen for everyone. I'm really glad I picked the book up (well, downloaded it). In the end, it was very interesting to hear about things how Lily experienced them and not from the page of a tabloid paper."
    picture={myThoughtsExactly}
    picAlt="Lily Allen on her book cover"
    methodAlt="Kindle"
    method={
      <Kindle
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="344 pages"
    type="Real, intense, triggering."
    reviewColour="#e9e58a"
    buttonColour="#a9a664"
    lengthColour="#f8e1e7"
    methodColour="#e4b7a8"
    typeColour="#eee4dc"
  />
)

export default Thoughts
