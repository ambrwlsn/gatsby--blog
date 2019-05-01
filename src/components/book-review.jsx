import React, { useState } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

const BORDER_RADIUS = '10px'

const Container = styled.div`
  display: grid;
  width: 800px;
  height: 600px;
  grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
  grid-template-rows: 1fr 1rem 1fr 1rem 1fr;
  // grid-gap: 1rem;
  margin-bottom: 3em;
  grid-template-areas:
    'review review review . length length length'
    'review review review . . . .'
    'review review review . . . picture'
    '. . . . . . picture'
    'method . type type type . picture';
  @media (max-width: 800px) {
    margin: 0 1em 3em 1em;
    grid-template-areas:
      'review review review review review review review'
      '. . . . . . .'
      'method method method . picture picture picture'
      '. . . . . . .'
      'type type type . length length length';
    width: auto;
    height: auto;
  }
`

const ReviewContainer = styled.div`
  position: relative;
  grid-area: review;
  background: #b2da93;
  padding: 1em;
  line-height: 1.5;
  font-size: 1em;
  border-radius: ${BORDER_RADIUS};
  z-index: 1;
`

const Review = styled.div`
  color: black;
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 800px) {
    max-height: 270px;
    font-size: 1.2rem;
  }
`

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
  width: 100%;
  object-fit: contain;
  vertical-align: middle;
  border-radius: ${BORDER_RADIUS};
`

const PictureContainer = styled.div`
  grid-area: picture;
  border-radius: ${BORDER_RADIUS};
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

const Type = styled.div`
  @media (max-width: 800px) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`

const DropdownReview = styled.div`
  position: relative;
  grid-area: review;
  background: #b2da93;
  padding: 1em;
  line-height: 1.5;
  font-size: 1em;
  border-radius: ${BORDER_RADIUS};
  grid-row-start: 1;
  grid-row-end: 8;
  grid-column-start: 1;
  grid-column-end: 8;
  z-index: 1;
`

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`

const BookReview = props => {
  const { review, length, picture, picAlt, method, type } = props

  const [isDropdownOpen, setDropdown] = useState(false)

  const ReviewContainerInitial = ({ setDropdown }) => (
    <Flipped flipId="container">
      <ReviewContainer>
        <Button onClick={setDropdown}>x</Button>
        <Flipped inverseFlipId="container">
          <Review>{review}</Review>
        </Flipped>
      </ReviewContainer>
    </Flipped>
  )

  const ReviewContainerFinal = ({ setDropdown }) => (
    <Flipped flipId="container">
      <DropdownReview>
        <Button onClick={setDropdown}>-</Button>
        <Flipped inverseFlipId="container">
          <Review>{review}</Review>
        </Flipped>
      </DropdownReview>
    </Flipped>
  )

  return (
    <Flipper flipKey={isDropdownOpen}>
      <Container>
        {isDropdownOpen ? (
          <ReviewContainerFinal setDropdown={() => setDropdown(false)} />
        ) : (
          <ReviewContainerInitial setDropdown={() => setDropdown(true)} />
        )}

        <LengthContainer>
          <Length>{length}</Length>
        </LengthContainer>

        <PictureContainer>
          <Picture src={picture} alt={picAlt} />
        </PictureContainer>

        <MethodContainer>{method}</MethodContainer>

        <TypeContainer>
          <Type>{type}</Type>
        </TypeContainer>
      </Container>
    </Flipper>
  )
}
export default BookReview
