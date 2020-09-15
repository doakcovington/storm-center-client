import React from 'react';
import Card from 'react-bootstrap/Card'

const Event = (props) => {

  return (
    <Card style={{ width: '18rem' }} key={props.event.id}>
      <Card.Header as="h5">{props.event.attributes.name}</Card.Header>
          <Card.Text>{props.event.attributes.date}</Card.Text>
          <Card.Text>{props.event.attributes.description}</Card.Text>
          <Card.Text>Tutor: {props.event.attributes.tutor.name}</Card.Text>
          <Card.Link href={props.event.attributes.location}>Zoom Link</Card.Link>
      <Card.Footer>Spaces: {props.event.attributes.spaces}</Card.Footer>
    </Card>
  )
}

export default Event;
