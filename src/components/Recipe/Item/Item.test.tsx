import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { RenderAndHistory } from 'utils/test/types'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
import { Router } from 'react-router-dom'

import RecipeItem from './Item'
import { Recipe } from '../../../data/recipes/types'

const recipe = {
  id: 1,
  name: 'Chocolate cookies',
  description: 'The best fudgy cookies you will ever try',
  ingredients: [{ name: 'Chocolate' }, { name: 'Butter' }, { name: 'Flour' }],
}

interface Props {
  recipe: Recipe
}

function renderRecipeItem(props: Props): RenderAndHistory {
  const history = createMemoryHistory()
  const utils = render(
    <Router history={history}>
      <RecipeItem {...props} />
    </Router>
  )

  return { ...utils, history }
}

describe('<RecipeItem>', () => {
  it('should render a recipe', async () => {
    renderRecipeItem({ recipe })
  })

  it('should render a recipe name', async () => {
    renderRecipeItem({ recipe })
    expect(screen.getByText('Chocolate cookies')).toBeInTheDocument()
  })

  it('should render a recipe description', async () => {
    renderRecipeItem({ recipe })
    await waitFor(() => screen.getByText('Chocolate cookies'))
    expect(
      screen.getByText('The best fudgy cookies you will ever try')
    ).toBeInTheDocument()
  })
})
