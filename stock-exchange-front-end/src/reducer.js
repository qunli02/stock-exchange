const defaultState = {
  user: null,
  tickerPrice: {}
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "USER":
      return {...prevState, user: action.data}
    case "BUY":
      let leftOverMoney = Math.round((prevState.user.money - (action.data.price * action.data.qty)) * 100)/100

      if(leftOverMoney > 0){
        let long = prevState.user.stocks.length
        let tickerSymbol = action.data.ticker
        action.data.ticker = null
        if(!prevState.tickerPrice[tickerSymbol]){
          fetch('http://localhost:4000/api/v1/userstocks', {
            method: 'POST',
            headers: {
              "Authorization": localStorage.token,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              ticker: tickerSymbol,
              money: leftOverMoney,
              qty: action.data.qty,
              stock_price: action.data.price
            })
          })
          let id;
          if(!prevState.user.stocks[0]){
           id = 5000
          }else{
           id = prevState.user.stocks[prevState.user.stocks.length-1].id + 1
          }

          return {...prevState,
            user: {
              ...prevState.user,
              money: leftOverMoney,
              stocks: [
                ...prevState.user.stocks,

                  {
                    name:action.data.ticker,
                    id: id
                  }

              ],
              userstocks:[
                ...prevState.user.userstocks,
                {
                    amount:action.data.qty,
                    stock_id: id,
                    money: action.data.price

                }
              ]
            },
            tickerPrice:{
              ...prevState.tickerPrice,
              [tickerSymbol]:action.data
            }
          }
        }else{
          fetch('http://localhost:4000/api/v1/userstocks/', {
            method: 'POST',
            headers: {
              "Authorization": localStorage.token,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              ticker: tickerSymbol,
              money: leftOverMoney,
              qty: action.data.qty,
              stock_price: action.data.price
            })
          })
          return {...prevState,
            user: {
              ...prevState.user,
              money: leftOverMoney,
              stocks: [
                ...prevState.user.stocks,
                {
                  name:action.data.ticker
                }
              ],
              userstocks:[
                ...prevState.user.userstocks,
                { amount:action.data.qty}
              ]
            },
            tickerPrice:{
              ...prevState.tickerPrice,
              [tickerSymbol]:{
                ...prevState.tickerPrice[tickerSymbol],
                qty: prevState.tickerPrice[tickerSymbol].qty + action.data.qty
              }
            }
          }
        }
      }else{
        alert("not enought money")
      }
    case "CREATESTOCK":
      let tickerSymbol = Object.keys(action.data)[0]
      if (prevState.tickerPrice[tickerSymbol]){
        let qty = prevState.tickerPrice[tickerSymbol].qty + action.data[tickerSymbol].qty
        return {...prevState, tickerPrice: {...prevState.tickerPrice, ...action.data, [tickerSymbol]:{...prevState.tickerPrice[tickerSymbol],qty:qty}}}
      }else{
        return {...prevState, tickerPrice: {...prevState.tickerPrice, ...action.data}}
      }
    case "SIGNOUT":
      return defaultState
    case "EmptyTickerPrice":
      return {...prevState, tickerPrice: {}}
    default:
      return prevState
  }

}

export default reducer
