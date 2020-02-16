const defaultState = {
  user:null,
  }

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "USER":
      return {...prevState, user: action.data.user}
      case "BUY":
        if(prevState.user.money - action.data.cost > 0){
          let leftOverMoney = prevState.user.money - action.data.cost
          return {...prevState, user: {...prevState.user, money:leftOverMoney}}
        }else{
          alert("not enought money")
        }
    default:
      return prevState
  }

}

export default reducer
