import React from 'react';
import CreateTutor from '../components/CreateTutor';
import Tutors from '../components/Tutors';
import {connect} from 'react-redux';
import {getTutors} from '../actions/getTutors';

class TutorsContainer extends React.Component {

  componentDidMount() {
    this.props.getTutors();
  }

  render() {
    return (
      <div>
        Howdy for the Tutors Container!
        <Tutors tutors={this.props.tutors}/>
        <CreateTutor />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tutors: state.tutorReducer.tutors
  }
}

// const mapDispatchToProps = {
//   getTutors: getTutors
// }
 
export default connect(mapStateToProps,{getTutors})(TutorsContainer);