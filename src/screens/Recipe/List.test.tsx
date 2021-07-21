// import React from 'react'
// import { Router } from 'react-router-dom'
// import { createMemoryHistory, MemoryHistoryBuildOptions } from 'history'
// import { render, act } from '@testing-library/react'
// import { getRecipes } from '../../data/recipes/api'
// import { RenderAndHistory } from 'utils/test/types'
// import ScreenRecipeList from './list'

// jest.mock('../../data/recipes/api')
// import axios from 'axios';

// jest.mock('axios');

// function renderScreenRecipeList(
//   options?: MemoryHistoryBuildOptions
// ): RenderAndHistory {
//   const history = createMemoryHistory(options)
//   const utils = render(
//     <Router history={history}>
//       <ScreenRecipeList />
//     </Router>
//   )

//   return { ...utils, history }
// }
// describe('<ScreenRecipeList>', () => {
//   afterEach(() => {
//     jest.resetAllMocks();
//   });
//   it('should query unfiltered results when param is not present', async () => {
//     getRecipes.mockResolvedValue([])
//     await act(async (): Promise<void> => {
//       renderScreenRecipeList({ initialEntries: ['/recipes/'] })
//     })
//     expect(getRecipes).toHaveBeenCalledWith('')
//   })

//   it('should query filtered results when param is present', async () => {
//     getRecipes.mockResolvedValue([])
//     await act(async (): Promise<void> => {
//       renderScreenRecipeList({ initialEntries: ['/recipes/?q=Pizza'] })
//     })
//     expect(getRecipes).toHaveBeenCalledWith('Pizza')
//   })
// })