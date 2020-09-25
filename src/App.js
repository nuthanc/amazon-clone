import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>This is the checkout page</h1>
        </Route>
        <Route path="/login">
          <h1>This is the login page</h1>
        </Route>
        <Route path="/">
          <Header />
          <h1>Let's build an Amazon CLONE WITH React JS</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
