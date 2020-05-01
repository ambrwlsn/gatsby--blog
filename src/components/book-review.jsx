import React, { useState } from 'react'
import styled from 'styled-components'
import { Flipper, Flipped } from 'react-flip-toolkit'

const BORDER_RADIUS = '10px'

const Container = styled.div`
  display: grid;
  margin-bottom: 5em;
  width: 800px;
  height: 600px;
  grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
  grid-template-rows: 1fr 1rem 1fr 1rem 1fr;
  grid-template-areas:
    'review review review . length length length'
    'review review review . . . .'
    'review review review . . . picture'
    '. . . . . . picture'
    'method . type type type . .';

  @media (max-width: 800px) {
    width: 500px;
    height: 600px;
    grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
    grid-template-rows: 1fr 1rem 1fr 1rem 1fr;
    grid-template-areas:
      'review review review review review . length'
      'review review review review review . .'
      'review review review review review . picture'
      '. . . . . . picture'
      'method . type type type . .';
  }

  @media (max-width: 500px) {
    margin: 0 1em 3em 1em;
    width: auto;
    height: auto;
    grid-template-columns: 1fr 1rem 1fr 1rem 1fr 1rem 1fr;
    grid-template-rows: 1fr 1rem 0.5fr 1rem 0.5fr;
    grid-template-areas:
      'review review review review review review review'
      '. . . . . . .'
      'method method method . picture picture picture'
      '. . . . . . .'
      'type type type . length length length';
  }
`

const NoJsReviewContainer = styled.div`
  grid-area: review;
  background: ${p => p.noJSReviewBackground};
  padding: 1em;
  line-height: 1.5;
  font-size: 0.9rem;
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  &:hover {
    grid-row-start: 1;
    grid-row-end: 8;
    grid-column-start: 1;
    grid-column-end: 8;
    z-index: 1;
  }
`

const ReviewContainer = styled.div`
  position: relative;
  grid-area: review;
  background: ${p => p.reviewBackground};
  padding: 1.2rem 1.2rem 2.6rem 1.2rem;
  line-height: 1.7;
  font-size: 0.9rem;
  border-radius: ${BORDER_RADIUS};
  z-index: 1;
  overflow: hidden;
`

const ReviewDesktop = styled.div`
  color: var(--readText);
  overflow: hidden;
  max-height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`

const ReviewMobile = styled.div`
  display: none;
  @media (max-width: 500px) {
    max-height: 270px;
    font-size: 1.2rem;
    color: var(--readText);
    overflow: hidden;
    display: block;
  }
`

const Length = styled.div`
  font-size: 2.8rem;
  color: var(--readText);
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.7rem;
  }
`

const LengthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.lengthBackground};
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
  background: ${p => p.methodBackground};
  grid-area: method;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TypeContainer = styled.div`
  grid-area: type;
  background: ${p => p.typeBackground};
  border-radius: ${BORDER_RADIUS};
  word-break: break-word;
  color: var(--readText);
`

const Type = styled.div`
  padding: 1.2rem;
  font-size: 0.9rem;

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`

const DropdownReviewContainer = styled.div`
  position: relative;
  grid-area: review;
  background: ${p => p.reviewBackground};
  padding: 2rem 5rem;
  line-height: 1.7;
  font-size: 0.9rem;
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

const DropdownReviewDesktop = styled.div`
  color: black;
  overflow: hidden;
  max-height: 100%;
  margin: 50px auto;
  @media (max-width: 500px) {
    display: none;
  }
`

const DropdownReviewMobile = styled.div`
  display: none;
  @media (max-width: 500px) {
    max-height: 100%;
    color: black;
    overflow: hidden;
    font-size: 1.2rem;
    margin: 0;
    padding: 1rem 1rem 2.6rem 1rem;
    display: block;
  }
`

const Button = styled.button`
  position: absolute;
  font: inherit;
  cursor: pointer;
  margin: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  color: #000000;
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  font-size: 1.1rem;
  border: none;
  background: ${p => p.buttonBackground};
  border-top: 3px solid black;
  padding: 0.4rem;
