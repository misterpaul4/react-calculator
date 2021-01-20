import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link to="/homepage">Home</Link>
    <Link to="/">Calculator</Link>
    <Link to="/quote">Quote</Link>
  </header>
);

export default Navbar;
