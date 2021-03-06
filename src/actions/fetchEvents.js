export function fetchEvents() {
  return (dispatch) => {
    fetch('http://localhost:5000/api/v1/events')
    .then(response => response.json())
    .then(events =>  dispatch({
      type: 'FETCH_EVENTS',
      payload: events.data
    }))
  }
}