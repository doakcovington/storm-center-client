import React from 'react';

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

export default Tutors;