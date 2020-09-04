import React from 'react';

class CreateEvent extends React.Component {

  state = {
    name: '',
    description: '',
    date: '',
    location: '',
    spaces: '',
    tutor: ''
  }

  render() {
    return (
      <div>
        <form>
          <label>Event Name:</label>
          <input type='text' placeholder='Name' value={this.state.name}/><br></br>
          <label>Event Description:</label>
          <input type='text' placeholder='Description' value={this.state.description}/><br></br>
          <label>Event Date:</label>
          <input type='date' value={this.state.date}/><br></br>
          <label>Event Location/Link:</label>
          <input type='text' placeholder='url...' value={this.state.location}/><br></br>
          <label>Event Spaces:</label>
          <input type='number' placeholder='5' value={this.state.number}/><br></br>
          <label>Event Tutor:</label>
          <select id='tutors' name='tutors' value={this.state.tutor}>
            <option value='1'>Doak</option>
            <option value='2'>Heidi</option>
          </select><br></br>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateEvent;