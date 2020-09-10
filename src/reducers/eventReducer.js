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
    default:
      return state
  }
}
