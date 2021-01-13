import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  let modObj = { total, next, operation };
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const symb = ['+', '-', 'x', '/', '%'];

  if (btnName === 'AC') {
    modObj = {
      total: '',
      next: '',
      operation: '',
    };
  } else if (btnName === '+/-') {
    if (next) { modObj.next = next * -1; } else { modObj.total = total * -1; }
  } else if (btnName === '.') {
    if (next && !next.includes('.')) {
      modObj.next = next.concat('.');
    } else if (!total.includes('.')) { modObj.total = total.concat('.'); }
  } else if (btnName === '=') {
    modObj.total = operate(total, next, operation);
  } else if (symb.includes(btnName)) {
    if (total && next) {
      modObj = {
        total: operate(total, next, operation),
        next: '',
      };
    } else if (total) {
      modObj.operation = btnName;
    }
  } else if (numbers.includes(btnName)) {
    if (!operation) {
      modObj.total = total.concat(btnName);
    } else {
      modObj.next = next.concat(btnName);
    }
  }

  return modObj;
};

// const testObj = {
//   total: '5',
//   next: '',
//   operation: '+',
// };

// console.log(calculate(testObj, '.'));

export default calculate;
