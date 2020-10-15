import React from 'react';
import {connect} from 'react-redux';
import {fetchAdmin} from '../actions/adminActions';

class Login extends React.Component {

  state = {
    email: "",
    password: "",
  }

  render() {
    return(
      <div>
        <h2>Login:</h2>
        <form>
          <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleOnChange}></input>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleOnChange}></input>
          <input type="submit" value="login"></input>
        </form>
      </div>
    )
  }

}

export default connect(null,)(Login);