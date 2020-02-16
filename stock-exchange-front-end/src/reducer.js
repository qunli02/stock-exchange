const defaultState = {
  user:null,
  }

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "USER":
      return {...prevState, user: action.data.user}
      case "BUY":
        debugger
        return {...prevState}
    default:
      return prevState
  }

}

export default reducer
