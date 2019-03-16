import React from 'react'

function BackToTop(props) {
  const { color, className } = props
  return (
    <svg
      width="48"
      height="20"
      viewBox="0 0 53 25"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        stroke={color}
        strokeWidth="4"
        d="M2 22.5L27.46 2 51 22.5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BackToTop
