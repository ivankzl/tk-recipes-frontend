import React, { ReactElement } from 'react'

import { Link } from 'react-router-dom';

import { Recipe } from '../../../data/recipes/types';

import {
  RecipeItem, 
  RecipeItemContent,
  RecipeItemName,
  RecipeItemDescription,
  ActionButtons
} from './styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface Props {
  recipe: Recipe;
}

function Item({ recipe }: Props): ReactElement {
  return (
    <RecipeItem>
      <RecipeItemContent>
        <RecipeItemName>{recipe.name}</RecipeItemName>
        <RecipeItemDescription>{recipe.description}</RecipeItemDescription>
      </RecipeItemContent>
      
      <ActionButtons>
        <Link to={`/recipes/${recipe.id}`}>
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </ActionButtons>
    </RecipeItem>
  );
}

export default Item;
