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
    <div className="calculator">
      <Display result={total ? `${total} ${operation} ${next}` : '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
