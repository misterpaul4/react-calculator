import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let x;
  let y;

  try {
    x = Big(numberOne);
    y = Big(numberTwo);
  } catch (err) {
    y = Big(numberOne);
  }

  switch (operation) {
    case '-':
      return x.minus(y).toString();
    case '+':
      return x.plus(y).toString();
    case 'x':
      return x.times(y).toString();
    case '/':
      try {
        return x.div(y).toString();
      } catch (err) {
        return null;
      }
    case '%':
      return y.div(100).toString();
    default:
      return numberOne;
  }
};

export default operate;
