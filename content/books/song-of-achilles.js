import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import songOfAchilles from './img/song-of-achilles.jpg'

const SongOfAchilles = () => (
  <BookReview
    title="The Song of Achilles by Madeline Miller"
    review="This book is set in the time of the Greek gods. The two main characters are two boys - Achilles, a half-god, and Patroclus, a mortal prince. The language used in the book is very beautiful. I especially liked the author's descriptions of the characters' various appearances, whims, and moods. I also liked that she wrote in short sentences. This helped me to digest the story easier. The book is written from the perspective of one of the main characters, and this was a great way to get to know him. I really delighted in the bond between the boys and their fierce loyalty to each other. The scenes were painted in such a way that I could feel myself there. I could feel the sand on the beach, smell the flowers in the woods, and the salty air of the sea. One of the things that shocked me was how women in the book were treated but this was the 'age of kings and honour' where women were apparently not regarded in very high esteem. I read the whole book in a week because I was always hungry to know what was going to happen next. I don't want to give too much away, but if you like a good love story, displays of fierce loyalty, and a good deal of pure and youthful optimism, with some historical Greek 'honour, gods, and war' thrown in, this book is for you :)"
    picture={songOfAchilles}
    picAlt="The Song of Achilles book cover"
    methodAlt="Book"
    method={
      <Book
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="352 pages"
    type="Vivid, beautiful, more-ish."
    reviewColour="#F4F5EE"
    buttonColour="#DFE0DB"
    lengthColour="#E793C4"
    methodColour="#4797C5"
    typeColour="#DEF9F9"
  />
)

export default SongOfAchilles
