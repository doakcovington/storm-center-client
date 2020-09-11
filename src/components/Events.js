import React from 'react';
import Event from './Event';
import {connect} from 'react-redux';
import {deleteEvent} from '../actions/deleteEvent';

const Events = (props) => {
  
  const handleDelete = (eventData) => {
    props.deleteEvent(eventData) //event data sends the id
  }

  return (
    <div>
     {
      props.events.map(event => <div key={event.id}><Event event={event}/>
      <button onClick={() => handleDelete(event.id)}>Delete</button>
      </div>)
     }
    </div>
  )
}

export default connect(null, {deleteEvent})(Events);