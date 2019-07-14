import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import theDollsAlphabet from './img/the_dolls_alphabet.jpg'

const DollsAlphabet = () => (
  <BookReview
    title="The Dolls Alphabet by Camilla Grudova"
    review="I knew that book is a little something different before I'd even read the first page. I like that. I think it's good to read unusual things sometimes. The book is an entirely fictional (I hope) collection of short stories that I believe are designed to make you think. Although, to be honest, they could be written for no reason other than the author liked them. There are similarities between the stories, mainly in the use of props and descriptions of people. Not all of the stories were enjoyable for me, but they were worth getting through so that I could reach the ones that were. I particularly enjoyed two or three of them very much. The author writes about dystopian worlds with different social rules, and I find that very interesting. I think we get used to the cultural rules of our society and they end up as background noise. Hearing about a different set of rules is unnerving but can be refreshing. The stories dealing with these rules are ones that I still think of from time to time. It's nice that the contents of a book stay with me like that."
    picture={theDollsAlphabet}
    picAlt="The Dolls Alphabet book cover"
    methodAlt="Kindle"
    method={<Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />}
    length="160 pages"
    type="Mesmerising, skewed, absurd."
    reviewColour="#a6baf1"
    buttonColour="#7c8ebc"
    lengthColour="#7c8ebc"
    methodColour="#0033a0"
    typeColour="#7c8ebc"
  />
)

export default DollsAlphabet
