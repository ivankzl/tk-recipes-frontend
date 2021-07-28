import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { RenderAndHistory } from 'utils/test/types'
import { Recipe } from 'data/recipes/types'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import RecipeList from './List'

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
    ingredients: [
      { name: 'Carnaroli Rice' },
      { name: 'Chicken Broth' },
      { name: 'Parmesano Cheese' },
    ],
  },
]

interface Props {
  recipes: Recipe[]
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

test('<RecipeList> with recipes', async () => {
  renderRecipeList({ recipes })
  expect(await screen.findByText('All recipes')).toBeInTheDocument()
  expect(await screen.findByText('Chocolate cookies')).toBeInTheDocument()
  expect(
    await screen.findByText('The best fudgy cookies you will ever try')
  ).toBeInTheDocument()
  expect(await screen.findByText('Risotto')).toBeInTheDocument()
  expect(await screen.findByText('Creamy lemon risotto')).toBeInTheDocument()
})

test('<RecipeList> without recipes', async () => {
  renderRecipeList()
  expect(await screen.findByText('No recipes.')).toBeInTheDocument()
})
