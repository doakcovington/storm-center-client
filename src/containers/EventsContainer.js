import React from 'react';
import Events from '../components/Events';
import {connect} from 'react-redux';
import CreateEvent from '../components/CreateEvent';
import {Route} from 'react-router-dom';
import {fetchEvents} from '../actions/fetchEvents';

class EventsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchEvents()
  }

  render() {
    return (
      <div>
        <Route path='/events/new' component={CreateEvent} />
        <Route exact path={['/', '/events/']} render={() => <Events events={this.props.events}/>}/>
      </div>
    )
  }
}

const mapStateToProps = state => { //state is from redux store
  return {
    events: state.eventReducer.events //was state.events before adding combined reducer
  }
}

// const mapDispatchToProps = {
//   fetchEvents: fetchEvents
// }

export default connect( mapStateToProps, {fetchEvents})(EventsContainer);