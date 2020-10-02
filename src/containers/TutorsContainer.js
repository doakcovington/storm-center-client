import React from 'react';
import CreateTutor from '../components/CreateTutor';
import Tutors from '../components/Tutors';
import {connect} from 'react-redux';
import {getTutors} from '../actions/getTutors';
import {Route} from 'react-router-dom';
class TutorsContainer extends React.Component {

  componentDidMount() {
    this.props.getTutors();
  }

  render() {
    return (
      <div>
        <Route path='/tutors/new' component={CreateTutor} />
        <Route exact path='/tutors/' render={() => <Tutors tutors={this.props.tutors}/>}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tutors: state.tutorReducer.tutors
  }
}
 
export default connect(mapStateToProps,{getTutors})(TutorsContainer);