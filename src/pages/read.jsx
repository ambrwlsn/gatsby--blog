import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/layout'
import SEO from '@components/seo'

import Becoming from '@content/books/becoming'
import UpAndGoing from '@content/books/up-and-going'
import Thoughts from '@content/books/thoughts'
import OurHouse from '@content/books/our-house'
import Breath from '@content/books/breath'
import DollsAlphabet from '@content/books/dolls-alphabet'
import Bear from '@content/books/bear'
import Hurt from '@content/books/hurt'
import AngryPlanet from '@content/books/angry-planet'
import TechnicallyWrong from '@content/books/technically-wrong'
import HowToBeRight from '@content/books/how-to-be-right'
import TheCatSanctuary from '@content/books/the-cat-sanctuary'
import EinGanzesLeben from '@content/books/ein-ganzes-leben'
import AnAmericanMarriage from '@content/books/an-american-marriage'
import HitchhikersGuide from '@content/books/the-hitchhikers-guide-to-the-galaxy'
import DerBlutigePfad from '@content/books/der-blutige-pfad'
import SongOfAchilles from '@content/books/song-of-achilles'
import AbolishSiliconValley from '@content/books/abolish-silicon-valley'

const ReviewSection = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  font-family: 'Courgette', sans-serif;
`

const Intro = styled.div`
  margin: 0 auto;
  line-height: 1.7;
  margin-bottom: 2rem;
  width: 55%;
  @media (max-width: 800px) {
    margin-bottom: 1rem;
    width: 90%;
  }
`

const IntroStyles = styled.span`
  font-size: 1rem;
`

const Reading = () => {
  return (
    <Layout>
      <SEO title="All posts" keywords={['gatsby', 'javascript', 'react']} />
      <Title>Book Reviews</Title>
      <IntroStyles>
        <Intro>
          <p>
            On this page are the books I've read or listened to in the last two
            years. Skip to a year using the dropdown menu! Each block contains a
            review, a picture, the book's length, format I read/heard it in
            (audiobook, kindle, physical book), and summary of characteristics.
          </p>
          <p>
            This images on this page total 500kb but to stop them being
            downloaded all at once I added native lazy loading so they will only
            load as you scroll! So, there is only ~150kb of images on page load
            vs 500kb (
            <a href="https://caniuse.com/#feat=loading-lazy-attr">
              check browser support here{' '}
            </a>
            ).
          </p>
        </Intro>
        <details className="learnDetails">
          <summary className="learnSummary">Select</summary>
          <ul className="dropdown_menu">
            <li>
              <a href="#2020">2020</a>
            </li>
            <li>
              <a href="#2019">2019</a>
            </li>
            <li>
              <Link to="/blog/books">2018</Link>
            </li>
          </ul>
        </details>
      </IntroStyles>
      <ReviewSection>
        <h2 id="2020">2020</h2>
        <AbolishSiliconValley />
        <SongOfAchilles />
        <DerBlutigePfad />
        <HitchhikersGuide />
        <AnAmericanMarriage />
        <TheCatSanctuary />
        <HowToBeRight />
        <EinGanzesLeben />
        <h2 id="2019">2019</h2>
        <TechnicallyWrong />
        <AngryPlanet />
        <Hurt />
        <Bear />
        <DollsAlphabet />
        <Breath />
        <OurHouse />
        <Thoughts />
        <UpAndGoing />
        <Becoming />
      </ReviewSection>
    </Layout>
  )
}

export default Reading

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
