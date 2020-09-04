import React from 'react';

class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Event Name:</label>
          <input type='text' placeholder='Name'/>
          <label>Event Description:</label>
          <input type='text' placeholder='Description'/>
          <label>Event Date:</label>
          <input type='date' />
          <label>Event Location/Link:</label>
          <input type='text' placeholder='url...'/>
          <label>Event Spaces:</label>
          <input type='number' placeholder='5'/>
          <label>Event Tutor:</label>
          <select id='tutors' name='tutors'>
            <option value='1'>Doak</option>
            <option value='2'>Heidi</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateEvent;