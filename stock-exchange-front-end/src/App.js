import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import Login from './login.js';
import Register from './register.js';
import Portfolio from './portfolio.js';
import Transactions from './transactions.js';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path="/login" render={()=><Login/>} />
            <Route exact path="/register" render={()=><Register/>} />
            <Route exact path="/portfolio" render={()=><Portfolio/>} />
            <Route exact path="/transactions" render={()=><Transactions/>} />
          </Switch>
      </div>
    );
  }
}

export default App;
