import React, { useState } from 'react';
import useInputState from './useInputState'

import { Title, Wrapper } from './styled'

function Form() {
  const[name, updateName, resetName] = useInputState('');
  const[description, updateDescription, resetDescription] = useInputState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Will create: ", name)
    console.log("Will create: ", description)
    resetName();
    resetDescription();
  }

  return (
    <div>
      <h1>Create a new Recipe</h1>
        <form onSubmit={ handleSubmit }>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={ name }
          onChange={ updateName }
        >
        </input>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          value={ description }
          onChange={ updateDescription }
        >
        </input>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default Form;
