import React, { Component } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

class RecipeList extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Recipe Title
        </Title>
      </Wrapper>
    );
  }
}

export default RecipeList;
