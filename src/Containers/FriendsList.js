import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../Css/App.css';
import FriendButton from '../Containers/FriendButton.js';
import FetchAllButton from '../Containers/FetchAllButton.js';
import GameInfo from '../Containers/GameInfo.js';
import ParticipantsList from '../Containers/ParticipantsList.js';
import ParticipantsButton from '../Containers/ParticipantsButton.js';
import CloseButton from '../Containers/CloseButton.js';

class FriendsList extends Component {
  printFriends() {
    return this.props.game.friendsArray.map((id, index) => {
      return (
        <div key={index}>
          <div className={styles.friendList}>
            <FriendButton progressBar={this.props.progressBar} id={id} />
            <GameInfo id={id} />
            <div>
              <ParticipantsButton id={id} />
              <CloseButton id={id} />
            </div>
          </div>
          <ParticipantsList id={id} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className={styles.contextSection}>
        <div>
          {this.printFriends()}
        </div>
        <FetchAllButton progressBar={this.props.progressBar} />
      </div>
    );
  }
}

FriendsList.propTypes = {
  game: React.PropTypes.object,
  progressBar: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

export default connect(mapStateToProps)(FriendsList);
