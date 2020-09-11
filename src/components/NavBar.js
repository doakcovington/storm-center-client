import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/events/">Events</NavLink>
      <NavLink to="/events/new">Add Event</NavLink>
      <NavLink to="/tutors/">Tutors</NavLink>
      <NavLink to="/tutors/new">Add Tutor</NavLink>
    </div>
  );
};

export default NavBar;