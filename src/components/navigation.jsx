import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const NavLink = styled(Link)``

const NavItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-right: 1em;
  font-weight: 600;
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
