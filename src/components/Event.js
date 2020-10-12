import React from 'react';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import {connect} from 'react-redux';

class Event extends React.Component {

  tutorCard = () => {
    return this.props.event.attributes.tutor ? <Card.Text>Tutor: {this.props.event.attributes.tutor.name}</Card.Text> : <Card.Text>No Tutor Assigned to This Event</Card.Text>
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }} key={this.props.event.id}>
         <Card.Header as="h5">{this.props.event.attributes.name}</Card.Header>
            <Card.Text>{format(new Date(this.props.event.attributes.date), 'MM/dd/yyyy')} at {this.props.event.attributes.time}</Card.Text>
             <Card.Img variant="top" src={this.props.event.attributes.icon_url} />
            <Card.Text>{this.props.event.attributes.description}</Card.Text>
             {this.tutorCard}
             <Card.Link href={this.props.event.attributes.location}>Zoom Link</Card.Link>
          <Card.Text>Spaces: {this.props.event.attributes.spaces}</Card.Text>
     </Card>
      </div>
    )
  }
}


export default connect(null)(Event);
