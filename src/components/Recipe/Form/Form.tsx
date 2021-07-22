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
  const [inputFields, setInputFields] = useState([{ name: '' }]);

  const history = useHistory();

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...inputFields];
    values[index].name = event.target.value;

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ name: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    let payload: Recipe = {
      name: name,
      description: description,
      ingredients: inputFields
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
          <FormGroup>
            <Label htmlFor="ingredients">Ingredients</Label>
            {inputFields.map((inputField, index) => (
              <div key={`${inputField}~${index}`}>
                  <Label htmlFor="name">Ingredient #{index+1}</Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={inputField.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
                  />
                <span>
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-link"
                    type="button"
                    onClick={() => handleAddFields()}
                  >
                    +
                  </button>
                </span>
              </div>
            ))}
          </FormGroup>
          <pre>
            {JSON.stringify(inputFields, null, 2)}
          </pre>
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
