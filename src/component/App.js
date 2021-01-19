import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calcObj, updateCalc] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = btnName => {
    updateCalc(prevState => (calculate(prevState, btnName)));
  };

  const { next, total, operation } = calcObj;

  return (
    <>
      <Display result={`${total} ${operation === '=' ? '' : operation} ${next}`} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
