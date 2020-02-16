const defaultState = {
  user:null,
  }

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "USER":
      return {...prevState, user: action.data}
    case "BUY":
      let leftOverMoney = Math.round((prevState.user.money - (action.data.value * action.data.qty)) * 100)/100
      if(leftOverMoney > 0){
        fetch('http://localhost:4000/api/v1/userstocks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            "Authorization": localStorage.token
          },
          body: JSON.stringify({
            ticker: action.data.ticker,
            money: leftOverMoney,
            qty: action.data.qty
          })
        })
        let long = prevState.user.stocks.length
        return {...prevState, user: {...prevState.user,money: leftOverMoney, stocks: {...prevState.user.stocks, long: {name:action.data.ticker},userstocks:{...prevState.user.userstocks,long: {amount:action.data.qty}}}}}
      }else{
        alert("not enought money")
      }
    default:
      return prevState
  }

}

export default reducer
