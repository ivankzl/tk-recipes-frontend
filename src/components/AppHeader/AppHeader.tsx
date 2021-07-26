import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import RecipeSearch from '../RecipeSearch'

import { Nav } from './styled'

function AppHeader(): ReactElement {
  return (
    <Nav>
      <NavLink exact activeClassName="active" to="/">
        Ivan's Recipes
      </NavLink>
      <NavLink exact activeClassName="active" to="/about">
        About
      </NavLink>
      <RecipeSearch />
    </Nav>
  )
}

export default AppHeader
