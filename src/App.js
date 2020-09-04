import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component {

  componentDidMount(){

  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            We Don't Go To Ravenholm
          </p>
        </header>
      </div>
    );
  }
}

export default connect(null, {fetchEvents})(App); //connect allows access to store in index 
