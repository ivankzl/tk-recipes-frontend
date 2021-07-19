import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ScreensHome from './screens/Home';
import AppHeader from './components/AppHeader/AppHeader';
import ScreensRecipeList from './screens/Recipe/List';
import ScreensRecipeForm from './screens/Recipe/Form';
import styled from 'styled-components';

const Main = styled.div`
  margin-top: 30px;
`;

export default function App() {
  return (
    <Router>
      <Main>
      <AppHeader />
        <Switch>
          <Route exact path="/">
            <ScreensHome />
          </Route>
          <Route path="/form">
            <ScreensRecipeList />
            <ScreensRecipeForm />
          </Route> */
        </Switch>
      </Main>
    </Router>
  );
}
