import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteFriend } from '../Actions/index.js';
import styles from '../Css/App.css';

function CloseButton(props) {
  return (
    <button
      className={styles.close}
      key={props.id}
      onClick={() => props.deleteFriend(props.id)}
    >X</button>
  );
}

function mapStateToProps(state) {
  return {
    game: state.game,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ deleteFriend }, dispatch);
}

CloseButton.propTypes = {
  id: React.PropTypes.number,
  deleteFriend: React.PropTypes.func,
};

export default connect(mapStateToProps, matchDispatchToProps)(CloseButton);
