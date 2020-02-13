import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";

class Register extends React.Component {

  render(){
    return (
      <div className="register">
      <form>
        <h1>Register</h1>
        <label>
          Name:
          <input type="text" name="name"/>
        </label>
        <br/>
        <label>
          E-mail:
          <input type="text" name="email"/>
        </label>
        <br/>
        <label>
          password:
          <input type="text" name="password"/>
        </label>
        <input type="submit" value="Register" />
      </form>
      </div>
    );
  }
}

export default Register;
