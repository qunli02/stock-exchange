import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"


class Portfolio extends React.Component {




  render(){
    if(this.props.user) {
      return (
        <div className="portfolio">
          <h1>porfolio</h1>
            Cash:${this.props.user.money}
            <form onSubmit={(e)=>{
                e.preventDefault();
                this.props.handlebuy(e.target[0].value, e.target[1].value)
            }}>
              <label>
                Ticker:
                <input type="text" name="ticker"/>
              </label>
              <br/>
              <label>
                QTY:
                <input type="number" min ="0" step="1" name="qty"/>
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
    handlebuy: (ticker,qty) => {
      fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=PGCTGCH5CPIW97F9`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let value = qty * parseFloat(Object.values(data["Time Series (5min)"])[0]["4. close"])
        dispatch({type: "BUY", data: {ticker, value}})
      });
    }
  }
}

export default connect(msp,mdp)(Portfolio);
