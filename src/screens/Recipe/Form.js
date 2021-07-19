import React from 'react';
import RecipeForm from '../../components/Recipe/Form/Form';


function ScreensRecipeForm() {
  return (
    <div>
      <h2>Form</h2>
      <RecipeForm />
    </div>
  );
}

export default ScreensRecipeForm;

// const ScreensReciperForm = ({ match: { params } }) => (
//   <div>
//     <h1>
//       {`${!params.id ? 'Create' : 'Update'}`} Recipe
//     </h1>
//     <RecipeForm id={params.id} />
//   </div>
// );

// export default ScreensReciperForm;