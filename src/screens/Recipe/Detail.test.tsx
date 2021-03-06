import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
import { render, act, waitFor, screen } from '@testing-library/react'
import { getRecipe, deleteRecipe } from '../../data/recipes/api'
import { RenderAndHistory } from 'utils/test/types'
import userEvent from '@testing-library/user-event'

import ScreensRecipeDetail from './Detail'

jest.mock('../../data/recipes/api')

function renderScreensRecipeDetail(
  options?: MemoryHistoryBuildOptions
): RenderAndHistory {
  const history = createMemoryHistory(options)
  const utils = render(
    <Router history={history}>
      <Route path={history.location.pathname}>
        <ScreensRecipeDetail />
      </Route>
    </Router>
  )

  return { ...utils, history }
}

describe('<ScreensRecipeDetail>', () => {
  it('should show the recipe with ingredients', async () => {
    // @ts-ignore
    getRecipe.mockResolvedValue({
      id: 1,
      name: 'Gnocci',
      description: 'Creamy gnocci with tomato sauce',
      ingredients: [{ name: 'Potato' }, { name: 'Salt' }, { name: 'Tomato' }],
    })

    await act(async () => {
      renderScreensRecipeDetail({
        initialEntries: ['/recipes/1'],
      })

      await waitFor(() => screen.getByText('Gnocci'))

      expect(
        screen.getByText('Creamy gnocci with tomato sauce')
      ).toBeInTheDocument()
      expect(screen.getByText('Potato')).toBeInTheDocument()
      expect(screen.getByText('Salt')).toBeInTheDocument()
      expect(screen.getByText('Tomato')).toBeInTheDocument()
    })
  })

  it('should show delete a recipe when Destroy is clicked', async () => {
    // @ts-ignore
    getRecipe.mockResolvedValue({
      id: 1,
      name: 'Gnocci',
      description: 'Creamy gnocci with tomato sauce',
      ingredients: [{ name: 'Potato' }, { name: 'Salt' }, { name: 'Tomato' }],
    })

    renderScreensRecipeDetail({
      initialEntries: ['/recipes/1'],
    })
    window.confirm = jest.fn(() => true)

    await waitFor(() => screen.getByText('Gnocci'))
    await userEvent.click(screen.getByText('Destroy'))
    expect(window.confirm).toBeCalledWith(
      'Are you sure you wish to delete this recipe?'
    )
    expect(deleteRecipe).toHaveBeenCalledTimes(1)
  })
})
