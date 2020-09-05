export const addEvent = (formData) => {
  return (dispatch) => {
    fetch('http://localhost:5000/api/v1/events', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(event => dispatch({type: 'ADD_EVENT', payload: event.data}))
  }
}

