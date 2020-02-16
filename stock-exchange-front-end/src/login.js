import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"


class Login extends React.Component {

  handlelogin = (e) => {
    let email = e.target[0].value
    let password = e.target[1].value
    fetch(`http://localhost:4000/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(r=>r.json())
    .then(data=> {
      if(data.error){
        alert(data.error)
      }else{
        localStorage.setItem("token",data.jwt)
        this.props.handleuser(data.user)
      }
    })
  }

  render(){
    if (this.props.user){
      return(
        <Redirect to="/portfolio" />
      )
    }else{
      return (
        <div className= "login">
          <form onSubmit={(e)=>{
              e.preventDefault();
              this.handlelogin(e)
            }}>
            <h1>Sign in</h1>
            <label>
              E-mail:
              <input type="text" name="email"/>
            </label>
            <br/>
            <label>
              password:
              <input type="text" name="password"/>
            </label>
            <input type="submit" value="Sign in" />
          </form>
        </div>
      );
    }
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

export default connect(msp,mdp)(Login);
