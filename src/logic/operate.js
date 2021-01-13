import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);

  switch (operation) {
    case '-':
      return x.minus(y).toNumber();
    case '+':
      return x.plus(y).toNumber();
    case 'x':
      return x.times(y).toNumber();
    case '/':
      return x.div(y).toNumber();
    case '%':
      return x.div(100).toNumber();
    default:
      return null;
  }
};

export default operate;
