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

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <ScreensHome />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
