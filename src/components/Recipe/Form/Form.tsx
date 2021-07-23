import React, { ReactElement, useState } from 'react';
import useInputState from './useInputState'

// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

import { createRecipe } from '../../../data/recipes/api';
import { Button, ButtonSubmit } from '../../../styled'
import { FormGroup, Label, LabelIngredient, Input, ErrorContainer } from './styled'

import { Recipe } from '../../../data/recipes/types'
import RecipeSearch from '../../RecipeSearch';

interface Props {
  recipe?: Recipe;
}

function Form(): ReactElement {
  const[name, updateName, resetName] = useInputState('');
  const[description, updateDescription, resetDescription] = useInputState('');
  const [ingredients, setIngredients] = useState([{ name: '' }]);
  const [errors, setErrors] = useState<string[]>([]);

  const history = useHistory();

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...ingredients];
    values[index].name = event.target.value;

    setIngredients(values);
  };

  const handleValidation = () => {
    setErrors([]);
    if (!name){
      setErrors(errors => [...errors, 'Name cannot be empty']);
    }
    if (!description){
      setErrors(errors => [...errors, 'Description cannot be empty']);
    }
    if (!ingredients || ingredients.some(i => !i.name)){
      setErrors(errors => [...errors, 'Ingredients must be at leas 1 and all must contain name']);
    }
  };

  const handleAddFields = () => {
    const values = [...ingredients];
    values.push({ name: '' });
    setIngredients(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    handleValidation();
    let payload: Recipe = {
      name: name,
      description: description,
      ingredients: ingredients
    }
    if (errors.length == 0){
      const response = await createRecipe(payload)

      resetName();
      resetDescription();
      history.push('/recipes')
    }
  }

  return (
    <div>
      <h1>Create a new Recipe</h1>
        { errors.length > 0 && 
          <ErrorContainer>
            Please correct the following errors:
            <ul>
              {errors.map(function(e, k) {
                return(<li key={k}>{e}</li>)
              })}
            </ul>
          </ErrorContainer> 
        }
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
            {ingredients.map((inputField, index) => (
              <div key={`${inputField}~${index}`}>
                  <LabelIngredient htmlFor="name">Ingredient #{index+1}</LabelIngredient>
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
