import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"
import './App.css';
import Login from './login.js';
import Register from './register.js';
import Portfolio from './portfolio.js';
import Transactions from './transactions.js';
import Navbar from "./navbar.js";

class App extends React.Component {

  // #key: PGCTGCH5CPIW97F9
  componentDidMount(){
    const token = localStorage.token
    if(token){
      fetch(`/api/v1/profile`,{
        headers: {
          "Authorization": token
        }
      })
      .then(r => r.json())
      .then(data => {
        this.props.handleuser(data.user)
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/login" render={()=><Login/>} />
            <Route exact path="/register" render={()=><Register/>} />
            <Route exact path="/portfolio" render={()=><Portfolio/>} />
            <Route exact path="/transactions" render={()=><Transactions/>} />
            <Redirect from='*' to='/login'/>
          </Switch>
      </div>
    );
  }
}

function msp(state){
  return{
    user: state.user
  }
}

function mdp(dispatch){
  return{
    handleuser: (user) => {
    dispatch({type: "USER", data: user})
    }
  }
}

export default connect(msp,mdp)(App);
