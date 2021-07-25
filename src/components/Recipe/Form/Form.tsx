import React, { ReactElement, useState } from 'react';
import useInputState from './useInputState'
import { useForm, SubmitHandler } from "react-hook-form";

// @ts-ignore
import { Link, useHistory } from 'react-router-dom'

import { createRecipe, updateRecipe } from '../../../data/recipes/api';
import { Button, ButtonSubmit } from '../../../styled'
import { FormGroup, Label, LabelIngredient, Input, ErrorMessage } from './styled'

import { Recipe } from '../../../data/recipes/types'

interface Props {
  initialRecipe?: Recipe;
  initialId?: number;
}

interface RecipeFormValues {
  name: string;
  description: string;
  ingredients: string[];
}

function Form({
  initialRecipe = { name: '', description: '', ingredients: [{ name: '' }] },
  initialId = 0
}: Props): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<RecipeFormValues>();
  const[name, updateName] = useInputState(initialRecipe?.name || '');
  const[description, updateDescription] = useInputState(initialRecipe?.description || '');
  const [ingredients, setIngredients] = useState(initialRecipe?.ingredients || [{ name: '' }]);

  const history = useHistory();

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...ingredients];
    values[index].name = event.target.value;

    setIngredients(values);
  };

  const onSubmit: SubmitHandler<RecipeFormValues> = async (data) => {
    
    let payload: Recipe = {
      name: name,
      description: description,
      ingredients: ingredients
    }
    initialId ? await updateRecipe(initialId, payload): await createRecipe(payload);
    history.push('/recipes');
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

  return (
    <div>
      <h1>Create a new Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
                type='text'
                {...register("name", { required: true, maxLength: 200 })}
                name='name'
                placeholder='Name'
                data-testid="recipe-name-input"
                value={ name }
                onChange={ updateName }
            />
          </FormGroup>
          <ErrorMessage>{errors.name && <span>This field is required and max length is 200</span>}</ErrorMessage>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input 
                type='text'
                {...register("description", { required: true, maxLength: 200 })}
                name='description'
                placeholder='Description'
                data-testid="recipe-description-input"
                value={ description }
                onChange={ updateDescription }
            />
          </FormGroup>
          <ErrorMessage>{errors.description && <span>This field is required and max length is 200</span>}</ErrorMessage>
          <FormGroup>
            <Label htmlFor="ingredients">Ingredients</Label>
            {ingredients.map((inputField, index) => (
              <div key={`${inputField}~${index}`}>
                  <LabelIngredient htmlFor="name">Ingredient #{index+1}</LabelIngredient>
                  <Input
                    type="text"
                    id={`ingredients[${index}]`}
                    {...register(`ingredients.${index}`, { required: true, maxLength: 200 })}
                    placeholder={`Ingredient #${index+1}`}
                    data-testid={`recipe-ingredient-${index+1}-input`}
                    value={inputField.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
                  />
                <span>
                <ErrorMessage>{errors.ingredients?.length && errors.ingredients[index] && <span>This field is required and max length is 200</span>}</ErrorMessage>
                  <button
                    type="button"
                    onClick={() => handleRemoveFields(index)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-testid={`recipe-add-ingredient-${index+1}-button`}
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
