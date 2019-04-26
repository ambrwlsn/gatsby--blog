import React from 'react'

function Cat(props) {
  const { className, stroke, eye, body, eyesRef, eyePos } = props
  const [eyeX, eyeY] = eyePos
  const strokeWidth = '3'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="163"
      height="125"
      viewBox="0 0 246 190"
      className={className}
    >
      <g id="kitty" clipPath="url(#b)">
        <g transform="translate(-546 -547)">
          <path
            d="M2838.463,856.934s8.58-32.178-19.83-57.627c-.506.24-15.033-52.062-26.3-52.033-1.125.145-17.775,27.611-16.984,52.033.014-.512-38.492-8.631-53.854,12.113,1.068.051-23.2-34.676-48.232-41.08.331.219-3.733-1.556-1.594,11.627,1.357,8.365,5.494,23.519,15.5,50.156.055-.545-11.211,31.1,0,48.877.619,1.1,10.521,22.213,34.33,30.746-.811.311,29.57,9.833,53.854,6s43.281-25.559,43.281-25.559A66.658,66.658,0,0,0,2832.6,873.2C2837.929,861.936,2838.463,856.934,2838.463,856.934Z"
            transform="translate(-2086 -191)"
            fill={body}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2817.289,841.232s14.4-18.584,50.537-33.473"
            transform="translate(-2086 -191)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2817.289,841.232s18.8-16.982,42.553-16.8"
            transform="translate(-2076 -183)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2817.289,841.232s14.4-18.584,50.537-33.473"
            transform="translate(-14.956 -2249.411) rotate(62)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2817.289,841.232s14.4-18.584,50.537-33.473"
            transform="translate(-1389.152 -1537.042) rotate(32)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
          />

          <path
            d="M15.593,0C24.2,0,31.185,9.65,31.185,21.554S24.2,43.109,15.593,43.109,0,33.459,0,21.554,6.981,0,15.593,0Z"
            transform="matrix(0.995, -0.105, 0.105, 0.995, 686.044, 627.776)"
            fill={eye}
            stroke={stroke}
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.593,0C24.2,0,31.185,9.65,31.185,21.554S24.2,43.109,15.593,43.109,0,33.459,0,21.554,6.981,0,15.593,0Z"
            transform="matrix(0.995, -0.105, 0.105, 0.995, 634.043, 635.776)"
            fill={eye}
            stroke={stroke}
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />

          <g id="eyes" ref={eyesRef} transform={`translate(${eyeX} ${eyeY})`}>
            <ellipse
              cx="6"
              cy="10"
              rx="6"
              ry="10"
              transform="translate(644.51 647.062) rotate(-9)"
              fill="black"
            />
            <ellipse
              cx="6"
              cy="10"
              rx="6"
              ry="10"
              transform="translate(696.51 638.062) rotate(-9)"
              fill="black"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Cat
