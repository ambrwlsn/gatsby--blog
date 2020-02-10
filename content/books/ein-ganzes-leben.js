import React from 'react'
import BookReview from '@components/book-review'
import Book from './img/book'
import ganzesLeben from './img/ein-ganzes-leben.jpg'

const EinGanzesLeben = () => (
  <BookReview
    title="Ein Ganzes Leben by Robert Seethaler"
    review="I bought this book on recommendation from a book store person. I said I wanted to improve my German learning by reading. For someone around the B2 level of German, I have to say this book was definitely a challenge. Very long sentences, complex grammar and a lot of new vocabulary. I read it all out loud to my partner. We both enjoyed the story and we always wanted to know what came next. The story covered the life of a man named Andreas Egger, and the life was a definitely a varied one. Some of the descriptions were quite beautifully written, and some were a little 'too much information' in style. I enjoyed the start and finish the most, where Egger was young and old. These parts were told in more detail, as it's quite hard to fit the 'middle' of his life into so few pages without skimping on detail a bit. I think the book gave a great perspective of a man who didn't have an easy start in life but tried to do his best no matter what."
    picture={ganzesLeben}
    picAlt="Ein ganzes Leben book cover"
    methodAlt="Book"
    method={
      <Book
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    length="192 pages"
    type="Humbling, human, introspective."
    reviewColour="#FDFAF3"
    buttonColour="#d1cdc2"
    lengthColour="#79c0d1"
    methodColour="#fc996f"
    typeColour="#FDFAF3"
  />
)

export default EinGanzesLeben
