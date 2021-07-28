import React, { ReactElement } from 'react'
import { useAsync } from 'react-use'
import { Link, useParams, useHistory } from 'react-router-dom'

import { deleteRecipe, getRecipe } from '../../data/recipes/api'
import RecipeDetail from '../../components/Recipe/Detail/Detail'

import { ButtonEdit, ButtonDelete } from '../../styled'

import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
`

type RecipeParams = {
  id: string
}

function ScreensRecipeDetail(): ReactElement {
  const { id } = useParams<RecipeParams>()
  const recipe = useAsync(() => getRecipe(id))
  const history = useHistory()

  const handleDelete = async (id: number | string) => {
    await deleteRecipe(id)
    history.push('/recipes')
  }

  return (
    <div>
      {recipe.error ? (
        'Failed to load recipe'
      ) : recipe.loading ? (
        'Loading recipe...'
      ) : (
        <RecipeDetail recipe={recipe.value} />
      )}
      <StyledLink to={`/recipes/${id}/edit`}>
        <ButtonEdit type="button">Edit</ButtonEdit>
      </StyledLink>
      <ButtonDelete
        onClick={() => {
          if (window.confirm('Are you sure you wish to delete this recipe?'))
            handleDelete(id)
        }}
      >
        Destroy
      </ButtonDelete>
    </div>
  )
}

export default ScreensRecipeDetail
