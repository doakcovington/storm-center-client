import React from 'react';
import Event from './Event';
import { CardDeck } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {deleteEvent} from '../actions/deleteEvent';
import {connect} from 'react-redux';

const Events = (props) =>  {
  
  const handleDelete = (eventData) => {
    props.deleteEvent(eventData) //event data sends the id
  }

  return (
    <Container>
      <h2>Upcoming Events:</h2>
      <CardDeck className='ml-50'>
    {
      props.events.map(event => <div key={event.id}><Event event={event}/>
        <Button variant="danger" onClick={() => handleDelete(event.id)}>Delete</Button>
      </div>)
     }
    </CardDeck>
    </Container>
  )
}

export default connect(null, {deleteEvent})(Events);