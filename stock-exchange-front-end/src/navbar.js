import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"
import './navbar.css';


class Navbar extends React.Component {
  signout = () => {
    localStorage.token = null;
    this.props.removeUser();
  }

  handlePortfolio = () =>{
    if (!this.props.user){
      alert("Please sign in to view your protfolio")
    }
  }
  handleTransaction = () =>{
    if (!this.props.user){
      alert("Please sign in to view your transactions")
    }
  }

  render(){
    return(
      <ul>
      <li><Link to="/portfolio" onClick={this.handlePortfolio} >Portfolio</Link></li>
      <li><Link to="/transactions" onClick={this.handleTransaction}>Transactions</Link></li>

      {
        this.props.user
          ? <li style={{float:"right"}}>
              <Link to="/login" onClick={() => this.signout() }>
                Sign Out
              </Link>
            </li>
        : (
          <>
            <li style={{float:"right"}}><Link to="/login" >Sign In</Link></li>
            <li style={{float:"right"}}><Link to="/register">Register</Link></li>
          </>
        )
      }
    </ul>
    )
  }
}


function msp(state){
  return{
    user: state.user
  }
}

function mdp(dispatch){
  return {
    removeUser: () =>{
      dispatch({ type: "SIGNOUT" })
    }
  }
}

export default connect(msp,mdp)(Navbar);
