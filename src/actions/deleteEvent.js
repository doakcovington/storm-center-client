export const deleteEvent = (eventId) => {
  return dispatch => {
    return fetch(`http://localhost:5000/api/v1/events/${eventId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(event => dispatch({
      type: 'DELETE_EVENT',
      payload: event.data
    }))
  }
}