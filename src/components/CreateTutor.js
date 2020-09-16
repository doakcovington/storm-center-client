import React from 'react';
import {connect} from 'react-redux';
import {addTutor} from '../actions/addTutor';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateTutor extends React.Component {

  state = {
    name: '',
    speciality: '',
    phonenumber: '',
    email: '',
    redirectToTutors: false,

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTutor(this.state);
    this.setState({ //clears form input fields after submit
      name: '',
      speciality: '',
      phonenumber: '',
      email: '',
      redirectToTutors: true
    });
  }

  render() {
  //redirects user to home page after submitting the form
    const redirectToTutors = this.state.redirectToTutors;
    if (redirectToTutors === true) {
      return <Redirect to="/tutors/" /> // Redirect navigates to a new location
    }

    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label column lg={2}>Name: </Form.Label>
            <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label column lg={2}>Speciality: </Form.Label>
            <input type='text' placeholder='Speciality' value={this.state.speciality} name='speciality' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label column lg={2}>Phone Number: </Form.Label>
            <input type='text' placeholder='555-555-5555' value={this.state.phonenumber} name='phonenumber' onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label column lg={2}>Email: </Form.Label>
            <input type='text' placeholder='tutor@email.com' value={this.state.email} name='email' onChange={this.handleChange}/>
          </Form.Group>
          <Button type="button" onClick={this.handleSubmit}>Submit</Button>
        </Form>
    )
  }
}

export default connect(null, {addTutor})(CreateTutor);