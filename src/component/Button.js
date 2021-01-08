import React from 'react';
import propTypes from 'prop-types';

const Button = ({ name }) => <div>{name}</div>;

Button.propTypes = {
  name: propTypes.string.isRequired,
};

export default Button;
