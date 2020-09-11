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
    case 'DELETE_TUTOR':
      const tutors = state.tutors.filter(tutor => tutor.id !== action.tutor.id.toString())
      return {
        ...state,
        tutors: tutors
      }
    default:
      return state
  }
}