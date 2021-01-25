import calculate from '../calculate';

describe('button interactions', () => {
  let state;
  let res;

  beforeEach(() => {
    state = {
      total: '5',
      next: '8',
      operation: '+',
    };
  });

  it('should reset object when AC is clicked', () => {
    res = calculate(state, 'AC');
    expect(res).toEqual({
      total: '',
      next: '',
      operation: '',
    });

    expect(res).not.toEqual(state);
  });

  it('calculate when equal is clicked', () => {
    res = calculate(state, '=');
    expect(res.total).toBe('13');
    expect(res.total).not.toBe(state.total);
  });

  it('state remain unchanged when equal is clicked and operation and next is empty', () => {
    state.next = '';
    res = calculate(state, '=');
    expect(res).toEqual(state);
    expect(res.total > '5' || res.total < '5').not.toBe(true);
  });

  it('should multiply total by -1 if +/- is clicked and only total exist', () => {
    state.next = '';
    res = calculate(state, '+/-');
    expect(res).toEqual({
      total: '-5',
      next: state.next,
      operation: state.operation,
    });

    expect(res).not.toEqual(state);
  });

  it('should multiply next by -1 if +/- is clicked and next exist', () => {
    res = calculate(state, '+/-');
    expect(res).toEqual({
      total: state.total,
      next: '-8',
      operation: state.operation,
    });

    expect(res.total < 0).not.toBe(true);
  });

  it('should add dot after the first number of next if next exist', () => {
    res = calculate(state, '.');
    expect(res).toEqual({
      total: state.total,
      next: '8.',
      operation: state.operation,
    });

    expect(res.total.includes('.')).not.toBe(true);
  });

  it('should not add dot if it already exist in next', () => {
    state.next = '8.';
    res = calculate(state, '.');
    expect(res).toEqual(state);

    expect(res.next).not.toBe('8..');
  });

  it('should get percentage of next if % is clicked and next is not empty', () => {
    res = calculate(state, '%');
    expect(res).toEqual({
      total: state.total,
      next: '0.08',
      operation: state.operation,
    });

    expect(res.total).not.toBe('0.05');
  });

  it('should get percentage of total if % is clicked and next is empty', () => {
    state.next = '';
    res = calculate(state, '%');
    expect(res).toEqual({
      total: '0.05',
      next: state.next,
      operation: state.operation,
    });

    expect(res.next).not.toBe('8');
  });
});
