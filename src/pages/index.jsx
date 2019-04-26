import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

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

function Index() {
  // State for storing mouse coordinates
  const [[x, y], setCoords] = useState([0, 0])
  const [[eyeX, eyeY], setEyeCoords] = useState([0, 0])
  const eyesRef = useRef(null)

  useEffect(() => {
    if (eyesRef.current) {
      const eyePos = eyesRef.current.getBoundingClientRect()

      setEyeCoords([eyePos.left, eyePos.top])
    }
  }, [])

  // Add event listener using our hook
  useEventListener('mousemove', ({ clientX, clientY }) => {
    // Update coordinates
    setCoords([clientX, clientY])
  })

  const clampedEyeX = Math.max(-7.5, Math.min(7.5, x - eyeX))
  const clampedEyeY = Math.max(-7.5, Math.min(7.5, y - eyeY))

  // console.log('new eyes', clampedEyeX, clampedEyeY)
  // console.log('mouse', x, y)
  // console.log('eyes', eyeX, eyeY, eyeA, eyeB)
  // console.log('new eyes R', radianDegreesX, radianDegreesY)

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
