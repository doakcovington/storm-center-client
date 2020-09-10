const defaultState = {
  tutors: []
}

export default function tutorReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_TUTORS':
      return {
        ...state,
        events: action.payload
      }
    case 'ADD_TUTOR':
      return {
        ...state,
        tutors: [...state.tutors, action.payload]
      }
    default:
      return state
  }
}