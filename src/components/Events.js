import React from 'react'

const Events = (props) => {
  return (
    <div>
     {props.events.map(event => <li key={event.id}>{event.attributes.name} - {event.attributes.description} - Spaces: {event.attributes.spaces} Tutor: {event.attributes.tutor.name}</li>)}
    </div>
  )
}

export default Events;