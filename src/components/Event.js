import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import {deleteEvent} from '../actions/deleteEvent';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';


const Event = (props) => {

  const handleDelete = (eventData) => {
    props.deleteEvent(eventData) //event data sends the id
  }

  return (
    <Card style={{ width: '18rem' }} key={props.event.id}>
      <Card.Header as="h5">{props.event.attributes.name}</Card.Header>
          <Card.Text>{format(new Date(props.event.attributes.date), 'MM/dd/yyyy')} at {props.event.attributes.time}</Card.Text>
          <Card.Img variant="top" src={props.event.attributes.icon_url} />
          <Card.Text>{props.event.attributes.description}</Card.Text>
          <Card.Text>Tutor: {props.event.attributes.tutor.name}</Card.Text>
          <Card.Link href={props.event.attributes.location}>Zoom Link</Card.Link>
      <Card.Footer>Spaces: {props.event.attributes.spaces}</Card.Footer>
      <Button variant="danger" onClick={() => handleDelete(props.event.id)}>Delete</Button>
    </Card>
  )
}

export default connect(null, {deleteEvent})(Event);
