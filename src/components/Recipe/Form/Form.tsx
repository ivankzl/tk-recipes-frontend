import React, { ReactElement, useState } from 'react';
import useInputState from './useInputState'

// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

import { createRecipe } from '../../../data/recipes/api';
import { Button, ButtonSubmit } from '../../../styled'
import { FormGroup, Label, Input } from './styled'

import { Recipe } from '../../../data/recipes/types'

interface Props {
  recipe?: Recipe;
}


function Form(): ReactElement {
  const[name, updateName, resetName] = useInputState('');
  const[description, updateDescription, resetDescription] = useInputState('');
  const history = useHistory();

  const handleSubmit = async (evt: React.FormEvent) => {
    console.log("handlesubmit")
    evt.preventDefault();
    console.log("Will create: ", name)
    console.log("Will create: ", description)
    let payload: Recipe = {
      name: name,
      description: description,
      ingredients: []
    }
    const response = await createRecipe(payload)

    resetName();
    resetDescription();
    history.push('/recipes')
  }

  return (
    <div>
      <h1>Create a new Recipe</h1>
        <form onSubmit={ handleSubmit }>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
                type='text'
                name='name'
                value={ name }
                onChange={ updateName }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input 
                type='text'
                name='description'
                value={ description }
                onChange={ updateDescription }
            />
          </FormGroup>
          <ButtonSubmit type="submit">
                  Submit
          </ButtonSubmit>
          <Link to={'/recipes'}>
            <Button type="Button">
                  Back
            </Button>
          </Link>
      </form>
    </div>
  );
}

export default Form;