`

const ReadCta = styled.span`
  font-size: 0.9rem;
  display: inline-block;
`

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  font-family: 'Courgette', sans-serif;
  max-width: 400px;
  margin: 1rem auto;
  @media (max-width: 500px) {
    padding: 0 0.8rem;
  }
`
const BookReview = props => {
  const {
    title,
    review,
    reviewColour,
    length,
    lengthColour,
    picture,
    picAlt,
    method,
    methodColour,
    type,
    typeColour,
    buttonColour,
  } = props

  const [isDropdownOpen, setDropdown] = useState(false)
  const [hasJavaScript, setJSAvailability] = React.useState(false)
  React.useEffect(() => setJSAvailability(true), [])

  const ReviewContainerInitial = ({ setDropdown }) => (
    <Flipped flipId="container">
      <ReviewContainer reviewBackground={reviewColour}>
        <Button onClick={setDropdown} buttonBackground={buttonColour}>
          <Flipped inverseFlipId="container">
            <ReadCta>Read More…</ReadCta>
          </Flipped>
        </Button>
        <Flipped inverseFlipId="container">
          <ReviewDesktop>{getReviewExcerpt(review, 480)}</ReviewDesktop>
        </Flipped>
        <Flipped inverseFlipId="container">
          <ReviewMobile>{getReviewExcerpt(review, 150)}</ReviewMobile>
        </Flipped>
      </ReviewContainer>
    </Flipped>
  )

  const ReviewContainerFinal = ({ setDropdown }) => (
    <Flipped flipId="container">
      <DropdownReviewContainer reviewBackground={reviewColour}>
        <Button onClick={setDropdown} buttonBackground={buttonColour}>
          <ReadCta>Read Less…</ReadCta>
        </Button>
        <Flipped inverseFlipId="container">
          <DropdownReviewDesktop>
            {getFullReview(review, 480)}
          </DropdownReviewDesktop>
        </Flipped>
        <Flipped inverseFlipId="container">
          <DropdownReviewMobile>
            {getFullReview(review, 150)}
          </DropdownReviewMobile>
        </Flipped>
      </DropdownReviewContainer>
    </Flipped>
  )

  const getReviewExcerpt = (review, length) => {
    const trimmedReview =
      review.length > length ? review.substring(0, length) : review
    const newLength =
      review.length > length ? trimmedReview.lastIndexOf(' ') : review
    const reviewExcerpt =
      review.length > length ? review.substring(0, newLength) : review
    return review.length > length ? review && reviewExcerpt + '…' : review
  }

  const getFullReview = (review, length) => {
    const trimmedReview =
      review.length > length ? review.substring(0, length) : review
    const newLength =
      review.length > length ? trimmedReview.lastIndexOf(' ') : review
    return review.length > length
      ? review && review.slice(0, newLength) + '…' + review.slice(newLength)
      : review
  }

  return (
    <Flipper flipKey={isDropdownOpen}>
      <Title>{title}</Title>
      <Container>
        {isDropdownOpen && hasJavaScript && (
          <Flipped inverseFlipId="container">
            <ReviewContainerFinal setDropdown={() => setDropdown(false)} />
          </Flipped>
        )}
        {!isDropdownOpen && hasJavaScript && (
          <Flipped inverseFlipId="container">
            <ReviewContainerInitial setDropdown={() => setDropdown(true)} />
          </Flipped>
        )}
        {!hasJavaScript && (
          <NoJsReviewContainer noJSReviewBackground={reviewColour}>
            {review}
          </NoJsReviewContainer>
        )}

        <LengthContainer lengthBackground={lengthColour}>
          <Length>{length}</Length>
        </LengthContainer>

        <PictureContainer>
          <Picture src={picture} alt={picAlt} />
        </PictureContainer>

        <MethodContainer methodBackground={methodColour}>
          {method}
        </MethodContainer>

        <TypeContainer typeBackground={typeColour}>
          <Type>{type}</Type>
        </TypeContainer>
      </Container>
    </Flipper>
  )
}
export default BookReview
