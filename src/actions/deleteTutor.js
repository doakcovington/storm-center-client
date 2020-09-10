export const deleteTutor = (tutorId) => {
  return dispatch => {
    return fetch(`http://localhost:5000/api/v1/tutors${tutorId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(tutor => dispatch({
      type: 'DELETE_TUTOR',
      tutor
    }))
  }
}