import React, { ReactElement } from 'react'
// @ts-ignore
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';

import { getRecipe } from '../../data/recipes/api'
import RecipeForm from '../../components/Recipe/Form/Form'

export default function ScreensRecipeEdit(): ReactElement {
  const params = useParams();
  const recipe = useAsync(() => getRecipe(params.id))
  return (
    <div>
      {recipe.error ? (
        'Failed to load recipe'
      ) : recipe.loading ? (
        'Loading recipe...'
      ) : (
        <RecipeForm initialRecipe={recipe.value} initialId={params.id} />
      )}
    </div>
  )
}
