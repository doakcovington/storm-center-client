import React from 'react';
import Event from './Event';
import { CardDeck } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Events = (props) =>  {

  return (
    <Container>
      <h2>Upcoming Events:</h2>
      <CardDeck className='ml-50'>
    {
      props.events.map(event => <div key={event.id}><Event event={event}/>
      </div>)
     }
    </CardDeck>
    </Container>
  )
}

export default Events;