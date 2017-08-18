import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchGame, errorMessage } from '../Actions/game.js';
import styles from '../Css/OnlineChecker.css';

class FetchAllButton extends Component {
  getAllFriendsGameButton() {
    if (this.props.game.friendsArray.length > 1) {
      if (this.props.game.friendsArray.length > 10) {
        const length = this.props.game.friendsArray.length;
        const i = Math.floor(length / 10);
        const rest = length % 10;
        const arr = [];
        for (let a = 0; a < i; a++) {
          arr[a] = (
            <div className={styles.getAllFriendsGameButtonSection2}>
              <button
                className={styles.getAllFriendsGameButton2}
                onClick={() => this.getAllFriendsGame((10 * (a + 1)), (10 * a), 10)}
              >
                {a * 10} - {(a * 10) + 10}
              </button>
              {this.props.progressBar(10)}
            </div>);
        }
        if (rest !== 0) {
          arr[i + 1] = (
            <div>
              <button
                className={styles.getAllFriendsGameButton2}
                onClick={() => this.getAllFriendsGame((10 * i) + rest, 10 * i, rest)}
              >
                last {rest}
              </button>
              {this.props.progressBar(rest)}
            </div>);
        }
        return arr;
      }
      const length = this.props.game.friendsArray.length;
      return (
        <div className={styles.getAllFriendsGameButtonSection}>
          <button
            className={styles.getAllFriendsGameButton}
            onClick={() => this.getAllFriendsGame(length, 0, length)}
          >All friends</button>
          {this.props.progressBar(length)}
        </div>
      );
    }
    return false;
  }

  getAllFriendsGame(length, id2, howMany) {
    let id = id2;
    if (this.props.game.callNumber <= (10 - howMany)) {
      while (id < length) {
        const url = 'https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/'
          + this.props.game.friendsId[id] + '?api_key=RGAPI-5b813980-c836-4d36-b88e-74548dd18c6b';
        this.props.fetchGame(url, id);
        id++;
        this.props.errorMessage(null);
      }
    } else {
      this.props.errorMessage(`Too many. This Request needs: ${howMany} request. Wait a bit.`);
    }
  }

  render() {
    return (
      <div>
        {this.getAllFriendsGameButton()}
      </div>
    );
  }
}

FetchAllButton.propTypes = {
  game: React.PropTypes.object,
  progressBar: React.PropTypes.func,
  fetchGame: React.PropTypes.func,
  errorMessage: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGame, errorMessage }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FetchAllButton);
