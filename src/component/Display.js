import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result }) => <div>{result}</div>;

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
