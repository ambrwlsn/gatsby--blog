import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import right from './img/how-to-be-right.jpg'

const HowToBeRight = () => (
  <BookReview
    title="How to Be Right... in a World Gone Wrong by James O'Brien"
    review="This was recommended to me by a fellow Brit over lunch. In the wake of a recent Brexit I was intrigued to hear from a British radio host who is different from most others. That's how he describes himself anyway, and I agree. He is clearly a really intelligent guy judging by the depth of his arguments. I actually had to look up a few of the words he used as well. Something great about his attitude (to me) is that he actively tries his best to remain neutral and not put the blame on individuals who have likely been misled by modern-day news-reporting techniques. He acknowledges that at our core we are all alike - we experience fear, despair, worry and also hope. We are an emotional species and those working for newspapers these days not only know this, but constantly try to exploit it for their own benefit. The book is divided into several concise and very interesting chapters. I'd recommend anyone to read it, not least of all to gain a valuable perspective."
    picture={right}
    picAlt="How to be right book cover"
    methodAlt="Kindle"
    method={<Kindle width={110} height={110} fill="#e0dcdc" stroke="#e0dcdc" />}
    length="235 pages"
    type="Intelligent, unique perspective, thoughtful."
    reviewColour="#F9F8F3"
    buttonColour="#dedac5"
    lengthColour="#ffc278"
    methodColour="#C63B20"
    typeColour="#F9F8F3"
  />
)

export default HowToBeRight
