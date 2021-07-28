import { request } from '../../utils/api'
import { Recipe } from './types'

function getRecipes(q: string): Promise<Recipe[]> {
  if (q) {
    return request(`/recipes/?name=${q}`)
  }
  return request('/recipes/')
}

function getRecipe(id: number | string): Promise<Recipe> {
  return request(`/recipes/${id}`)
}

function createRecipe(data: Recipe): Promise<Recipe> {
  return request(`/recipes/`, { method: 'POST', body: JSON.stringify(data) })
}

function deleteRecipe(id: number | string): Promise<Recipe> {
  return request(`/recipes/${id}`, { method: 'DELETE' })
}

function updateRecipe(id: number | string, data: Recipe): Promise<Recipe> {
  return request(`/recipes/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}

export { getRecipes, getRecipe, createRecipe, deleteRecipe, updateRecipe }
