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
      let events = state.events.map(event => {
        if (event.id === action.payload.id) {
          return action.payload
        } else {
          return event
        }
      })
      return {
        ...state,
        events: events
      }
    default:
      return state
  }
}
