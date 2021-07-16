import React from 'react';
import RecipeList from '../../components/Recipe/List/List';

const ScreensReciperList = ({ match: { params } }) => (
  <div>
    <h1>
      {`${!params.id ? 'Create' : 'Update'}`} Recipe
    </h1>
    <RecipeList />
  </div>
);

export default ScreensReciperList;