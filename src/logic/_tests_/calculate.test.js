import calculate from '../calculate';

describe('button interactions', () => {
  let state;

  beforeEach(() => {
    state = {
      total: '5',
      next: '8',
      operation: '+',
    };
  });

  it('should reset object when AC is clicked', () => {
    expect(calculate(state, 'AC')).toEqual({
      total: '',
      next: '',
      operation: '',
    });
  });

  it('calculate when equal is clicked', () => {
    expect(calculate(state, '=').total).toBe('13');
  });

  it('state remain unchanged when equal is clicked and operation and next is empty', () => {
    state.next = '';
    expect(calculate(state, '=')).toEqual(state);
  });

  it('should multiply total by -1 if +/- is clicked and only total exist', () => {
    state.next = '';
    expect(calculate(state, '+/-')).toEqual({
      total: '-5',
      next: state.next,
      operation: state.operation,
    });
  });

  it('should multiply next by -1 if +/- is clicked and next exist', () => {
    expect(calculate(state, '+/-')).toEqual({
      total: state.total,
      next: '-8',
      operation: state.operation,
    });
  });

  it('should add dot after the first number of next if next exist', () => {
    expect(calculate(state, '.')).toEqual({
      total: state.total,
      next: '8.',
      operation: state.operation,
    });
  });

  it('should not add dot if it already exist in next', () => {
    state.next = '8.';
    expect(calculate(state, '.')).toEqual(state);
  });

  it('should get percentage of next if % is clicked', () => {
    expect(calculate(state, '%')).toEqual({
      total: state.total,
      next: '0.08',
      operation: state.operation,
    });
  });

  it('should get percentage of total if % is clicked and next is empty', () => {
    state.next = '';
    expect(calculate(state, '%')).toEqual({
      total: '0.05',
      next: state.next,
      operation: state.operation,
    });
  });
});
