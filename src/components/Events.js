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
    <CardDeck>
    {
      props.events.map(event => <div key={event.id}><Event event={event}/>
      <Button variant="danger"  onClick={() => handleDelete(event.id)}>Delete</Button>
      </div>)
     }
    </CardDeck>
  )
}

export default connect(null, {deleteEvent})(Events);