import React, { ReactElement } from 'react'

import { Recipe as RecipeType, Ingredient } from '../../../data/recipes/types'

interface Props {
  recipe?: RecipeType;
}

function Detail({ recipe }: Props): ReactElement {
  return (
    <div>
      { recipe ? (
        <div>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
          {recipe.ingredients.map((ingredient: Ingredient, i: number) => (
            <li key={i}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No recipe</div>
      )}
    </div>
  );
}

export default Detail;
