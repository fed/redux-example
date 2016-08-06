import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Counter from './counter';
import * as actionCreators from '../actions';

class App extends React.Component {
  render() {
    const {counter, actions} = this.props;

    return (
      <section className="main-app-container">
        <h1 className="main-app-nav">Redux Counter Example</h1>
        <Counter counter={counter} actions={actions} />
      </section>
    );
  }
}

App.propTypes = {
  counter: React.PropTypes.number.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
