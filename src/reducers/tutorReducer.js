export default function tutorReducer(state = {tutors: []}, action) {
  switch(action.type) {
    case 'GET_TUTORS':
      return {
        tutors: action.payload
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