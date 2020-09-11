import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';

//containers
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <NavBar />
        <HomeContainer />
      </div>
    );
  }
}

export default connect()(App); //connect allows access to store in index 
