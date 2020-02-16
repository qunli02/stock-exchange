import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"


class Portfolio extends React.Component {




  render(){
    if(this.props.user){
      return (
        <div className="portfolio">
          <h1>porfolio</h1>
            Cash:${this.props.user.money}
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.props.handlebuy(action.data.target[0].value, action.data.target[1].value)
            }}>
              <label>
                Ticker:
                <input type="text" name="ticker"/>
              </label>
              <br/>
              <label>
                QTY:
                <input type="text" name="qty"/>
              </label>
              <br/>
              <input type="submit" value="Buy" />
            </form>
        </div>
      );
    }
    else{
      return(
        <Redirect to="/login" />
      )
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
    handlebuy: (ticker,cost) => {
    dispatch({type: "BUY", data: ticker, cost})
    }
  }
}

export default connect(msp,mdp)(Portfolio);
