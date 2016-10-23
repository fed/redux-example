import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      by: 1
    };
  }

  handleIncrement() {
    this.props.increment(this.state.by);
  }

  handleDecrement() {
    this.props.decrement(this.state.by);
  }

  handleByChange(event) {
    this.setState({
      by: event.target.value
    });
  }

  render() {
    return (
      <section>
        <pre>Value is {this.props.counter}</pre>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <label>
          Increment / Decrement by:
          <input value={this.state.by} type="number" onChange={this.handleByChange.bind(this)} />
        </label>
      </section>
    );
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
};
