import React, { ReactElement } from 'react';
import { useAsync } from 'react-use'

// @ts-ignore
import { Link, useLocation } from 'react-router-dom'

import RecipeList from '../../components/Recipe/List/List';
import { getRecipes } from '../../data/recipes/api'
import { Button } from './styled'

// @ts-ignore
import qs from 'qs';

function ScreensRecipeList(): ReactElement {
  const location = useLocation()
  let q = ''
  if (location.search) {
    const params = qs.parse(location.search)
    if (params['?q'] && typeof params['?q'] === 'string') {
      q = params['?q']
    }
  }
  
  const recipes = useAsync(() => getRecipes(q), [q])

  return (
    <div>
      {recipes.error ? (
        'Failed to load recipes'
      ) : recipes.loading ? (
        'Loading recipes...'
      ) : (
        <RecipeList recipes={recipes.value} />
      )}
      <Link to={'/recipes/new'}>
          <Button type="Button">
                Create a Recipe
          </Button>
      </Link>
    </div>
  );
}

export default ScreensRecipeList;