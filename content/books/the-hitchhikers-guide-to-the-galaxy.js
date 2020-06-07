import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import hitchhikersGuide from './img/the-hitchhikers-guide-to-the-galaxy.jpg'

const HitchhikersGuide = () => (
  <BookReview
    title="The Hitchhikers Guide to the Galaxy by Douglas Adams"
    review="This is the first book in I think five in the series. The series is actually called a trilogy, which should give you the first clue that the author had a lot of fun writing these books and likes to be silly. The story was really easy to read and I liked the characters. Some people have said that it lacks structure and a point, but this could be seen as a strength. It's a book you can sit back and relax with and not take too seriously. There is plenty of jokes and unpredictability to keep you going. I want to get on with reading the next book but I have so much else I want to read. When I am in the mood for the least serious book in the world, I'll go back to the series! I wanted to read the books in the first place because they are total classics and I needed to see what the hype was about. There was an author's note in the beginning of the book and I had lots of fun reading that. Definitely a guy I'd want to meet in person."
    picture={hitchhikersGuide}
    picAlt="The Hitchhikers Guide to the Galaxy book cover"
    methodAlt="Kindle"
    method={
      <Kindle
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="208 pages"
    type="Unpredictable, random, delightful."
    reviewColour="#DEEFFB"
    buttonColour="#b1c2ce"
    lengthColour="#1395c5"
    methodColour="#E43516"
    typeColour="#feffff"
  />
)

export default HitchhikersGuide
