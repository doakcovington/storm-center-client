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

  //checks tutor relationship
  //If there is a tutor assigned to event then show tutor name, else display there is no tutor 
  const tutorCard = props.event.attributes.tutor ? <Card.Text>Tutor: {props.event.attributes.tutor.name}</Card.Text> : <Card.Text>No Tutor is Assigned to This Event</Card.Text> 
  
  return (
    <div className='mt-5'>
      <Card style={{ width: '18rem' }} key={props.event.id}>
        <Card.Header as="h5">{props.event.attributes.name}</Card.Header>
            <Card.Text>{format(new Date(props.event.attributes.date), 'MM/dd/yyyy')} at {props.event.attributes.time}</Card.Text>
            <Card.Img variant="top" src={props.event.attributes.icon_url} />
            <Card.Text>{props.event.attributes.description}</Card.Text>
            {tutorCard}
            <Card.Link href={props.event.attributes.location}>Zoom Link</Card.Link>
        <Card.Footer>Spaces: {props.event.attributes.spaces}</Card.Footer>
        <Button variant="danger" onClick={() => handleDelete(props.event.id)}>Delete</Button>
    </Card>
    </div>
  )
}


export default connect(null, {deleteEvent})(Event);
