import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import ScreensHome from './screens/Home';
import AppHeader from './components/AppHeader/AppHeader';
import ScreensRecipeList from './screens/Recipe/List';
import ScreensRecipeCreate from './screens/Recipe/Create';
import ScreensRecipeDetail from './screens/Recipe/Detail';
import ScreensRecipeEdit from './screens/Recipe/Edit';
import ScreensAbout from './screens/About';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-top:2rem;
  padding: 1rem;
`;

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <ScreensHome />
          </Route>
          <Route exact path="/recipes">
            <ScreensRecipeList />
          </Route>
          <Route exact path="/recipes/new">
            <ScreensRecipeCreate />
          </Route>
          <Route exact path="/recipes/:id">
            <ScreensRecipeDetail />
          </Route>
          <Route exact path="/recipes/:id/edit">
            <ScreensRecipeEdit />
          </Route>
          <Route exact path="/about">
            <ScreensAbout />
          </Route>
          <Route render={() => <h1>ERROR NOT FOUND</h1>} />
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
