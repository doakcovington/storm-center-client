import React from 'react';
import {connect} from 'react-redux';
import {deleteTutor} from '../actions/deleteTutor'

const Tutors = (props) => {
  
  const handleDelete = (tutorData) => {
    props.deleteTutor(tutorData)
  }

  return (
    <div>
      {
        props.tutors.map(tutor => 
          <div key={tutor.id}>{tutor.attributes.name} <button onClick={() => handleDelete(tutor.id)}>Delete</button> 
          </div>)
      }
    </div>
  )
}

export default connect(null, {deleteTutor})(Tutors);