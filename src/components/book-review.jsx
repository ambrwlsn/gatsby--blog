import React from 'react'
import styled from 'styled-components'

const BORDER_RADIUS = '10px'

const Container = styled.div`
  display: grid;
  width: 600px;
  height: 500px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3em;
  grid-template-areas:
    'review review length length'
    'review review . picture'
    'method type type .';
`

const ReviewContainer = styled.div`
  grid-area: review;
  background: #b2da93;
  padding: 1em;
  line-height: 1.5;
  font-size: 1em;

  border-radius: ${BORDER_RADIUS};
  &:hover {
    grid-row-start: 1;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 5;
    z-index: 1;
  }
`

const Review = styled.div``

const Length = styled.div`
  font-size: 5rem;
`

const LengthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  border-radius: ${BORDER_RADIUS};
  grid-area: length;
`

const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const PictureContainer = styled.div`
  background: yellow;
  border-radius: ${BORDER_RADIUS};
  grid-area: picture;
`

const Method = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const MethodContainer = styled.div`
  background: rebeccapurple;
  border-radius: ${BORDER_RADIUS};
  grid-area: method;
`

const TypeContainer = styled.div`
  grid-area: type;
  background: lightblue;
  border-radius: ${BORDER_RADIUS};
`

const Type = styled.div``

const BookReview = props => {
  const { review, length, picture, picAlt, method, methodAlt, type } = props
  return (
    <Container>
      <ReviewContainer>
        <Review>{review}</Review>
      </ReviewContainer>

      <LengthContainer>
        <Length>{length}</Length>
      </LengthContainer>

      <PictureContainer>
        <Picture src={picture} alt={picAlt} />
      </PictureContainer>

      <MethodContainer>
        <Method src={method} alt={methodAlt} />
      </MethodContainer>

      <TypeContainer>
        <Type>{type}</Type>
      </TypeContainer>
    </Container>
  )
}
export default BookReview
