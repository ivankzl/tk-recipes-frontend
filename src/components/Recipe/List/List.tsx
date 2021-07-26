import React, { ReactElement } from 'react'

import Item from '../Item/Item'
import { Recipe } from '../../../data/recipes/types'

import { Wrapper } from './styled'

interface Props {
  recipes?: Recipe[]
  className?: string
}

function List({ recipes = [], ...props }: Props): ReactElement {
  return (
    <Wrapper>
      <h2>All recipes</h2>
      {recipes.length ? (
        recipes.map((recipe) => <Item key={recipe.id} recipe={recipe}></Item>)
      ) : (
        <div>No recipes.</div>
      )}
    </Wrapper>
  )
}

export default List
