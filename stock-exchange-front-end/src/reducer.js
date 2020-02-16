const defaultState = {
  user:null,
  }

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "USER":
      return {...prevState, user: action.data.user}
      case "BUY":
      debugger
        let leftOverMoney = Math.round((prevState.user.money - action.data.value) * 100)/100
        if(leftOverMoney > 0){
          return {...prevState, user: {...prevState.user, money:leftOverMoney}}
        }else{
          alert("not enought money")
        }
    default:
      return prevState
  }

}

export default reducer
