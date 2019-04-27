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
  border-top: 12px solid var(--blockBorder);
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
      const left = eyePos.left + eyePos.width / 2
      const top = eyePos.top + eyePos.height / 2
      setEyeCoords([left, top])
    }
  }, [])

  // Add event listener using our hook
  useEventListener('mousemove', ({ clientX, clientY }) => {
    // Update coordinates
    setCoords([clientX, clientY])
  })

  let clampedEyeX = 0
  let clampedEyeY = 0

  if (x !== 0 && y !== 0) {
    clampedEyeX = Math.max(-7.5, Math.min(7.5, x - eyeX))
    clampedEyeY = Math.max(-7.5, Math.min(7.5, y - eyeY))
  }

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
