import React from 'react';
import './App.css';
import {connect} from 'react-redux';

//containers
import EventsContainer from './containers/EventsContainer'

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <EventsContainer />
      </div>
    );
  }
}

export default connect()(App); //connect allows access to store in index 
