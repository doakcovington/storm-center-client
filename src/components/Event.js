import React from 'react';
import Card from 'react-bootstrap/Card'

const Event = (props) => {

  return (
    <Card style={{ width: '20rem' }}>
      <div key={props.event.id}>
        <Card.Title>{props.event.attributes.name}</Card.Title>
        <Card.Subtitle>{props.event.attributes.date}</Card.Subtitle>
        <Card.Text>{props.event.attributes.description}</Card.Text>
        <Card.Text>Tutor: {props.event.attributes.tutor.name}</Card.Text>
        <Card.Text>Location: {props.event.attributes.location}</Card.Text>
        <Card.Text>Spaces Left: {props.event.attributes.spaces}</Card.Text>
      </div>
    </Card>
  )
}

export default Event;
