import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
import { render, act } from '@testing-library/react'
import { createRecipe } from '../../data/recipes/api'
import { RenderAndHistory } from 'utils/test/types'
import userEvent from '@testing-library/user-event'

import ScreensRecipeCreate from './Create'

jest.mock('../../data/recipes/api');

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
    const { getByTestId, getByText } = renderScreensRecipeCreate();
    // @ts-ignore
    createRecipe.mockResolvedValue();
      const nameInput = getByTestId('recipe-name-input');
      const descriptionInput = getByTestId('recipe-description-input');
      const ingredientInput = getByTestId('recipe-ingredient-1-input');
      
      userEvent.type(nameInput, 'Pasta');
      userEvent.type(descriptionInput, 'Delicious');
      userEvent.type(ingredientInput, 'Flour');
    
      expect(nameInput).toHaveValue('Pasta');
      expect(descriptionInput).toHaveValue('Delicious');
      expect(ingredientInput).toHaveValue('Flour');
      
      userEvent.click(getByText('Submit'));
  
      setTimeout(() => {
        expect(createRecipe).toHaveBeenCalledWith({
          'name': 'Pasta',
          'description': 'Delicious',
          'ingredients': [{ 'name': 'Flour' }],
        });
      }, 100);  
  })

  it('should create a recipe when submitted with 3 ingredients', async () => {
    const { getByTestId, getByText } = renderScreensRecipeCreate();
    // @ts-ignore
    createRecipe.mockResolvedValue(),

    userEvent.type(getByTestId('recipe-name-input'), 'Gnocci');
    userEvent.type(getByTestId('recipe-description-input'), 'Test');
    userEvent.type(getByTestId('recipe-ingredient-1-input'), 'Flour');
    userEvent.click(getByTestId('recipe-add-ingredient-1-button'));
    userEvent.type(getByTestId('recipe-ingredient-2-input'), 'Eggs');
    userEvent.click(getByTestId('recipe-add-ingredient-2-button'));
    userEvent.type(getByTestId('recipe-ingredient-3-input'), 'Pepper');
  
    userEvent.click(getByText('Submit'));

    setTimeout(() => {
      expect(createRecipe).toHaveBeenCalledWith({
        'name': 'Gnocci',
        'description': 'Test',
        'ingredients': [
          { 'name': 'Flour' },
          { 'name': 'Eggs' },
          { 'name': 'Pepper' }
        ],
      });
    }, 100); 
  })

  it('should not create a recipe when empty name', async () => {
    const { getByTestId, getByText } = renderScreensRecipeCreate();
    // @ts-ignore
    createRecipe.mockResolvedValue();
  
    act(() => {
      userEvent.type(getByTestId('recipe-name-input'), '');
    });
    userEvent.click(getByText('Submit'));
  
    expect(createRecipe).toHaveBeenCalledTimes(0);
  })
})