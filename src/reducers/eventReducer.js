const defaultState = {
  events: []
}

export default function eventReducer(state = defaultState, action) { 
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {...state, events: action.payload}
    case 'ADD_EVENT':
      return {
        ...state, 
        events: [...state.events, action.payload]
      }
    case 'DELETE_EVENT':
      const events = state.events.filter(event => event.id !== action.event.id.toString()) //event.id is a string (look at changing this)
      return {
        ...state,
        events: events
      }
    default:
      return state
  }
}
