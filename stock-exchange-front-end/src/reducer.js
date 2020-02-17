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
      // if(leftOverMoney > 0){
        // fetch('http://localhost:4000/api/v1/userstocks', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //     "Authorization": localStorage.token
        //   },
        //   body: JSON.stringify({
        //     ticker: action.data.ticker,
        //     money: leftOverMoney,
        //     qty: action.data.qty
        //   })
        // })
      //   let newState = {...prevState}
      //   let tickerSymbol = action.data.ticker
      //   debugger
      //   action.data.ticker = null
      //   newState.user.stocks.push({name: tickerSymbol})
      //   if (!newState.tickerPrice[tickerSymbol]){
      //     newState.tickerPrice[tickerSymbol] = action.data
      //   }else{
      //     newState.tickerPrice[tickerSymbol].qty += parseInt(action.data.qty)
      //   }
      //   debugger
      //   return newState
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
          return {...prevState,
            user: {
              ...prevState.user,
              money: leftOverMoney,
              stocks: [
                ...prevState.user.stocks,
                {long: {name:action.data.ticker}}
              ],
              userstocks:[
                ...prevState.user.userstocks,
                { [tickerSymbol]: {amount:action.data.qty} }
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
                  long: {name:action.data.ticker}
                }
              ],
              userstocks:[
                ...prevState.user.userstocks,
                {[tickerSymbol]: {amount:action.data.qty}}
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
