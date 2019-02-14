import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import A from '../components/logo'
import device from '../utils/device'

const Wrapper = styled.div`
  margin: 2em;
  @media ${device.mobileL} {
    margin: 10px;
  }
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
