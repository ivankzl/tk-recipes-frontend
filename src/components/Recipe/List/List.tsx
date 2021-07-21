import React, { ReactElement } from 'react';
import { useAsync } from 'react-use';
// @ts-ignore
import { Link, useLocation } from 'react-router-dom';

import Item from '../Item/Item';
import { Recipe } from '../../../data/recipes/types';

// @ts-ignore
import qs from 'qs';
import { getRecipes } from '../../../data/recipes/api';
import { Wrapper } from './styled';

interface Props {
  recipes?: Recipe[];
  className?: string;
}

function List({
  recipes = [],
  ...props
}: Props): ReactElement {
  return (
    <Wrapper>
     { recipes.length ? (
        recipes.map(recipe => (
          <Item key={recipe.id} recipe={recipe}></Item>
        ))
     ) : (
      <div>No recipes.</div>
     )}
    </Wrapper>
  )
}

export default List;
