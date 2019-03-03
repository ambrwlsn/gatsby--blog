import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import A from '../components/logo'
import ThemeContext from '../context/theme-context'

const Wrapper = styled.div``

const ModeButton = styled.button`
  position: absolute;
  background: #ffffff;
  right: 10px;
  padding: 1em;
  border-radius: 50px;
  border: 1px solid #000000;
  font-family: 'Quattrocento', sans-serif;
  font-weight: 900;
  font-size: 0.8em;
`

const Layout = ({ children }) => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper>
      <Link to="/" style={{ color: 'inherit' }}>
        <A width={50} height={50} color="currentColor" />
      </Link>
      <ModeButton onClick={context.toggleDark}>
        {context.isDarkTheme ? (
          <span>
            Light mode{' '}
            <span role="img" aria-label="sun">
              ☀️
            </span>
          </span>
        ) : (
          <span>
            Dark mode{' '}
            <span role="img" aria-label="moon">
              🌕
            </span>
          </span>
        )}
      </ModeButton>
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
