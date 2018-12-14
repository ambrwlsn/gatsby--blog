import React from 'react'
import { Link } from 'gatsby'

const Layout = ({ location, title, children }) => {
  // eslint-disable-next-line
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'steelblue',
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'blue',
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {header}
      {children}
    </div>
  )
}

export default Layout
