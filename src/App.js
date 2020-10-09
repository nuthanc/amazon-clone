import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>This is the checkout page</h1>
        </Route>
        <Route path="/login">
          <h1>This is the login page</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
