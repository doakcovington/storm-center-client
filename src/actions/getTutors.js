export function getTutors() {
  return (dispatch) => {
    fetch('http://localhost:5000/api/v1/tutors')
    .then(response => response.json())
    .then(tutors => dispatch({
      type: 'GET_TUTORS',
      payload: tutors.data
    }))
  }
}