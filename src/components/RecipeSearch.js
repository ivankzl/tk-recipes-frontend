import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

const StyledLink = styled(Link)`
    float: right !important;
    padding: 6px !important;
    margin-top: 8px !important;
    margin-right: 16px !important;
    font-size: 17px !important;
`;

class RecipeSearch extends Component {
  constructor(props){
    super(props);
    this.state = { query: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt){
    this.setState({ query: evt.target.value})
  }
  render() {
    return(
      <div>
        <StyledLink to={`/recipes?q=${this.state.query}`}>Go</StyledLink>
        <input
          type="text"
          placeholder="Search for a recipe"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default RecipeSearch;