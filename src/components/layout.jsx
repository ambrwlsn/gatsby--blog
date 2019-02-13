import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import A from '../components/logo'

const Wrapper = styled.div`
  margin: 2em;
`

const Layout = ({ children }) => {
  // eslint-disable-next-line
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <Wrapper>
      <Link to="/">
        <A width={50} height={50} color="#000" />
      </Link>
      {children}
    </Wrapper>
  )
}

export default Layout
