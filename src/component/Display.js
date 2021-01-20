import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result }) => <div className="display flex-column">{result}</div>;

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
