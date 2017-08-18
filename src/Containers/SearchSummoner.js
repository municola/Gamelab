import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addSummoner, saveName, saveRegion, fetchId, errorMessage } from '../Actions/game.js';
import styles from '../Css/OnlineChecker.css';

class SearchSummoner extends Component {
  addSummoner() {
    if (this.props.game.summonerID !== '' &&
      this.props.game.summonerID !== undefined
      && this.props.game.name !== '') {
      return (
        <button
          className={styles.addSummonerButton}
          onClick={() => this.props.addSummoner()}
        >Add Summoner</button>
      );
    }
    if (this.props.game.summonerID === undefined) {
      return <p className={styles.smallText}>This Summoner doesn't exist.</p>;
    }
    return (
      <p
        className={styles.smallText}
      >Click the submit button to search a Summoner. Then you can add it.</p>
    );
  }

  fetchIdByName() {
    if (this.props.game.callNumber < 10) {
      const url = `https://${this.props.game.region}.api.pvp.net/api/lol/${this.props.game.region}/v1.4/summoner/by-name/${this.props.game.name}?api_key=RGAPI-5b813980-c836-4d36-b88e-74548dd18c6b`;
      this.props.fetchId(url);
      this.props.errorMessage(null);
    } else {
      this.props.errorMessage('Too many');
    }
  }

  render() {
    return (
      <div>
        <div className={styles.searchSection}>
          <select
            onChange={(event) => this.props.saveRegion(event.target.value)}
            className={styles.regionSelector}
          >
            <option value="euw">EUW</option>
            <option value="na">NA</option>
            <option value="kr">KOREA</option>
          </select>
          <input
            className={styles.input}
            onChange={(event) => this.props.saveName(event.target.value)}
          />
          <div className={styles.submitSeciton}>
            <button
              onClick={() => this.fetchIdByName()}
              className={styles.submit}
            >Submit</button>
            {this.props.progressBar(1)}
          </div>
        </div>
        <div className={styles.summonerIdSection}>
          <p className={styles.normalText}>Summonder ID:</p>
          <p className={styles.summonerIdText}>{this.props.game.summonerID}</p>
        </div>
        {this.addSummoner()}
      </div>
    );
  }
}

SearchSummoner.propTypes = {
  game: React.PropTypes.object,
  addSummoner: React.PropTypes.func,
  fetchId: React.PropTypes.func,
  errorMessage: React.PropTypes.func,
  saveRegion: React.PropTypes.func,
  saveName: React.PropTypes.func,
  progressBar: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addSummoner, saveName, saveRegion, fetchId, errorMessage }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchSummoner);
