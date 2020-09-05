import React from 'react';
import Events from '../components/Events';
import {connect} from 'react-redux';
import CreateEvent from '../components/CreateEvent';

import {fetchEvents} from '../actions/fetchEvents';

class EventsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <div>
        <CreateEvent />
        <Events events={this.props.events}/>
      </div>
    )
  }
}

const mapStateToProps = state => { //state is from redux store
  return {
    events: state.events
  }
}

export default connect( mapStateToProps, {fetchEvents})(EventsContainer);