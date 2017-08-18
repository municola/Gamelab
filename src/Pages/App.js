import React, { Component } from 'react';
import ReactInterval from 'react-interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from '../Css/App.css';
import { decrement, progressBarCounter, resetCounter } from '../Actions/game.js';
import Navigation from '../Components/Navigation';

class App extends Component {
  counterEnabler() {
    if (this.props.game.callNumber === 0) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={styles.app}>
        <Navigation />
        {this.props.children}
        <ReactInterval
          timeout={100}
          enabled={this.counterEnabler()}
          callback={() => this.props.progressBarCounter()}
        />
        <ReactInterval
          timeout={1000}
          enabled={this.counterEnabler()}
          callback={() => this.props.decrement()}
        />
        <ReactInterval
          timeout={10000}
          enabled={this.counterEnabler()}
          callback={() => this.props.resetCounter()}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  game: React.PropTypes.object,
  progressBarCounter: React.PropTypes.func,
  decrement: React.PropTypes.func,
  resetCounter: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ decrement, progressBarCounter, resetCounter }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
