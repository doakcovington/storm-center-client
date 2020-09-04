import React from 'react';

class CreateEvent extends React.Component {
  state = {
    name: '',
    description: '',
    date: '',
    location: '',
    spaces: '',
    tutor: '1' //sets tutor to first in select option
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Event Name:</label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br></br>
          <label>Event Description:</label>
          <input type='text' placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/><br></br>
          <label>Event Date:</label>
          <input type='date' name='date' value={this.state.date} onChange={this.handleChange}/><br></br>
          <label>Event Location/Link:</label>
          <input type='text' placeholder='url...' value={this.state.location} name='location' onChange={this.handleChange}/><br></br>
          <label>Event Spaces:</label>
          <input type='number' placeholder='5' value={this.state.number} name='spaces' onChange={this.handleChange}/><br></br>
          <label>Event Tutor:</label>
          <select id='tutor' name='tutor' value={this.state.tutor} onChange={this.handleChange}>
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