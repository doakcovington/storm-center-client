import React from 'react';
import {connect} from 'react-redux';
import {deleteEvent} from '../actions/deleteEvent';

const Event = (props) => {

  const handleDelete = () => {

  }

  return (
    <div key={props.event.id}>
     <h2>{props.event.attributes.name}</h2>
     <h3>{props.event.attributes.date}</h3>
     <p>{props.event.attributes.description}</p>
     <p>Tutor: {props.event.attributes.tutor.name}</p>
     <p>Location: {props.event.attributes.location}</p>
     <p>Spaces Left: {props.event.attributes.spaces}</p>
     <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default connect(null, {deleteEvent})(Event);
