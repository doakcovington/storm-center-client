import React from 'react';
import {connect} from 'react-redux';

class CreateTutor extends React.Component {

  state = {
    name: '',
    speciality: '',
    phonenumber: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/><br></br>
          <label>Speciality:</label>
          <input type='text' placeholder='Speciality' value={this.state.speciality} name='speciality' onChange={this.handleChange}/><br></br>
          <label>Phone Number:</label>
          <input type='text' placeholder='555-555-5555' value={this.state.phonenumber} name='phonenumber' onChange={this.handleChange}/><br></br>
          <label>Email:</label>
          <input type='text' placeholder='tutor@email.com' value={this.state.email} name='email' onChange={this.handleChange}/><br></br>
        </form>
      </div>
    )
  }
}

export default connect(null)(CreateTutor);