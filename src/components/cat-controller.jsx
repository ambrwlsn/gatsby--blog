import React, { useState, useRef, useEffect } from 'react'
import { watchViewport, unwatchViewport } from 'tornis'

import Kitty from '@components/img/cat'

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var context, args, result
  var timeout = null
  var previous = 0
  if (!options) options = {}
  var later = function() {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function() {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}

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
    }, 350)
    watchViewport(updateValues)

    return () => {
      unwatchViewport(updateValues)
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

  console.log('rendering!')

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
