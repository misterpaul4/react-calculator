import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(
      prevState => (calculate(prevState, btnName)),
    );
  }

  render() {
    const { next, total, operation } = this.state;

    return (
      <>
        <Display result={`${total} ${operation === '=' ? '' : operation} ${next}`} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
