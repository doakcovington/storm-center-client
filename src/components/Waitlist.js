import React from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

const Waitlist = (props) => {
  
  // const handleDelete = (waitlistData) => {
  //   props.deleteWaitlist(waitlistData)
  // }
  return (
    <Button variant="primary">Add me to the waitlist</Button>
  )
}

export default connect(null)(Waitlist);
