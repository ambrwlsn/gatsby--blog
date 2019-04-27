import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;

  @media (max-width: 800px) {
    font-size: 5.5vw;
    display: flex;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const NavItem = styled.li`
  padding: 0;
  margin: 0;
  display: inline-block;
  margin-right: 1em;
  font-weight: 400;
  &:last-child {
    margin: 0;
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
