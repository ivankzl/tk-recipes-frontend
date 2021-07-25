import React from 'react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
import { render, act, waitFor } from '@testing-library/react'
import { getRecipe, updateRecipe } from '../../data/recipes/api'
import { RenderAndHistory } from 'utils/test/types'
import userEvent from '@testing-library/user-event'

import ScreensRecipeEdit from './Edit'

jest.mock('../../data/recipes/api');

function renderScreensRecipeEdit(
  options?: MemoryHistoryBuildOptions
): RenderAndHistory {
  const history = createMemoryHistory(options)
  const utils = render(
    <Router history={history}>
        <Route path={history.location.pathname}>
          <ScreensRecipeEdit/>
        </Route>
    </Router>
  )

  return { ...utils, history }
}

describe('<ScreensRecipeEdit>', () => {
  it('should update the recipe when submitted with valid values', async () => {
    // @ts-ignore
    getRecipe.mockResolvedValue({
      id: 1,
      name: 'Gnocci',
      description: 'Creamy gnocci with tomato sauce',
      ingredients: [{ name: 'Potato' }, { name: 'Salt' }, { name: 'Tomato' }],
    })
    // @ts-ignore
    updateRecipe.mockResolvedValue()
  
    await act(async () => {
      const { getByPlaceholderText, getByTestId, getByText } = renderScreensRecipeEdit({
        initialEntries: ['/recipes/1/edit']
      })
      
      await waitFor(() => getByTestId('recipe-name-input'));
      await userEvent.type(getByTestId('recipe-name-input'), 'Pasta', { delay: 1 });
      await userEvent.type(getByTestId('recipe-description-input'), 'Delicious');
      await userEvent.type(getByTestId('recipe-ingredient-1-input'), 'Flour');
      return userEvent.click(getByText('Submit'));
    });
  
    setTimeout( function(){
      expect(updateRecipe).toHaveBeenCalledWith(1, {
        name: 'Pasta',
        description: 'Delicious',
        ingredients: [{ name: 'Flour' }],
      });
    }, 1000);
  });

  it('should update the recipe when submitted with empty name', async () => {
    // @ts-ignore
    getRecipe.mockResolvedValue({
      id: 1,
      name: 'Gnocci',
      description: 'Creamy gnocci with tomato sauce',
      ingredients: [{ name: 'Potato' }, { name: 'Salt' }, { name: 'Tomato' }],
    })
    // @ts-ignore
    updateRecipe.mockResolvedValue()
  
    await act(async () => {
      const { getByPlaceholderText, getByTestId, getByText } = renderScreensRecipeEdit({
        initialEntries: ['/recipes/1/edit']
      })
      
      await waitFor(() => getByTestId('recipe-name-input'));
      await userEvent.type(getByTestId('recipe-name-input'), '', { delay: 1 });
      await userEvent.type(getByTestId('recipe-description-input'), 'Delicious');
      return userEvent.click(getByText('Submit'));
    });
  
    setTimeout( function(){
      expect(updateRecipe).toHaveBeenCalledTimes(0);
    }, 100);
  });
});