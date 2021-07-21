import React, { ReactElement } from 'react';
import { useAsync } from 'react-use';
// @ts-ignore
import { Link, useLocation } from 'react-router-dom';

import { Recipe } from '../../data/recipes/types';

// @ts-ignore
import qs from 'qs';
import { getRecipe } from '../../data/recipes/api';
import { Wrapper } from './styled';

function Detail(): ReactElement {
  return (
    <Wrapper>
    <h2>One Recipe</h2>
    </Wrapper>
  )
}

export default Detail;
