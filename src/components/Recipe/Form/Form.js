import React, { Component } from 'react';
import { Title, Wrapper } from './styled'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    console.log("submit");
    console.log('title: ', this.state.title);
    console.log('description: ', this.state.description);
    this.setState({ title: '', description: ''});
  }
  render() {
    return (
      <div>
        <h1>Create a new Recipe</h1>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={ this.state.title }
          onChange={ this.handleChange }
        >
        </input>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          name='description'
          value={ this.state.description }
          onChange={ this.handleChange }
        >
        </input>
        <button onClick={ this.handleSubmit }>Submit</button>
      </div>
    );
  }
}

export default Form;
