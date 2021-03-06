import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { RenderAndHistory } from 'utils/test/types'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'

import RecipeDetail from './Detail'
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

describe('<RecipeDetail>', () => {
  it('should render a recipe', async () => {
    ;<RecipeDetail recipe={recipe} />
  })

  it('should render a recipe name', async () => {
    render(<RecipeDetail recipe={recipe} />)
    expect(screen.getByText('Chocolate cookies')).toBeInTheDocument()
  })

  it('should render a recipe description', async () => {
    render(<RecipeDetail recipe={recipe} />)
    expect(
      screen.getByText('The best fudgy cookies you will ever try')
    ).toBeInTheDocument()
  })

  it('should render a recipe name', async () => {
    render(<RecipeDetail recipe={recipe} />)
    expect(screen.getByText('Butter')).toBeInTheDocument()
    expect(screen.getByText('Chocolate')).toBeInTheDocument()
    expect(screen.getByText('Flour')).toBeInTheDocument()
  })
})
