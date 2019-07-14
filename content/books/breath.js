import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import whenBreathBecomesAir from './img/when_breath_becomes_air.jpg'

const Breath = () => (
  <BookReview
    title="When Breath Becomes Air by Paul Kalanithi"
    review="This is one of the most poignant and thoughtful books I've read. Paul documented his journey with a terribly illness that sprang upon him very early in life. We get to hear about his early life, his time working as a young doctor and the strains it put on his relationship. Getting a glimpse into someone else's life - not only the shiny, polished parts - is quite an honour. Paul explained that he'd always loved writing and would write if he was not a doctor. I really like how he was able to enjoy writing even though his illness was slowly taking away the most important part of his life - his work as brain surgeon. I enjoyed Paul's wisdom throughout the book - in particular how he explained that a job isn't something you do for the monetary compensation. It's something you do because it brings you meaning. Otherwise - why would anyone make holes in people's brains? A haunting thing is that Paul never got to finish his book, which shows that nothing in life is certain and you should treat each day as a gift."
    picture={whenBreathBecomesAir}
    picAlt="When Breath Becomes Air book cover"
    methodAlt="Kindle"
    method={<Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />}
    length="229 pages"
    type="Reflective, haunting, real."
    reviewColour="#d4cccf"
    buttonColour="#908b8d"
    lengthColour="#b98f61"
    methodColour="#1f3444"
    typeColour="#b0c8e8"
  />
)

export default Breath
