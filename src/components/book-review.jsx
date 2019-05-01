import React, { useState } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

const BORDER_RADIUS = '10px'
const REVIEW_COLOUR = '#b2da93'

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
    grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
    grid-template-rows: 1fr 1rem 0.5fr 1rem 0.5fr;
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
  background: ${REVIEW_COLOUR};
  padding: 1.2rem 1.2rem 2.6rem 1.2rem;
  line-height: 1.7;
  font-size: 1.05rem;
  border-radius: ${BORDER_RADIUS};
  z-index: 1;
  overflow: hidden;
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
  border-radius: ${BORDER_RADIUS};
  grid-area: method;
  height: 100%;
`

const TypeContainer = styled.div`
  grid-area: type;
  background: lightblue;
  border-radius: ${BORDER_RADIUS};
  word-break: break-word;
`

const Type = styled.div`
  padding: 1.2rem;
  font-size: 1.05rem;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`

const DropdownReviewContainer = styled.div`
  position: relative;
  grid-area: review;
  background: ${REVIEW_COLOUR};
  padding: 2rem 5rem;
  line-height: 1.7;
  font-size: 1.05rem;
  border-radius: ${BORDER_RADIUS};
  grid-row-start: 1;
  grid-row-end: 8;
  grid-column-start: 1;
  grid-column-end: 8;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`

const DropdownReview = styled.div`
  color: black;
  overflow: hidden;
  max-height: 100%;
  margin: 50px auto;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    margin: 0;
    padding: 1rem 1rem 2.6rem 1rem;
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  background: ${REVIEW_COLOUR};
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  font-size: 1.1rem;
  border: none;
  background: #6e984e;
  border-top: 3px solid black;
  padding: 0.4rem;
`

const BookReview = props => {
  const { review, length, picture, picAlt, method, type } = props

  const [isDropdownOpen, setDropdown] = useState(false)

  const ReviewContainerInitial = ({ setDropdown }) => (
    <Flipped flipId="container">
      <ReviewContainer>
        <Button onClick={setDropdown}>Read More</Button>
        <Flipped inverseFlipId="container">
          <Review>{review}</Review>
        </Flipped>
      </ReviewContainer>
    </Flipped>
  )

  const ReviewContainerFinal = ({ setDropdown }) => (
    <Flipped flipId="container">
      <DropdownReviewContainer>
        <Button onClick={setDropdown}>Read Less</Button>
        <Flipped inverseFlipId="container">
          <DropdownReview>{review}</DropdownReview>
        </Flipped>
      </DropdownReviewContainer>
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
