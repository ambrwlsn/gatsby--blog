import React from 'react'

function Splodge(props) {
  const style = {
    filter: `url(#displacementFilter)`,
  }
  const { fill, className } = props
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.06"
          numOctaves="2"
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale="50"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      <circle cx="100" cy="100" r="100" style={style} fill={fill} />
    </svg>
  )
}

export default Splodge
