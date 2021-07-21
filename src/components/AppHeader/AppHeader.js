import React, { Component } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom'

import RecipeSearch from '../RecipeSearch'

// import RecipeSearch from 'components/RecipeSearch'

const Nav = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed; 
  top: 0;
  width: 100%;
  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover {
    background: #ddd;
    color: black;
  }
  a.active {
    background-color: #292929;
    color: white;
  }
  input {
    float: right;
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: 16px;
    font-size: 17px;
  }
`;
 
class AppHeader extends Component {
  render() {
    return (
      <Nav>
        <NavLink exact activeClassName='active' to='/'>Ivan's Recipes</NavLink>
        <NavLink exact activeClassName='active' to='/about'>About</NavLink>
        <RecipeSearch />
      </Nav>
    )
  }
}

export default AppHeader;
