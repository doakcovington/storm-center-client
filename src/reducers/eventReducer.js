export default function eventReducer(state = {events: []}, action) { //default state is an empty array of events
  switch (action.type) {
    case 'FETCH_EVENTS':
      return {events: action.payload}
    default:
      return state
  }
}