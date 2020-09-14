import React from 'react';
import {connect} from 'react-redux';
import {deleteTutor} from '../actions/deleteTutor'
import Button from 'react-bootstrap/Button';

const Tutors = (props) => {
  
  const handleDelete = (tutorData) => {
    props.deleteTutor(tutorData)
  }

  return (
    <div>
      {
        props.tutors.map(tutor => 
          <div key={tutor.id}>
          <h3>{tutor.attributes.name}</h3>
            <p>{tutor.attributes.speciality}</p>
            <p>{tutor.attributes.phonenumber}</p>
            <p>{tutor.attributes.email}</p>
          <p><Button variant="danger" onClick={() => handleDelete(tutor.id)}>Delete</Button> </p>
          </div>)
      }
    </div>
  )
}

export default connect(null, {deleteTutor})(Tutors);