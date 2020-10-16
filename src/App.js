import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';
import Login from './components/Login';

//containers
import Home from './components/Home';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <Login />
        {!this.props.adminReducer.loggedIn ? <h1>Please Login!</h1> : <h1>Welcome</h1>}
        <NavBar />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminReducer: state.adminReducer
  }
}

//connect() connects component to redux store
export default connect(mapStateToProps)(App);
