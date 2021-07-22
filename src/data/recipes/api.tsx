
import { request } from '../../utils/api'
import { Recipe } from './types'


function getRecipes(q: string): Promise<Recipe[]> {
  if (q) {
    return request(`/recipes/?name=${q}`)
  }
  return request('/recipes/')
}

function getRecipe(id: number): Promise<Recipe> {
  return request(`/recipes/${id}`)
}

export { getRecipes, getRecipe }