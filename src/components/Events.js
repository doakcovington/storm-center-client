import React from 'react';
import Event from './Event';
import {connect} from 'react-redux';
import {deleteEvent} from '../actions/deleteEvent';
import Button from 'react-bootstrap/Button';
import { CardDeck } from 'react-bootstrap';

const Events = (props) =>  {
  
  const handleDelete = (eventData) => {
    props.deleteEvent(eventData) //event data sends the id
  }

  return (
    <div>
      <h2>Upcoming Events:</h2>
      <CardDeck>
    {
      props.events.map(event => <iv key={event.id}><Event event={event}/>
      <Button variant="danger"  onClick={() => handleDelete(event.id)}>Delete</Button>
      </iv>)
     }
    </CardDeck>
    </div>
  )
}

export default connect(null, {deleteEvent})(Events);