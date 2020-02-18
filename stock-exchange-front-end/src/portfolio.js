import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux"
import "./portfolio.css"
import { KEY } from "./keys.js"

class Portfolio extends React.Component {
  state = {
    stocksShown: 0,
    uniqueStockIds: new Map()
  }

  componentDidMount() {
    this.props.handlEmptyTickerPrice()
    this.fetchNextStockData()
  }

  addStock = (stockTicker) => {
    this.state.uniqueStockIds.has(stockTicker) &&
    this.setState({
      stocksShown: this.state.stocksShown + 1
    })
  }

  updateUniqueStocks = () => {
    if (this.props.user) {
    const {
      userstocks = {},
      stocks = {}
    } = this.props.user
    const uniqueStockIds = new Map()
    userstocks.forEach((userstock, index) => {
            let id = userstock.stock_id
            if (uniqueStockIds.has(id)) {
              uniqueStockIds.set(id, uniqueStockIds.get(id) + userstock.amount)
            } else {
              uniqueStockIds.set(id, userstock.amount)
            }
          })
    this.setState({
      uniqueStockIds
    })
    return uniqueStockIds;
    }
  }

  fetchNextStockData = () => {
    const { user, handleCreateStock } = this.props
    const { stocksShown } = this.state
    if (user) {
      const {
        userstocks = {},
        stocks = {}
      } = user

      const uniqueStockIds = this.updateUniqueStocks()

      let index = 0
      uniqueStockIds.forEach((qty, userstockId) => {
        if (index >= stocksShown && index < stocksShown + 3) {
          const name = stocks.find(stock => stock.id === userstockId).name
          fetch(`https://cloud.iexapis.com/stable/stock/${name}/intraday-prices?token=${KEY}`)
          .then((resp) => resp.json())
          .then((data) => {
            let validPoints = data.filter(point => {
               return point.open != null
            })
             let open = validPoints[0].open
             let value = validPoints[validPoints.length-1].close
             let color;
             if (open > value){
               color = "red"
             }else if (open == value) {
               color = "gray"
             }else{
               color = "green"
             }
             let stockHash = {}
              stockHash[name] = {qty: qty, price: value, color: color}
             handleCreateStock(stockHash)
          })
        }
        index++
      })
      this.setState({
        stocksShown: stocksShown + 3
      })
    }

  }

  render(){

    console.log(this.props);
    const { tickerPrice, user, handlebuy } = this.props
    const { uniqueStockIds, stocksShown } = this.state

    if (user) {
      return (
        <div className="portfolio">
          <div>
            <h1>porfolio</h1>
              Cash:${user.money}
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  handlebuy(e.target[0].value, parseInt(e.target[1].value), this.addStock)
              }}>
                <label>
                  Ticker:
                  <input type="text" name="ticker" required/>
                </label>
                <br/>
                <label>
                  QTY:
                  <input type="number" min ="1" step="1" name="qty" required minLength="1"/>
                </label>
                <br/>
                <input type="submit" value="Buy" />
              </form>
          </div>
            {
              Object.keys(tickerPrice).length > 0 && Object.keys(tickerPrice).map(name => {
                return (
                  <div key={name}>
                    <p>{name.toUpperCase()}</p>
                    <p>QTY:{tickerPrice[name].qty}</p>
                    <p style={{color: tickerPrice[name].color}}>
                      ${parseFloat(tickerPrice[name].price * tickerPrice[name].qty).toFixed(2)}
                    </p>
                  </div>
                )
              })
            }
            {
              stocksShown < uniqueStockIds.size && (
                <button onClick={this.fetchNextStockData}>Show more</button>
              )
            }
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
    user: state.user,
    tickerPrice: state.tickerPrice
  }
}

function mdp(dispatch){
  return{
    handlebuy: (ticker, qty, addStock) => {

      fetch(`https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices?token=${KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let validPoints = data.filter(point => {
           return point.open != null
        })
         let open = validPoints[0].open
         let price = validPoints[validPoints.length-1].close
         let color;
         if (open > price){
           color = "red"
         }else if (open == price) {
           color = "gray"
         }else{
           color = "green"
         }
         addStock && addStock()
        dispatch({type: "BUY", data: {ticker, price, qty, color}})
      })
      .catch((err) => {
        alert("Please input valid ticker");
      });
    },

    handleCreateStock: (stockHash) =>{
      dispatch({type: "CREATESTOCK", data: stockHash})
    },
    handleQty: (name,qty) =>{
      dispatch({type: "QTY", data: {name, qty}})
    },
    handlEmptyTickerPrice: () =>{
      dispatch({type: "EmptyTickerPrice"})
    },
  }
}

export default connect(msp,mdp)(Portfolio);
