import React, { ReactElement } from 'react'

// @ts-ignore
import { Link } from 'react-router-dom'

import RecipeForm from '../../components/Recipe/Form/Form'

import { createRecipe } from '../../data/recipes/api'

export default function RecipeCreate(): ReactElement {
  return (
    <div>
      <RecipeForm />
    </div>
  )
}
