import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"
import "./transactions.css"

class Transactions extends React.Component {

  render(){

    if (!this.props.user) {
      return (
        <Redirect to="/login" />
      )
    }

    console.log(this.props.user);
    return (
      <div className="transactions">
        <h1>transactions</h1>
          {
            this.props.user != null && this.props.user.userstocks.map(userstock => {
              let name = this.props.user.stocks.find(stock => stock.id == userstock.stock_id).name
              return (
                <div key={userstock.id}>
                  <p>BUY {name} --- {userstock.amount} share(s) @ ${userstock.money}</p>
                </div>
              )
            })
          }
      </div>
    );
  }
}

function msp(state){
  return{
    user: state.user,
    tickerPrice: state.tickerPrice
  }
}

function mdp(dispatch){
  return{
  }
}

export default connect(msp,mdp)(Transactions);
