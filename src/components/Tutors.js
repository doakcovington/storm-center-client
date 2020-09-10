import React from 'react';

const Tutors = (props) => {
  console.log(props)
  return (
    <div>
      {props.tutors.map(tutor => <div key={tutor.id}>{tutor.attributes.name}</div>)}
    </div>
  )
}

export default Tutors;