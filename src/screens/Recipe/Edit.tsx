import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useAsync } from 'react-use'

import { getRecipe } from '../../data/recipes/api'
import RecipeForm from '../../components/Recipe/Form/Form'

type RecipeParams = {
  id: string
}

export default function ScreensRecipeEdit(): ReactElement {
  const { id } = useParams<RecipeParams>()
  const recipe = useAsync(() => getRecipe(id))
  return (
    <div>
      {recipe.error ? (
        'Failed to load recipe'
      ) : recipe.loading ? (
        'Loading recipe...'
      ) : (
        <RecipeForm initialRecipe={recipe.value} initialId={id} />
      )}
    </div>
  )
}
