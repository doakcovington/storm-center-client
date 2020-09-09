import React from 'react';
import {connect} from 'react-redux';

class CreateTutor extends React.Component {

  render() {
    return (
      <div>Howdy from CreateTutor</div>
    )
  }
}

export default connect(null)(CreateTutor);