import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import useEventListener from '@hooks/use-event-listener'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Kitty from '@components/img/cat'

const Cat = styled(Kitty)`
  stroke: black;
  fill: #565252;
  position: absolute;
  bottom: 5em;
  right: 3em;
`
const Block = styled.div`
  width: 100vw;
  background-color: var(--backgroundColor);
  height: 90px;
  border-top: 15px solid var(--linkColor);
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
`

// const handleChange = () => {
// const eyes = document.getElementById('eyes')

// // kitty.addEventListener('mousemove', e => {
// let eyes = document.getElementById('eyes')
// let mouseX = eyes.getBoundingClientRect().left
// let mouseY = eyes.getBoundingClientRect().top
// let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY)
// let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
// eyes.style.transform = `rotate(${rotationDegrees}deg)`
// })
// }

function Index() {
  // State for storing mouse coordinates
  const [[x, y], setCoords] = useState([0, 0])
  const [[eyeX, eyeY], setEyeCoords] = useState([0, 0])
  const eyesRef = useRef(null)

  useEffect(() => {
    if (eyesRef.current) {
      const eyePos = eyesRef.current.getBoundingClientRect()
      console.log(eyePos.left, eyePos.top)
      setEyeCoords([eyePos.left, eyePos.top])
    }
  }, [])

  // Add event listener using our hook
  useEventListener('mousemove', ({ clientX, clientY }) => {
    // Update coordinates
    setCoords([clientX, clientY])
  })

  const clampedEyeX = Math.max(-10, Math.min(10, x - eyeX))
  const clampedEyeY = Math.max(-10, Math.min(10, y - eyeY))

  return (
    <Fragment>
      <Layout>
        <SEO
          title="Homepage"
          keywords={[
            'blog',
            'gatsby',
            'javascript',
            'developer',
            'junior developer',
          ]}
        />
        {/* <HomePage>
      <HomepageLink to="/blog/">Blog</HomepageLink>
      <HomepageLink to="/learn/">Learn</HomepageLink>
      <HomepageLink to="/read/">Read</HomepageLink>
    </HomePage> */}
        {/* <Image src={Twitter} alt="twitter" />
    <Image src={Github} alt="github" />
    <Image src={Linkedin} alt="linkedin" /> */}
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      </Layout>
      <Cat
        eye="var(--catEyeColor)"
        eyesRef={eyesRef}
        eyePos={[clampedEyeX, clampedEyeY]}
      />
      <Block />
    </Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
