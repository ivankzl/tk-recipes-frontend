import React, { ReactElement } from 'react'

// @ts-ignore
import { Link } from 'react-router-dom';

import { Recipe as RecipeType, Ingredient } from '../../../data/recipes/types'

// import {
//   RecipeItem, 
//   Title,
//   Wrapper,
//   RecipeItemContent,
//   RecipeItemName,
//   RecipeItemDescription,
//   ActionButtons
// } from './styled'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface Props {
  recipe?: RecipeType;
}

function Detail({ recipe }: Props): ReactElement {
  console.log("RECIPE", recipe?.name)
  return (
    <div>
      { recipe ? (
        <h2>{recipe?.name}</h2>
      ) : (
        <div>No recipe</div>
      )}
    </div>
    // <RecipeItem>
    //   <RecipeItemContent>
    //     <RecipeItemName>{recipe.name}</RecipeItemName>
    //     <RecipeItemDescription>{recipe.description}</RecipeItemDescription>
    //   </RecipeItemContent>
      
    //   <ActionButtons>
    //     <Link to={`/recipes/${recipe.id}`}>
    //       <FontAwesomeIcon icon={faEye} />
    //     </Link>
    //   </ActionButtons>
    // </RecipeItem>
  );
}

export default Detail;
