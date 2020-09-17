import React from 'react';
import {connect} from 'react-redux';
import {deleteTutor} from '../actions/deleteTutor'
import Button from 'react-bootstrap/Button';
import { Card, CardDeck } from 'react-bootstrap';

const Tutors = (props) => {
  
  const handleDelete = (tutorData) => {
    props.deleteTutor(tutorData)
  }

  return (
    <CardDeck>
      {
        props.tutors.map(tutor => 
        <Card key={tutor.id}>
          <Card.Title>{tutor.attributes.name}</Card.Title>
            <Card.Text>{tutor.attributes.speciality}</Card.Text>
            <Card.Text>{tutor.attributes.phonenumber}</Card.Text>
            <Card.Text>{tutor.attributes.email}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(tutor.id)}>Delete</Button>
        </Card>)
      }
    </CardDeck>
  )
}

export default connect(null, {deleteTutor})(Tutors);