import React, { ReactElement, useEffect } from 'react';
import { useAsync } from 'react-use';
// @ts-ignore
import { Link, useParams, useHistory } from 'react-router-dom';

import { Recipe } from '../../data/recipes/types';

// @ts-ignore
import qs from 'qs';
import { deleteRecipe, getRecipe } from '../../data/recipes/api';
import RecipeDetail from '../../components/Recipe/Detail/Detail'
import { ButtonEdit, ButtonDelete } from '../../styled'

// @ts-ignore
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

function ScreensRecipeDetail(): ReactElement {
  const params = useParams()
  const recipe = useAsync(() => getRecipe(params.id))
  const history = useHistory()

  const handleDelete = async (id: number) => {
    await deleteRecipe(id)
    history.push('/recipes')
  };

  return (
    <div>
      {recipe.error ? (
        'Failed to load recipe'
      ) : recipe.loading ? (
        'Loading recipe...'
      ) : (
        <RecipeDetail recipe={recipe.value} />
      )}
      <StyledLink to={`/recipes/${params.id}/edit`}>
        <ButtonEdit type="Button">
              Edit
        </ButtonEdit>
      </StyledLink>
      <ButtonDelete
        type="Button"
        onClick={() => { if (window.confirm('Are you sure you wish to delete this recipe?')) handleDelete(params.id) } } >
            Destroy
      </ButtonDelete>
    </div>
  );
}

export default ScreensRecipeDetail;
