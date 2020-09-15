import React from 'react';
import {connect} from 'react-redux';
import {addEvent} from '../actions/addEvent';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class CreateEvent extends React.Component {
  state = {
    name: '',
    description: '',
    date: '',
    location: '',
    spaces: '',
    tutor_id: '1', //sets tutor to first in select option
    redirectToHome: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEvent(this.state);
    this.setState({ //clears form input fields after submit
      name: '',
      description: '',
      date: '',
      location: '',
      spaces: '',
      tutor_id: '1', //sets tutor to first in select option
      redirectToHome: true 
    });
  }

  render() {
    //redirects user to home page after submitting the form
    const redirectToHome = this.state.redirectToHome;
    if (redirectToHome === true) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <select id='tutor_id' name='tutor_id' value={this.state.tutor_id} onChange={this.handleChange}>
            <option value='1'>Doak</option>
            <option value='2'>Heidi</option>
            <option value='3'>John</option>
          </select><br></br>
          <Button variant="primary" onClick={this.handleSubmit}>Add Event</Button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addEvent})(CreateEvent);