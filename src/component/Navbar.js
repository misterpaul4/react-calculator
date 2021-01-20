import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/calculator">Calculator</Link>
    <Link to="/qoute">Quote</Link>
  </header>
);

export default Navbar;
