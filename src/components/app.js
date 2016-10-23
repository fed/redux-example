import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import Counter from './counter';

class App extends React.Component {
  render() {
    const {counter, increment, decrement} = this.props;

    return (
      <section className="main-app-container">
        <h1 className="main-app-nav">Redux Counter Example</h1>
        <Counter counter={counter} increment={increment} decrement={decrement} />
      </section>
    );
  }
}

App.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
