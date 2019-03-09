import React from 'react'

function Sun(props) {
  const { className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.493"
      height="16.493"
      viewBox="0 0 16.493 16.493"
      className={className}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.845"
          y2="0.829"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fffffc" />
          <stop offset="0" stopColor="#fffcd6" />
          <stop offset="0.128" stopColor="#fef26f" />
          <stop offset="0.281" stopColor="#fef26f" />
          <stop offset="0.793" stopColor="#eda528" />
          <stop offset="1" stopColor="#eda528" />
        </linearGradient>
        <radialGradient
          id="radial-gradient"
          cx="0.5"
          cy="0.5"
          r="0.5"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fae755" />
          <stop offset="1" stopColor="#ffc05a" />
        </radialGradient>
      </defs>
      <g
        id="Group_3"
        data-name="Group 3"
        transform="translate(-631.548 -25.467)"
      >
        <circle
          id="Ellipse_7"
          data-name="Ellipse 7"
          cx="4.535"
          cy="4.535"
          r="4.535"
          transform="translate(634.164 27.907)"
          fill="url(#linear-gradient)"
        />
        <path
          id="Path_1"
          data-name="Path 1"
          d="M-8.509,12.139l1.366,2.188H-9.818Z"
          transform="translate(647.137 13.328)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(639.994 39.491) rotate(180)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(645.764 31.046) rotate(90)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_4"
          data-name="Path 4"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(631.548 33.721) rotate(-90)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(644.861 36.696) rotate(135)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(643.16 26.37) rotate(45)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M1.309,0,2.675,2.188H0Z"
          transform="translate(632.452 28.071) rotate(-45)"
          fill="url(#radial-gradient)"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M1.309,0,2.675,2.188H0Z"
          transform="matrix(0.966, -0.259, 0.259, 0.966, 632.787, 35.776)"
          fill="url(#radial-gradient)"
        />
      </g>
    </svg>
  )
}

export default Sun
