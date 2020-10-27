import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import NavBar from './components/NavBar';
import Login from './components/Login';
import {logAdminOut} from './actions/adminActions';

//containers
import Home from './components/Home';

class App extends React.Component {

  handleOnClick = () => {
    if (this.props.adminReducer.loggedIn) {
      this.props.logAdminOut();
    }
  }

  render () {
    return (
      <div className="App">
        {!this.props.adminReducer.loggedIn ? <Login /> :  <Home />}
        <NavBar />
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
export default connect(mapStateToProps, { logAdminOut })(App);
