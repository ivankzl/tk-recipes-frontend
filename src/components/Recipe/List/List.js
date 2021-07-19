import React, { Component } from 'react';
import { StaticRouter } from 'react-router-dom';
import styled from 'styled-components'
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRecipes } from '../../../data/recipes/api';

const Title = styled.h1`
  font-size: 1.5em;
`;

const Wrapper = styled.section`
  padding: 1em;
`;

const RecipeItem = styled.div`
    background: #e4eeff;
    margin-bottom: 10px;
    border: 1px solid #adcaf3;
    border-radius: 5px;
    padding: 8px;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
`

const ActionButtons = styled.div`
    
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
    this.addRecipe = this.addRecipe.bind(this);
  }
  async componentDidMount() {
    const response = await getRecipes();
    console.log(response)
    this.setState({ recipes: response.data })
  }
  renderRecipes(){
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <RecipeItem>
            {recipe.name}
            <ActionButtons>
              <FontAwesomeIcon icon={faEye} />
              <FontAwesomeIcon icon={faTrash} />
            </ActionButtons>
          </RecipeItem>
        ))}
      </div>
    )
  }
  addRecipe(recipe){
    this.setState(state => ({
      recipes: [...state.recipes, recipe]
    }));
  }
  render() {
    return (
      <Wrapper>
        <div>
          <Title>
            Recipe List
          </Title>
          { this.renderRecipes() }
        </div>
      </Wrapper>
    );
  }
}

export default List;
