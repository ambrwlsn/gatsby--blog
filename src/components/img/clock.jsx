import React from 'react'

function Clock(props) {
  const { className, color, width, height } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30.344 30.344"
      className={className}
    >
      <g id="Clock" transform="translate(-11 -11)">
        <g
          id="Ellipse_7"
          data-name="Ellipse 7"
          transform="translate(11 11)"
          fill={'var(--backgroundColor)'}
          stroke={color}
          strokeWidth="3"
        >
          <circle cx="15.172" cy="15.172" r="15.172" stroke="none" />
          <circle cx="15.172" cy="15.172" r="13.672" fill="none" />
        </g>
        <line
          id="Line_16"
          data-name="Line 16"
          x2="4.851"
          y2="3.265"
          transform="translate(25.599 28.007)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          id="Line_17"
          data-name="Line 17"
          y1="9.941"
          x2="0.098"
          transform="translate(25.556 18.128)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export default Clock
