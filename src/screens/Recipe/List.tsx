import React, { ReactElement } from 'react';
import { useAsync } from 'react-use'

// @ts-ignore
import { Link, useLocation } from 'react-router-dom'

import RecipeList from '../../components/Recipe/List/List';
import { getRecipes } from '../../data/recipes/api'

// @ts-ignore
import qs from 'qs';

function ScreensRecipeList(): ReactElement {
  const location = useLocation()
  let q = ''
  if (location.search) {
    const params = qs.parse(location.search)
    if (params.q && typeof params.q === 'string') {
      q = params.q
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
      {/* <Button tag={Link} to={`/recipes/new`} className="mt-4">
        New Recipe
      </Button> */}
    </div>
  );
}

export default ScreensRecipeList;