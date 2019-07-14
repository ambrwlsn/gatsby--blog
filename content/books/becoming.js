import React from 'react'
import BookReview from '@components/book-review'
import Headphones from './img/headphones'
import becoming from './img/becoming.jpg'

const Becoming = () => (
  <BookReview
    title="Becoming by Michelle Obama"
    review="Before beginning this book I was looking forward to hearing about Michelle's wisdom and experiences and I wasn't disappointed. I liked hearing how she grew up and about the people she grew up with. I find that quite often, people will speak of those they admire but not go into details. Michelle gave enough details about key people in her life that I almost felt I could feel them sitting next to me in the same room. 
        I was impressed to hear about her incredibly hard work ethic. I was also intrigued at how her parents raised her - to not be afraid of hard work, to be kind to others, and to be open to people and possibilities. I like how hers and Barack Obama's personalities seem to compliment as much as clash with each other. While I may not be a parent, I share her concerns over her children's protection while living at the white house, and admire the strength she displayed in the face of so much bad and unfair press coverage."
    picture={becoming}
    picAlt="Michelle Obama on her book cover"
    methodAlt="headphones"
    length="1143 minutes"
    method={
      <Headphones
        width={110}
        height={110}
        fill="var(--readText)"
        stroke="var(--readText)"
      />
    }
    type="Autobiography, strong, real."
    reviewColour="#d6dcd8"
    buttonColour="#a7a7a7"
    lengthColour="#d4b7a7"
    methodColour="#f5f3e9"
    typeColour="#b4ccce"
  />
)

export default Becoming
