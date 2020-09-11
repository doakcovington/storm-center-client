import React from 'react';
import EventsContainer from './EventsContainer';
import TutorsContainer from './TutorsContainer';
import Home from '../components/Home';
import {Route} from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <EventsContainer />
      <TutorsContainer />
    </div>
  )
}

export default HomeContainer;