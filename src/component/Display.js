import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result }) => <div className="disp-container"><div className="display flex-column">{result}</div></div>;

Display.propTypes = {
  result: propTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
