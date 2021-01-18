import React from 'react';
import propTypes from 'prop-types';

const Button = ({ name, handleClick }) => <button onClick={() => handleClick(name)} type="button">{name}</button>;

Button.propTypes = {
  name: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Button;
