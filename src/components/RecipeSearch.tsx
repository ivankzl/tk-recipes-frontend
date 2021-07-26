import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import useInputState from "../components/Recipe/Form/useInputState";

import styled from 'styled-components';

const StyledLink = styled(Link)`
    float: right !important;
    padding: 6px !important;
    margin-top: 8px !important;
    margin-right: 16px !important;
    font-size: 17px !important;
`;

interface Props {
  initialQuery?: string;
}
function RecipeSearch({ initialQuery = '' }: Props): ReactElement {
  const[query, updateQuery] = useInputState(initialQuery || '');
  return(
    <div>
      <StyledLink to={`/recipes?q=${query}`}>Go</StyledLink>
      <input
        type="text"
        placeholder="Search for a recipe"
        value={query}
        onChange={updateQuery}
      />
    </div>
  )
}

export default RecipeSearch;