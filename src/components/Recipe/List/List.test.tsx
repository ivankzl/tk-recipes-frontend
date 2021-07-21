import React from 'react'
import { render } from '@testing-library/react'
import RecipeList from './List'
import { RenderAndHistory } from 'utils/test/types'
import { Recipe } from '../../../data/recipes/types'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const recipes = [
  {
    id: 1,
    name: 'Chocolate cookies',
    description: 'The best fudgy cookies you will ever try',
    ingredients: [{ name: 'Chocolate' }, { name: 'Butter' }, { name: 'Flour' }],
  },
  {
    id: 2,
    name: 'Risotto',
    description: 'Creamy lemon risotto',
    ingredients: [{ name: 'Carnaroli Rice' }, { name: 'Chicken Broth' }, { name: 'Parmesano Cheese' }],
  },
]

interface Props {
  recipes: Recipe[];
}

function renderRecipeList(props?: Props): RenderAndHistory {
  const history = createMemoryHistory()
  const utils = render(
    <Router history={history}>
      <RecipeList {...props} />
    </Router>
  )

  return { ...utils, history }
}

describe('<RecipeList>', () => {
  it('should render a valid recipe without crashing', async () => {
    renderRecipeList({ recipes })
  })

  it('should render an undefined recipe list without crashing', async () => {
    renderRecipeList()
  })
})