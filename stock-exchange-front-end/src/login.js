import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";

class Login extends React.Component {

  render(){
    return (
      <div className= "login">
        <form onSubmit={(e)=>{
              e.preventDefault();
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

export default Login;
