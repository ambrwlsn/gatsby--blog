import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;

  @media (max-width: 800px) {
    font-size: 1.7rem;
    display: flex;
  }

  @media (max-width: 420px) {
    font-size: 1.3rem;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Courgette;
`

const NavItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-right: 1em;
  font-weight: 400;
  &:last-child {
    margin-right: 0;
  }
`

const Nav = () => {
  return (
    <nav>
      <List>
        <NavItem>
          <NavLink to="/blog">Blog</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/learn">Learn</NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/read">Read</NavLink>
        </NavItem>
      </List>
    </nav>
  )
}

export default Nav
