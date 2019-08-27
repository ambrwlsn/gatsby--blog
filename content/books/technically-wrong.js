import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import technicallyWrong from './img/technically_wrong.jpg'

const TechnicallyWrong = () => (
  <BookReview
    title="Technically Wrong: Sexist Apps, Biased Algorithms, and Other Threats of Toxic Tech by Sara Wachter-Boettcher"
    review="The best way I can describe this book is equal amounts of saddening and maddening. It details in plain English the inherent problems within some of the world's largest tech corporations. Largest and most powerful, and able to affect our lives in ways we might not have considered. The bias and ignorant attitudes resting within the founders and staff within such companies massively swings their products towards dangerous territory. Some of this includes things like harrassment, lying, blackmailing, abuse, cover-ups, bribing. Think your social media profile is harmless? It isn't. The book should be required reading for everyone on the planet because very little good can come out of corporations that are interested in only themselves and money, and will trample over vulnerable and innocent people to get more power. Reading this has opened my eyes and I believe it's going to forever influence the way I work on digital products."
    picture={technicallyWrong}
    picAlt="Technically Wrong book cover"
    methodAlt="Kindle"
    method={<Kindle width={110} height={110} fill="#e0dcdc" stroke="#e0dcdc" />}
    length="232 pages"
    type="Saddening, maddening, scary."
    reviewColour="#f2f0e6"
    buttonColour="#dbd8c8"
    lengthColour="#149ab8"
    methodColour="#d72b2c"
    typeColour="#f2f0e6"
  />
)

export default TechnicallyWrong
