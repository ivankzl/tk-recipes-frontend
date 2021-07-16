import React from 'react';
import RecipeForm from '../../components/Recipe/Form/Form';

const ScreensReciperForm = ({ match: { params } }) => (
  <div>
    <h1>
      {`${!params.id ? 'Create' : 'Update'}`} Recipe
    </h1>
    <RecipeForm id={params.id} />
  </div>
);

export default ScreensReciperForm;