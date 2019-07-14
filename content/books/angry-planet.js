import React from 'react'
import BookReview from '@components/book-review'
import Kindle from './img/kindle'
import angryPlanet from './img/angry-planet.jpg'

const AngryPlanet = () => (
  <BookReview
    title="The Long Way to a Small, Angry Planet by Becky Chambers"
    review="Oh I loved this one - the characters, the dialogue, and the imagery. I found myself feeling multiple emotions throughout - from anger to sadness to fear. I don't even generally like science fiction books but this one is so down-to-earth (not literally), and so full of feeling and beautiful ideas that I never wanted to put it down. This book made me examine myself, and humanity. It put into perspective that while humans can be great, they can also be flawed. You should read it to properly understand what I mean ;) Also, the different alien characters in this book are simply delightful. We get to hear about their histories, their peculiarities, their cultures. They are all so endearing and the author makes them seem so plausible and real! I found this really incredible. Another thing I love is that there are gay and non-binary characters - I think it's important for mainstream books to have more of these. The feelings and beautiful perspectives I got from this book will stay with me for a long time - I feel lucky to have found this one (through a friend's recommendation) :)"
    picture={angryPlanet}
    picAlt="The Long Way to a Small, Angry Planet book cover"
    methodAlt="Kindle"
    method={<Kindle width={110} height={110} fill="#d6dae4" stroke="#d6dae4" />}
    length="432 pages"
    type="Enlightening, funny, surprising."
    reviewColour="#E8D4BC"
    buttonColour="#C7AD8E"
    lengthColour="#4E76AF"
    methodColour="#2C2D28"
    typeColour="#B7BDD0"
  />
)

export default AngryPlanet
