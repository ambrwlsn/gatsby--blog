import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2em;
`
const Logo = styled.div`
  font-family: 'Courgette', cursive;
  font-size: 2em;
  box-shadow: none;
  color: #000;
`
const Layout = ({ location, children }) => {
  // eslint-disable-next-line
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Wrapper>
      <h1
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            textDecoration: 'none',
          }}
          to="/"
        >
          <Logo>a</Logo>
        </Link>
      </h1>
      {children}
    </Wrapper>
  )
}

export default Layout
