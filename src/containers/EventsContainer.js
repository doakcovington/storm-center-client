import React from 'react';
import Events from '../components/Events';
import {connect} from 'react-redux';
import CreateEvent from '../components/CreateEvent';
import {Route} from 'react-router-dom';
import {fetchEvents} from '../actions/fetchEvents';

class EventsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();

  }

  render() {
    return (
      <div>
        <Route path='/events/new' render={() => <CreateEvent tutors={this.props.tutors}/>}/>
        <Route exact path={['/', '/events/']} render={() => <Events events={this.props.events}/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => { //state is from redux store
  return {
    events: state.eventReducer.events, //was state.events before adding combined reducer
    tutors: state.tutorReducer.tutors 
  }
}

const mapDispatchToProps = {
  fetchEvents: fetchEvents,
}

export default connect( mapStateToProps, mapDispatchToProps)(EventsContainer);