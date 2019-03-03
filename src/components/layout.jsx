import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import A from '../components/logo'
import ThemeContext from '../context/theme-context'

const Wrapper = styled.div``

const Layout = ({ children }) => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper>
      <Link to="/">
        <A width={50} height={50} color="#000" />
      </Link>
      <button className="dark-switcher" onClick={context.toggleDark}>
        {context.isDarkTheme ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
      </button>
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
