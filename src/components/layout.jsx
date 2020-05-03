import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '@components/img/logo'
import ThemeContext from '@context/theme-context'
import ModeToggle from '@components/mode-toggle'

const Wrapper = styled.div`
  max-width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem 1rem 0 1rem;
  @media (min-width: 800px) {
    padding: 2rem 2rem 3rem 2rem;
  }
`

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 1.3rem;
  font-family: 'Courgette';

  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
`

const NavigationListItem = styled.li`
  margin: 0 1rem 0 0;
  &:last-of-type {
    margin: 0;
  }
  @media (min-width: 800px) {
    margin: 0 1.8rem 0 0;
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;
`

const logoSizes = {
  desktop: 50,
  mobile: 22,
}

const SiteLogo = styled(Logo)`
  width: ${logoSizes.desktop}px;
  height: ${logoSizes.desktop}px;
  padding-top: 0.2rem;
  vertical-align: top;

  @media (max-width: 800px) {
    width: ${logoSizes.mobile}px;
    height: ${logoSizes.mobile}px;
  }
`

const SiteLogoLink = styled(Link)`
  color: inherit;
  display: inline;
`

const Header = () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper>
      <SiteLogoLink to="/">
        <SiteLogo width={50} height={50} color="currentColor" />
      </SiteLogoLink>

      <nav>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink to="/blog">Blog</NavigationLink>
          </NavigationListItem>

          <NavigationListItem>
            <NavigationLink to="/learn">Learn</NavigationLink>
          </NavigationListItem>

          <NavigationListItem>
            <NavigationLink to="/read">Read</NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </nav>

      <ModeToggle
        checked={!context.isDarkTheme}
        onChange={context.toggleDark}
      />
    </Wrapper>
  )
}

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
