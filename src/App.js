import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';

//containers
import EventsContainer from './containers/EventsContainer';
import TutorsContainer from './containers/TutorsContainer';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <EventsContainer />
        <TutorsContainer />
      </div>
    );
  }
}

export default connect()(App); //connect allows access to store in index 
