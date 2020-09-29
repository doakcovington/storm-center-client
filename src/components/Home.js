import React from 'react';
import Banner from './Banner';
import TutorsContainer from '../containers/TutorsContainer';
import {Route} from 'react-router-dom';
import EventsContainer from '../containers/EventsContainer';
import ContactInformation from './ContactInformation';

const Home = () => {
  return (
    <div>
      <Route exact path='/' component={Banner} />
      <EventsContainer />
      <TutorsContainer />
      <Route exact path='/' component={ContactInformation} />
    </div>
  )
}

export default Home;