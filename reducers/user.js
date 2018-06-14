function user(state = false, action) {
  switch(action.type) {
    case 'SET_USER': {
      return {...action.payload}
    }
    case 'REMOVE_USER': {
      return false
    }
    default:
      return state
  }
}

export default user;
