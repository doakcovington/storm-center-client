export const addTutor = (tutorData) => {
  return (dispatch) => {
    fetch('http://localhost:5000/api/v1/tutors', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(tutorData)
    })
    .then(response => response.json())
    .then(tutor => dispatch({type: 'ADD_TUTOR', payload: tutor.data}))
  }
}