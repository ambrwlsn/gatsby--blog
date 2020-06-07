import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import blutigerPfad from './img/der-blutige-pfad.jpg'

const DerBlutigePfad = () => (
  <BookReview
    title="Der Blutige Pfad by Nina Wagner, Claudia Peter & Madeleine Walther"
    review="This is the second German book I've read this year and I really enjoyed it. The title's translation is 'The Bloody Path', which is the title of the first story. The book is split into three different stories and all are 'Krimis', which are popular in Germany. Krimis are crime stories and each of the ones in this book are really different from each other and I liked that. It was also great that none of them were really predictable. As it's a German learners book, there are vocabulary tips and information boxes throughout. I don't have too much of an idea what level of German I'm at but I could understand the majority of the text and it's meant for B2 students. I learned some regional German slang and lots of new verbs. Am now looking out for a similar book to continue strengthening my German :)"
    picture={blutigerPfad}
    picAlt="The Hitchhikers Guide to the Galaxy book cover"
    methodAlt="Kindle"
    method={
      <Book
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="126 pages"
    type="Charming, simple, varied."
    reviewColour="#F6F8F5"
    buttonColour="#d0d0d0"
    lengthColour="#6BAED8"
    methodColour="#E43516"
    typeColour="#FFDA52"
  />
)

export default DerBlutigePfad
