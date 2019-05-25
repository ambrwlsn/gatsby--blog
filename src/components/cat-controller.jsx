import React, { useState, useRef, useEffect } from 'react'
import useEventListener from '@hooks/use-event-listener'

import Kitty from '@components/img/cat'
import throttle from '@utils/throttle'

function CatController({ className }) {
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
  useEventListener(
    'mousemove',
    throttle(({ clientX, clientY }) => {
      // Update coordinates
      setCoords([clientX, clientY])
    }, 50)
  )

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
