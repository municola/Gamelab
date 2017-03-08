import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../Css/App.css';

class ParticipantsList extends Component {
  printParticipants(id, team) {
    return this.props.game.friendsArray.filter((item) => {
      return this.props.game.gameParticipantsTeam[id][item] === team;
    }).map((item, index) => {
      return (
        <p key={index} className={styles.redText2}>{this.props.game.gameParticipants[id][item]}</p>
      );
    });
  }

  printParticipantsList(id) {
    if (this.props.game.showParticipants[id] === true) {
      return (
        <div className={styles.participantsList}>
          <div className={styles.teamList}>
            {this.printParticipants(id, 100)}
          </div>
          <p className={styles.vs}>Vs</p>
          <div className={styles.teamList}>
            {this.printParticipants(id, 200)}
          </div>
        </div>
      );
    }
    return false;
  }

  render() {
    return (
      <div>
        {this.printParticipantsList(this.props.id)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

ParticipantsList.propTypes = {
  game: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default connect(mapStateToProps)(ParticipantsList);
