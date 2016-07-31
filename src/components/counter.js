import React from 'react';

export default class Counter extends React.Component {
  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    return (
      <section>
        <pre>Value is {this.props.counter}</pre>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
      </section>
    );
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  actions: React.PropTypes.object.isRequired
};
