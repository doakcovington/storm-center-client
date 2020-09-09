import React from 'react';
import './App.css';
import {connect} from 'react-redux';

//containers
import EventsContainer from './containers/EventsContainer';
import TutorsContainer from './containers/TutorsContainer';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <EventsContainer />
        <TutorsContainer />
      </div>
    );
  }
}

export default connect()(App); //connect allows access to store in index 
