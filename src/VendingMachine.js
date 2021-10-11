import React from 'react';
import Soda from './Soda';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Chips from './Chips';

const VendingMachine = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/soda" component={Soda} />
        <Route exact path="/chips" component={Chips} />
      </Router>
    </>
  );
};

export default VendingMachine;
