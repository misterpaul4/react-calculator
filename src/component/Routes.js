import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Homepage from './Homepage';
import Quote from './Quote';
import Nav from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/" component={App} />
      <Route exact path="/homepage" component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
