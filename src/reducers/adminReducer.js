const defaultState = {
  loggedIn: false,
  admin: {}
}

const adminReducer = (state = defaultState, action) => {
  switch(action.type) {
    case "SET_ADMIN":
      return {
        loggedIn: true,
        admin: {...action.payload}
      }
    case "LOG_OUT":
      localStorage.clear()
      return {
        loggedIn: false,
        admin: {}
      }
    default: return state
  }
}

export default adminReducer;