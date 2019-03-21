import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import A from '@components/img/logo'
import ThemeContext from '@context/theme-context'
import ModeToggle from '@components/mode-toggle'
import Nav from '@components/navigation'

const Wrapper = styled.div`
  max-width: 100%;
  padding: 2em;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  const context = useContext(ThemeContext)

  return (
    <Fragment>
      <Wrapper>
        <Link to="/" style={{ color: 'inherit', display: 'inline' }}>
          <A width={50} height={50} color="currentColor" />
        </Link>
        <Nav />
        <ModeToggle
          checked={!context.isDarkTheme}
          onChange={context.toggleDark}
        />
      </Wrapper>
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
