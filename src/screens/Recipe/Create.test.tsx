import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
import { render, act, screen } from '@testing-library/react'
import { createRecipe } from '../../data/recipes/api'
import { RenderAndHistory } from 'utils/test/types'
import userEvent from '@testing-library/user-event'

import ScreensRecipeCreate from './Create'

jest.mock('../../data/recipes/api')

function renderScreensRecipeCreate(
  options?: MemoryHistoryBuildOptions
): RenderAndHistory {
  const history = createMemoryHistory(options)
  const utils = render(
    <Router history={history}>
      <ScreensRecipeCreate />
    </Router>
  )

  return { ...utils, history }
}

describe('<ScreenRecipeCreate>', () => {
  it('should create a recipe when submitted with 1 ingredient', async () => {
    renderScreensRecipeCreate()
    // @ts-ignore
    createRecipe.mockResolvedValue()

    const nameInput = screen.getByTestId('recipe-name-input')
    const descriptionInput = screen.getByTestId('recipe-description-input')
    const ingredientInput = screen.getByTestId('recipe-ingredient-1-input')

    await act(async () => {
      await userEvent.type(nameInput, 'Pasta', { delay: 1 })
      await userEvent.type(descriptionInput, 'Delicious')
      await userEvent.type(ingredientInput, 'Flour')
      return userEvent.click(screen.getByText('Submit'))
    })

    expect(createRecipe).toHaveBeenCalledWith({
      name: 'Pasta',
      description: 'Delicious',
      ingredients: [{ name: 'Flour' }],
    })
  })

  it('should create a recipe when submitted with 2 ingredients', async () => {
    renderScreensRecipeCreate()
    // @ts-ignore
    createRecipe.mockResolvedValue(),
      await act(async () => {
        await userEvent.click(
          screen.getByTestId('recipe-add-ingredient-1-button')
        )
        await userEvent.type(
          screen.getByTestId('recipe-name-input'),
          'Gnocci',
          { delay: 1 }
        )
        await userEvent.type(
          screen.getByTestId('recipe-description-input'),
          'Test'
        )
        await userEvent.type(
          screen.getByTestId('recipe-ingredient-1-input'),
          'Flour'
        )
        await userEvent.type(
          screen.getByTestId('recipe-ingredient-2-input'),
          'Eggs'
        )
        return userEvent.click(screen.getByText('Submit'))
      })

    expect(createRecipe).toHaveBeenCalledWith({
      name: 'Gnocci',
      description: 'Test',
      ingredients: [{ name: 'Flour' }, { name: 'Eggs' }],
    })
  })

  it('should not create a recipe when empty name', async () => {
    renderScreensRecipeCreate()
    // @ts-ignore
    createRecipe.mockResolvedValue()

    await act(async () => {
      await userEvent.type(screen.getByTestId('recipe-name-input'), '')
      return userEvent.click(screen.getByText('Submit'))
    })

    expect(createRecipe).toHaveBeenCalledTimes(0)
  })

  it('should not create a recipe when empty ingredient name', async () => {
    renderScreensRecipeCreate()
    // @ts-ignore
    createRecipe.mockResolvedValue(),
      await act(async () => {
        await userEvent.type(screen.getByTestId('recipe-name-input'), 'Gnocci')
        await userEvent.type(
          screen.getByTestId('recipe-description-input'),
          'Test'
        )
        await userEvent.click(
          screen.getByTestId('recipe-add-ingredient-1-button')
        )
        return userEvent.click(screen.getByText('Submit'))
      })

    expect(createRecipe).toHaveBeenCalledTimes(0)
  })
})
