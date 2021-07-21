import React, { ReactElement } from 'react'

import { Recipe } from '../../../data/recipes/types';

import {
  RecipeItem, 
  Title,
  Wrapper,
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
        <FontAwesomeIcon icon={faEye} />
      </ActionButtons>
    </RecipeItem>
  );
}

export default Item;
