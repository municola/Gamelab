import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchGame, errorMessage } from '../Actions/game.js';
import styles from '../Css/OnlineChecker.css';

class FriendButton extends Component {
  getFriendsGame(id, arrayId) {
    if (this.props.game.callNumber < 10) {
      const url = 'https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/'
        + id + '?api_key=RGAPI-5b813980-c836-4d36-b88e-74548dd18c6b';
      this.props.fetchGame(url, arrayId);
      this.props.errorMessage(null);
    } else {
      this.props.errorMessage('Too many. Try again later');
    }
  }

  styleButton(id) {
    if (this.props.game.game[id] !== 'Not fetched yet') {
      if (this.props.game.game[id] === 'In game') {
        return this.props.game.styles.style1;
      }
      return this.props.game.styles.style2;
    }
    return this.props.game.styles.style3;
  }

  render() {
    return (
      <div>
        <button
          style={this.styleButton(this.props.id)}
          className={styles.friendButton}
          onClick={() => this.getFriendsGame(
            this.props.game.friendsId[this.props.id], this.props.id)}
        >
          {this.props.game.friendsName[this.props.id]}
        </button>
        {this.props.progressBar(1)}
      </div>
    );
  }
}

FriendButton.propTypes = {
  id: React.PropTypes.number,
  progressBar: React.PropTypes.func,
  game: React.PropTypes.object,
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

export default connect(mapStateToProps, matchDispatchToProps)(FriendButton);
