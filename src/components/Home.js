import React from 'react';
import Banner from './Banner';
import TutorsContainer from '../containers/TutorsContainer';
import {Route} from 'react-router-dom';
import EventsContainer from '../containers/EventsContainer';

const Home = () => {
  return (
    <div>
      <Route exact path='/' component={Banner} />
      <EventsContainer />
      <TutorsContainer />
    </div>
  )
}

export default Home;