import React from 'react';
import {connect} from 'react-redux';
import {addEvent} from '../actions/addEvent';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

class CreateEvent extends React.Component {
  state = {
    name: '',
    description: '',
    date: '',
    location: '',
    spaces: '',
    time: '',
    icon_url: '',
    tutor_id: '1', //sets tutor to first in select option,
    admin_id: '1', 
    redirectToHome: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEvent(this.state);
    this.setState({ 
      name: '',
      description: '',
      date: '',
      location: '',
      spaces: '',
      time: '',
      icon_url: '',
      tutor_id: '1', //sets tutor to first in select option
      admin_id: '1',
      redirectToHome: true 
    });
  }

  render() {
    //Adds tutor as an option for tutor select in form
    const options = this.props.tutors.map(tutor => {
      return <option key={tutor.id} value={tutor.id}>{tutor.attributes.name}</option>
    });

    //redirects user to events page after submitting the form
    const redirectToHome = this.state.redirectToHome;
    if (redirectToHome === true) {
      return <Redirect to="/events/" />
    }
    return (
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formGroupEventName">
          <Form.Label column lg={2}>Event Name:</Form.Label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupDescription">
          <Form.Label column lg={2}>Event Description:</Form.Label>
          <input type='text' placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupDate">
          <Form.Label column lg={2}>Event Date:</Form.Label>
          <input type='date' name='date' value={this.state.date} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupTime">
          <Form.Label column lg={2}>Event Time:</Form.Label>
          <input type='text' name='time' value={this.state.time} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupIcon">
          <Form.Label column lg={2}>Icon:</Form.Label>
          <input type='text' name='icon_url' value={this.state.icon_url} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupLocation">
          <Form.Label column lg={2}>Event Location/Link:</Form.Label>
          <input type='text' placeholder='url...' value={this.state.location} name='location' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupSpaces">
          <Form.Label column lg={2}>Event Spaces:</Form.Label>
          <input type='number' placeholder='5' value={this.state.number} name='spaces' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formGroupTutor">
          <Form.Label column lg={2}>Event Tutor:</Form.Label>
            <select id='tutor_id' name='tutor_id' value={this.state.tutor_id} onChange={this.handleChange}>
             {options}
            </select>
        </Form.Group>
        <Form.Group>
            <Form.Label column lg={2}>Created By:</Form.Label>
              <select id='admin_id' value={this.state.admin_id} name='admin_id' onChange={this.handleChange}>
                <option value='1'>Heidi</option>
              </select>
        </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>Add Event</Button>
        </Form>
    );
  }
}

export default connect(null, {addEvent})(CreateEvent);