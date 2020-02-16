import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"


class Register extends React.Component {

  handleregister = (e) => {
    let name = e.target[0].value
    let email = e.target[1].value
    let password = e.target[2].value

    fetch('http://localhost:4000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: name,
          password: password,
          email: email,
          money: 5000.00
        }
      })
    })
    .then(r => r.json())
    .then( data =>{
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
    }else {
      return (
        <div className="register">
          <form onSubmit={(e)=>{
              e.preventDefault();
              this.handleregister(e);
            }}>
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

export default connect(msp,mdp)(Register);
