import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../Css/App.css';

class GameInfo extends Component {
  gameTypeMode(id) {
    if (this.props.game.gameType[id] !== '') {
      if (this.props.game.gameType[id] === 'MATCHED_GAME') {
        if (this.props.game.gameMode[id] === 'ARAM') {
          return <p className={styles.contextText}>Aram</p>;
        }
        if (this.props.game.gameMode[id] === 'CLASSIC') {
          if (this.props.game.bannedChampions[id] === 0) {
            return <p className={styles.contextText}>Normal (Classic)</p>;
          }
          return <p className={styles.contextText}>Ranked (Classic)</p>;
        }
        if (this.props.game.gameMode[id] === 'TWISTED_TREELINE') {
          if (this.props.game.bannedChampions[id] === '') {
            return <p className={styles.contextText}>Normal (Twisted treeline)</p>;
          }
          return <p className={styles.contextText}>Ranked (Twisted treeline)</p>;
        }
        if (this.props.game.gameMode[id] === 'URF') {
          return <p className={styles.contextText}>URF</p>;
        }
      }
      if (this.props.game.gameMode[id] === 'CLASSIC') {
        return <p className={styles.contextText}>Custom (Aram)</p>;
      }
      if (this.props.game.gameMode[id] === 'ARAM') {
        return <p className={styles.contextText}>Custom (Aram)</p>;
      }
      if (this.props.game.gameMode[id] === 'TWISTED_TREELINE') {
        return <p className={styles.contextText}>Custom (Twisted Treeline)</p>;
      }
    }
    return <p className={styles.contextText}>{this.props.game.game[id]}</p>;
  }

  render() {
    return (
      <div className={styles.gameInfo}>
        {this.gameTypeMode(this.props.id)}
        <p className={styles.contextText}>{this.props.game.gameStart[this.props.id]}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

GameInfo.propTypes = {
  game: React.PropTypes.object,
  id: React.PropTypes.number,
};

export default connect(mapStateToProps)(GameInfo);
