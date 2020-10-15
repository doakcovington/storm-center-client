import React from 'react';
import {connect} from 'react-redux';
import {fetchAdmin} from '../actions/adminActions';

class Login extends React.Component {

  state = {
    email: "",
    password: "",
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value //sets the state for each key in state object [are used for keys with '.' in name]
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchAdmin(this.state);
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmin: (adminInfo) => dispatch(fetchAdmin(adminInfo)),
  }
}

export default connect(null, mapDispatchToProps)(Login);