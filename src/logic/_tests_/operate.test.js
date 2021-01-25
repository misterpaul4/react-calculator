import operate from '../operate';

describe('operation', () => {
  it('should add two numbers', () => {
    expect(operate(15, 10, '+')).toBe('25');
    expect(operate(15, 10, '+')).not.toBe('215');
  });

  it('should subtract two numbers', () => {
    expect(operate(15, 10, '-')).toBe('5');
    expect(operate(15, 10, '-')).not.toBe('215');
  });

  it('should multiply two numbers', () => {
    expect(operate(15, 10, 'x')).toBe('150');
    expect(operate(15, 10, 'x')).not.toBe('215');
  });

  it('should divide two numbers', () => {
    expect(operate(15, 5, '/')).toBe('3');
    expect(operate(15, 10, '/')).not.toBe('215');
  });

  it('should return null when dividing by 0', () => {
    expect(operate(15, 0, '/')).toBe(null);
    expect(operate(15, 0, '/')).not.toBe('0');
  });

  it('should get percentage of second number if it is not empty', () => {
    expect(operate(15, 5, '%')).toBe('0.05');
    expect(operate(15, 10, '%')).not.toBe('0.15');
  });

  it('should get percentage of first number if second number is empty', () => {
    expect(operate(15, '', '%')).toBe('0.15');
    expect(operate(15, '', '%')).not.toBe('');
  });
});
