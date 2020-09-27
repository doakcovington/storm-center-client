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

//returns object of data 
const mapStateToProps = state => { //state is the entire Redux store state 
  return {
    events: state.eventReducer.events, //was state.events before adding combined reducer
    tutors: state.tutorReducer.tutors 
  }
}

//used for dispatching actions to the store
const mapDispatchToProps = {
  fetchEvents: fetchEvents,
}

export default connect( mapStateToProps, mapDispatchToProps)(EventsContainer);