import Progress from 'react-progressbar';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { autobind } from 'core-decorators';

import styles from '../Css/OnlineChecker.css';
import SearchSummoner from '../Containers/SearchSummoner.js';
import FriendsList from '../Containers/FriendsList.js';
import Header from '../Components/Header.js';

class OnlineChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  progressBar(length) {
    if (this.props.game.callNumber > 10 - length) {
      return (
        <Progress
          color="#00e4ff"
          height="5px"
          completed={(this.props.game.progressBarCounter + 900) / 100}
        />
      );
    }
    return <Progress color="green" height="5px" completed={0} />;
  }

  printTime() {
    if (this.props.game.callNumber !== 0) {
      return (
        <div className={styles.time}>
          <p className={styles.timer}>(Countdown: </p>
          <p className={styles.redText}>{this.props.game.counter}</p>
          <p>)</p>
        </div>
      );
    }
    return false;
  }

  @autobind
  connect() {
    const socket = io('http://localhost:5609');
    socket.emit('message', {});
    socket.on('answer', (message) => this.setState({ message }));
  }

  render() {
    return (
      <div className={styles.body}>
        <Header title={'OnlineChecker'} />
        <div className={styles.container}>
          <SearchSummoner progressBar={(length) => this.progressBar(length)} />
          <FriendsList progressBar={(length) => this.progressBar(length)} />
          <div className={styles.time}>
            <p>Amount of Requests you can make:</p>
            <p className={styles.counter}>{10 - this.props.game.callNumber}</p>
            {this.printTime()}
          </div>
          <p className={styles.normalText}>{this.props.game.errorMessage}</p>
          <button onClick={this.connect}>click me </button>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

OnlineChecker.propTypes = {
  game: React.PropTypes.object,
  progressBarCounter: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

export default connect(mapStateToProps)(OnlineChecker);
