import React, { useState, useRef, useEffect } from 'react'
import { watchViewport, unwatchViewport } from 'tornis'

import Kitty from '@components/img/cat'
import throttle from '@utils/throttle'

function CatController({ className }) {
  // State for storing mouse coordinates
  const [[x, y], setCoords] = useState([0, 0])
  const [[eyeX, eyeY], setEyeCoords] = useState([0, 0])
  const eyesRef = useRef(null)

  useEffect(() => {
    const updateValues = throttle(({ mouse }) => {
      if (mouse.changed) {
        setCoords([mouse.x, mouse.y])
      }
    }, 50)
    if (typeof window !== undefined) {
      watchViewport(updateValues)
    }

    return () => {
      if (typeof window !== undefined) {
        unwatchViewport(updateValues)
      }
    }
  }, [])

  useEffect(() => {
    if (eyesRef.current) {
      const eyePos = eyesRef.current.getBoundingClientRect()
      const left = eyePos.left + eyePos.width / 2
      const top = eyePos.top + eyePos.height / 2
      setEyeCoords([left, top])
    }
  }, [])

  let clampedEyeX = 0
  let clampedEyeY = 0

  if (x !== 0 && y !== 0) {
    clampedEyeX = Math.max(-7.5, Math.min(7.5, x - eyeX))
    clampedEyeY = Math.max(-7.5, Math.min(7.5, y - eyeY))
  }

  return (
    <Kitty
      eye="var(--catEyeColor)"
      eyesRef={eyesRef}
      eyePos={[clampedEyeX, clampedEyeY]}
      className={className}
    />
  )
}

export default CatController
