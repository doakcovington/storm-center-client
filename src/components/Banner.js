import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Route} from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to the Storm Center</h1>
        <p>Storm Center is a collaboration of our student services team</p>
        <p>Join us for tutoring events & study groups!</p>
      </Jumbotron>
    </div>
  )
}

export default Banner;