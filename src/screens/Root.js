import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import ScreensRecipeList from './Recipe/List'
import ScreensRecipeForm from './Recipe/Form';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route path="/recipe/list" component={ScreensRecipeList} />
      <Route path="/recipe/create" component={ScreensRecipeForm} />
    </Switch>
  </Router>
);

export default ScreensRoot;