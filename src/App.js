import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';

//containers
import Home from './components/Home';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

//connect() connects component to redux store
export default connect()(App);
