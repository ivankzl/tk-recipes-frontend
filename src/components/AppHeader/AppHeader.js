import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom'

// import RecipeSearch from 'components/RecipeSearch'

const Nav = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed; 
  top: 0;
  width: 99%;
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
`;
 
class AppHeader extends Component {
  render() {
    return (
      <Nav>
        <a className="active" href="#home">Ivan's Recipes</a>
      </Nav>
    )
  }
}

export default AppHeader;
