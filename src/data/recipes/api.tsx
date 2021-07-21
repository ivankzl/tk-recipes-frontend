
import { request } from '../../utils/api'
import { Recipe } from './types'


export function getRecipes(q: string): Promise<Recipe[]> {
  if (q) {
    return request(`/recipes/?name=${q}`)
  }
  return request('/recipes/')
}