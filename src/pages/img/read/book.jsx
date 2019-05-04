import React from 'react'

const Book = props => {
  const { width, height, stroke, fill } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 365.927 527.425"
      fill={fill}
    >
      <g transform="translate(-480.797 -192.57)">
        <path
          d="M824.8-243.21V-685.75s16.913,23.01,27.25,32.055S885.5-638.9,885.5-638.9l260.7,1.928-1.817,418.461H867.492s-18.643-1.777-29.316-7.952A29.785,29.785,0,0,1,824.8-243.21Z"
          transform="translate(-338 884.32)"
          stroke={stroke}
          strokeLinejoin="round"
          strokeWidth="12"
        />
        <path
          d="M847.91-666.656v418.238"
          transform="translate(-300.828 914.039)"
          fill={fill}
          stroke={stroke}
          strokeWidth="10"
        />
        <path
          d="M1117.062-696.516l36.315,46.417"
          transform="translate(-350.199 897.078)"
          fill="none"
          stroke={stroke}
          strokeWidth="9"
        />
        <path
          d="M1093.758-660.43l-297.625-2"
          transform="translate(-309 861)"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="12"
        />
      </g>
    </svg>
  )
}

export default Book
