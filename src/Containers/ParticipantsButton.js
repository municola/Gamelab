import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setParticipants } from '../Actions/index.js';
import styles from '../Css/App.css';

class ParticipantsButton extends Component {
  setParticipants(id) {
    if (this.props.game.gameParticipants[id] !== '' &&
      this.props.game.showParticipants[id] === false) {
      this.props.setParticipants(id, true);
    } else {
      this.props.setParticipants(id, false);
    }
  }

  printPlayerButton(id) {
    if (this.props.game.showParticipants[id] === false) {
      return <p className={styles.redText2}>Player</p>;
    }
    return <p className={styles.redText2}>Close</p>;
  }

  render() {
    return (
      <button
        className={styles.players}
        onClick={() => this.setParticipants(this.props.id)}
      >{this.printPlayerButton(this.props.id)}</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setParticipants }, dispatch);
}

ParticipantsButton.propTypes = {
  game: React.PropTypes.object,
  setParticipants: React.PropTypes.func,
  id: React.PropTypes.number,
};

export default connect(mapStateToProps, matchDispatchToProps)(ParticipantsButton);
