import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
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
    ingredients: [{ name: 'Carnaroli Rice' }, { name: 'Chicken Broth' }, { name: 'Parmesano Cheese' }],
  },
]

test('<RecipeList> with recipes', async () => {
  render(<RecipeList recipes={recipes} />)
  expect(await screen.findByText("All recipes")).toBeInTheDocument();
  expect(await screen.findByText("Creamy lemon risotto")).toBeInTheDocument();
});

test('<RecipeList> without recipes', async () => {
  render(<RecipeList />)
  expect(await screen.findByText("No recipes.")).toBeInTheDocument();
});
