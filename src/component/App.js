/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '23',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const calcObj = calculate(this.state, btnName);
    this.setState({
      total: calcObj.total,
      next: calcObj.next,
      operation: calcObj.operation,
    });
  }

  handleDisplay() {
    let screen = '';
    if (this.state.next) {
      screen = `${this.state.total} ${this.state.operation} ${this.state.next}`;
    } else if (this.state.total) {
      screen = this.state.operation ? (`${this.state.total} ${this.state.operation}`) : this.state.total;
    }

    return screen.toString();
  }

  render() {
    return (
      <>
        <Display result={this.handleDisplay()} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}
