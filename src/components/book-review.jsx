import React from 'react'
import styled from 'styled-components'

const BORDER_RADIUS = '10px'

const ReviewContainer = styled.div`
  display: grid;
  width: 600px;
  height: 500px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3em;
`

const Review = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  background: #b2da93;
  padding: 1em;
  line-height: 1.5;
  font-size: 1em;
  border-radius: ${BORDER_RADIUS};
  &:hover {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 5;
    z-index: 1;
  }
`

const Length = styled.div`
  font-size: 5rem;
`

const LengthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 5;
  background: pink;
  border-radius: ${BORDER_RADIUS};
`

const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const PictureContainer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 4;
  grid-column-end: 5;
  background: yellow;
  border-radius: ${BORDER_RADIUS};
`

const Method = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const MethodContainer = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  background: rebeccapurple;
  border-radius: ${BORDER_RADIUS};
`

const Type = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 4;
  background: lightblue;
  border-radius: ${BORDER_RADIUS};
`

const BookReview = props => {
  const { review, length, picture, picAlt, method, methodAlt, type } = props
  return (
    <ReviewContainer>
      <Review>{review}</Review>

      <LengthContainer>
        <Length>{length}</Length>
      </LengthContainer>

      <PictureContainer>
        <Picture src={picture} alt={picAlt} />
      </PictureContainer>

      <MethodContainer>
        <Method src={method} alt={methodAlt} />
      </MethodContainer>

      <Type>{type}</Type>
    </ReviewContainer>
  )
}
export default BookReview
