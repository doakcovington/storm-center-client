const defaultState = {
  events: []
}

export default function eventReducer(state = defaultState, action) { //default state is an empty array of events
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {...state, events: action.payload}
    case 'ADD_EVENT': //DETAILS DETAILS DETAILS (Had 'ADD_EVENTS'. Removed the 'S' to fix the page refresh bug)
      return {
        ...state, 
        events: [...state.events, action.payload]
      } //adds the event to the state
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
