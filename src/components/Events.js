import React from 'react';
import Event from './Event';

const Events = (props) => {
  console.log(props)
  return (
    <div>
     {props.events.map(event => <div key={event.id}><Event event={event}/> </div>)}
    </div>
  )
}

export default Events;