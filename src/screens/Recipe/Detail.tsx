import React, { ReactElement } from 'react';
import { useAsync } from 'react-use';
// @ts-ignore
import { Link, useParams } from 'react-router-dom';

import { Recipe } from '../../data/recipes/types';

// @ts-ignore
import qs from 'qs';
import { getRecipe } from '../../data/recipes/api';
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

  return (
    <div>
      {recipe.error ? (
        'Failed to load recipe'
      ) : recipe.loading ? (
        'Loading recipe...'
      ) : (
        <RecipeDetail recipe={recipe.value} />
      )}
      <StyledLink to={'/recipes/new'}>
        <ButtonEdit type="Button">
              Edit
        </ButtonEdit>
      </StyledLink>
      <StyledLink to={'/recipes/new'}>
        <ButtonDelete type="Button">
              Destroy
        </ButtonDelete>
      </StyledLink>
    </div>
  );
}

export default ScreensRecipeDetail;
